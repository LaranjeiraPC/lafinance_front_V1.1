import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Acao } from 'src/app/_model/acao.model';
import { CompraVenda } from 'src/app/_model/compraVenda.model';
import { Venda } from 'src/app/_model/venda.model';
import { TipoResponse } from 'src/app/_response/response';
import { VendaService } from '../venda/_service/venda.service';
import { CompraVendaService } from '../_service/compraVenda.service';
import { AcaoService } from './_service/acao.service';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcaoComponent implements OnInit {

  acoes: Acao[] = [];
  acaoIds: number[] = [];
  acoesOutros: Acao[] = [];
  acoesCalculado: Acao[] = [];
  acaoVenda: Acao[] = [];
  selectedVenda: Venda = new Venda();
  selectedNewVenda: Venda = new Venda();
  selectedAcaoToVenda: Acao = new Acao();
  selectedAcao: Acao = new Acao();
  selectedData: String = "N"
  dataCompra: Date = new Date();
  options: any[] = [];
  dataVenda: Date = new Date();
  precoAtual: number = 0;

  totalRecords: number = 0;
  cols: any[] = [];
  loading: boolean = false;

  displayModal: boolean = false;
  displayModalNew: boolean = false;
  displayModalData: boolean = false;
  displayModalExcluir: boolean = false;
  displayModalCadastrar: boolean = false;

  data: Date = new Date;
  mes: number = this.data.getMonth() + 1;
  ano: number = this.data.getFullYear();

  constructor(
    private _acaoService: AcaoService,
    private _vendaService: VendaService,
    private _messageService: MessageService,
    private _compraVendaService: CompraVendaService,
    private _currency: CurrencyPipe
  ) {
    this.options = [
      { label: "Nova Data", value: "S" },
      { label: "Data Atual", value: "N" }
    ];
  }

  ngOnInit(): void {
    this.loading = true;
    this.loadCustomers(this.mes, this.ano);
  }

  loadCustomers(mes: number, ano: number) {
    setTimeout(() => {
      this.consultarAcoes(mes, ano);
    }, 1000);
  }

  consultarAcoes(mes: number, ano: number): void {
    this.acoes = [];
    this.acaoIds = [];
    let subscription = this._acaoService.consultarAcoesAtivosMesAtual(mes, ano).subscribe(data => {
      subscription.unsubscribe();
      if (data.length >= 1) {
        this.loading = false;
        this.acoes = data;
        this.consultarAcoesOutrosMeses();
        this.totalInvestido();
      } else {
        this.loading = false;
      }

    });
  }

  consultarAcoesOutrosMeses(): void {
    this.acoesOutros = [];
    let subscription = this._acaoService.consultarAcoesAtivosOutrosMeses(this.acoes).subscribe(data => {
      subscription.unsubscribe();
      if (data.length >= 1) {
        this.loading = false;
        this.acoesOutros = data;
        this.totalInvestido();
      } else {
        this.loading = false;
      }
    });
  }

  totalInvestido(): void {
    let valorTotalInvestido: number = 0;
    this.acoes.forEach(a => {
      valorTotalInvestido = valorTotalInvestido + a.valorBrutoPago;
    });

    this.acoesOutros.forEach(a => {
      valorTotalInvestido = valorTotalInvestido + a.valorBrutoPago;
    });
    let valorTotalInvestidoConverte = this._currency.transform(valorTotalInvestido, 'BRL');
    if (valorTotalInvestidoConverte != null) {
      this._messageService.add({ severity: "warn", summary: "Total investido", detail: valorTotalInvestidoConverte.toString() });
    }
  }

  selectAcao(acao: Acao): void {
    this.selectedAcao = acao;
    this.dataCompra = new Date();
    this.displayModal = true;
    this.selectedData = "N";
  }

  excluirAcao(acao: Acao) {
    if (acao) {
      let subscription = this._acaoService.excluirAcao(acao.id).subscribe(response => {
        subscription.unsubscribe();
        if (response.status == 204) {
          this.displayModalExcluir = false;
          this.displayModal = false;
          this.showViaService("success", TipoResponse.SUCESSO, "Ativo excluído com sucesso");
          this.loadCustomers(this.mes, this.ano);
        }
      }, () => {
        this.showViaService("error", TipoResponse.ERRO, "Falha ao excluir ativo");
      });
    }
  }

  abrirModalData() {
    this.displayModalData = true;
  }

  selectVenda(acao: Acao): void {
    this.selectedAcaoToVenda = acao;

    this.acaoVenda = [];
    this.acaoVenda.push(acao);

    this.dataVenda = new Date();
    this.selectedData = "S";

    this.selectedNewVenda = new Venda();
    this.displayModalNew = true;
  }

  editarAcao(acao: Acao) {
    if (this.selectedData == "S") {
      acao.dataCompra = this.dataCompra;
    }

    let subscription = this._acaoService.editarAcao(acao).subscribe(data => {
      subscription.unsubscribe();
      this.displayModal = false;
      this.displayModalData = false;
      this.showViaService("success", TipoResponse.SUCESSO, "Ativo editado com sucesso");
      this.loadCustomers(this.mes, this.ano);
    }, () => {
      this.displayModalData = true;
      this.displayModal = false;
      this.showViaService("error", TipoResponse.ERRO, "Falha ao editar ativo");
      this.loading = false;
    });
  }

  salvarVenda(venda: Venda): void {
    this.loading = true;
    venda.ativo = this.selectedAcaoToVenda.ativo;

    let subscription = this._vendaService.salvarVenda(venda).subscribe(dataVenda => {
      subscription.unsubscribe();

      let acao: Acao[] = [];
      acao.push(this.selectedAcaoToVenda);

      let subscriptionAcao = this._acaoService.inativarAcoes(acao).subscribe(dataCompra => {
        subscriptionAcao.unsubscribe();
        let ids = dataCompra;
        let compraVenda = this.gerarCompraVenda(ids, dataVenda);
        let subscriptionCompraVenda = this._compraVendaService.salvarCompraVenda(compraVenda).subscribe(() => subscriptionCompraVenda.unsubscribe());
      });

      this.showViaService("success", TipoResponse.SUCESSO, "Ativo vendido com sucesso");
    }, () => {
      this.showViaService("error", TipoResponse.ERRO, "Falha ao vender ativo");
    });

    this.loadCustomers(this.mes, this.ano);
    this.displayModalNew = false;

    this.loading = false;
  }

  gerarCompraVenda(ids: Acao[], id: Venda): CompraVenda[] {
    let compraVendaList: CompraVenda[] = [];
    let compraVenda: CompraVenda = new CompraVenda();

    ids.forEach(a => {
      compraVenda.venda = id;
      compraVenda.compra = a;
      compraVendaList.push(compraVenda);
    });
    return compraVendaList;
  }

  showViaService(tipo: string, status: string, mensagem: string) {
    this._messageService.add({ severity: tipo, summary: status, detail: mensagem });
    setTimeout(() => {
      this._messageService.clear();
    }, 3000);
  }

}
