import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Acao } from 'src/app/_model/acao.model';
import { Ativo } from 'src/app/_model/ativo.model';
import { CompraVenda } from 'src/app/_model/compraVenda.model';
import { Venda } from 'src/app/_model/venda.model';
import { Response, TipoResponse } from 'src/app/_response/response';
import { Util } from 'src/app/_util/util';
import { AcaoService } from '../acao/_service/acao.service';
import { AtivoService } from '../ativo/_service/ativo.service';
import { CompraVendaService } from '../_service/compraVenda.service';
import { AnaliseService } from './_service/analise.service';
import { VendaService } from './_service/venda.service';
 
@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {
 
  acoes: Acao[] = [];
  vendas: Venda[] = [];
  selectedAcao: Acao[] = []
  selectedVenda: Venda = new Venda();
  selectedAtivo: Ativo = new Ativo();
  selectedNewVenda: Venda = new Venda();
  selectedData: String = "N"
  dataVenda: Date = new Date();
  options: any[] = [];
  lucroTotalBruto: number = 0;
  nomeMes: string = "";
  ano: string = "";
  ativos: Ativo[] = [];

  totalRecords: number = 0;
  cols: any[] = [];
  loading: boolean = false;

  displayModal: boolean = false;
  displayModalNew: boolean = false;
  displayModalData: boolean = false;
  displayModalExcluir: boolean = false;
  displayModalCadastrar: boolean = false;

  habilitarBotaoSalvar: boolean = false;

  constructor(
    private _vendaService: VendaService,
    private _compraVendaService: CompraVendaService,
    private _ativoService: AtivoService,
    private _analiseService: AnaliseService,
    private _messageService: MessageService,
    private _acaoService: AcaoService,
    private _currency: CurrencyPipe,
    private _util: Util,
  ) { 
    this.options = [
      { label: "Nova Data", value: "S" },
      { label: "Data Atual", value: "N" }
    ];
  }

  ngOnInit(): void {
    this.loading = true;

    this.nomeMes = this._util.converterData();
    this.ano = new Date().getFullYear().toString();

    this.loadCustomers(this.ano, this.nomeMes);
  }

  consultarAtivos(): void {
    let subscription = this._ativoService.consultarAtivos().subscribe(data => {
      subscription.unsubscribe();
      if (data.length >= 1) {
        this.ativos = data;
        if(this.ativos.length >= 1){
          this.selectedAtivo = this.ativos[0];
          this.consultarAcoes(this.selectedAtivo);
        }
      }
    });
  }

  consultarAcoes(ativo: Ativo): void {
    let subscription = this._acaoService.consultarAcoesAtivosVenda(ativo.nome).subscribe(data => {
      subscription.unsubscribe();
      subscription.unsubscribe();
      if (data.length >= 1) {
        this.habilitarBotaoSalvar = true;
        this.loading = false;
        this.acoes = data;
      } else {
        this.habilitarBotaoSalvar = false;
        this.acoes = [];
        this.loading = false;
      }
    });
  }

  loadCustomers(ano: string, dataAtual: string) {
    setTimeout(() => {
      this.consultarVendas(ano, dataAtual);
    }, 1000);
  }

  consultarVendas(ano: string, mes: string): void {
    this.vendas = [];
    let subscription = this._vendaService.consultarVendas(ano, mes).subscribe(data => {
      subscription.unsubscribe();
      if (data.length >= 1) {
        this.loading = false;
        this.consultarAnaliseLucroBruto(data);
      } else {
        this.loading = false;
      }
    });
  }

  consultarAnaliseLucroBruto(vendas: Venda[]): void{
    this.lucroTotalBruto = 0;
    this._messageService.clear();

    vendas.forEach(v => {
      let subscription = this._analiseService.calcularLucroBruto(v.id).subscribe(data => {
        subscription.unsubscribe();
        v.lucroBrutoTotal = data;
        this.lucroTotalBruto = this.lucroTotalBruto + v.lucroBrutoTotal;
        this.vendas.push(v);
        this._messageService.clear();
        
        let lucroTotalBrutoConverte = this._currency.transform(this.lucroTotalBruto, 'BRL');
        if (lucroTotalBrutoConverte != null) {
          this._messageService.add({ severity: "warn", summary: "Lucro Bruto Total", detail: lucroTotalBrutoConverte.toString() });
        }
      });
    });
  }

  selectVenda(venda: Venda): void {
    this.selectedVenda = venda;
    this.dataVenda = new Date();
    this.displayModal = true;    
    this.selectedData = "S";
  }

  selectNewVenda(): void {
    this.consultarAtivos();
    this.selectedNewVenda = new Venda();
    this.displayModalNew = true;   
  }

  excluirVenda(venda: Venda): void {
    if (venda) {
      let subscription = this._vendaService.excluirVenda(venda.id).subscribe(data => {
        subscription.unsubscribe();
        this.displayModalExcluir = false;
        this.displayModal = false;
        if (data.tipo == TipoResponse.SUCESSO) {
          this.showViaService(data, "success");
        } else {
          this.showViaService(data, "error");
        }
        this.loadCustomers(this.ano, this.nomeMes);
      });
    }
  }

  editarVenda(venda: Venda) {
    if (this.selectedData == "S") {
      venda.dataVenda = this.dataVenda;
    }

    let subscription = this._vendaService.editarVenda(venda).subscribe(data => {
      subscription.unsubscribe();
      if (data.tipo != null && data.tipo == TipoResponse.SUCESSO) {
        this.displayModal = false;
        this.displayModalData = false;
        this.showViaService(data, "success");
        this.loadCustomers(this.ano, this.nomeMes);
      } else {
        this.displayModalData = true;
        this.displayModal = false;
        this.showViaService(data, "error");
        this.loading = false;
      }
    });
    
  }

  abrirModalData(){
    this.displayModalData = true;
  }

  salvarVenda(venda: Venda): void {
    this.loading = true;
    if (this.selectedAtivo != null && this.selectedAcao.length >= 1) {
      this.displayModalNew = true;
      venda.ativo = this.selectedAtivo;
      
      let subscription = this._vendaService.salvarVenda(venda).subscribe(dataVenda => {
        subscription.unsubscribe();
        if (dataVenda != null) {
          
          let subscriptionAcao = this._acaoService.inativarAcoes(this.selectedAcao).subscribe(dataCompra => {
            subscriptionAcao.unsubscribe();
            let ids = dataCompra.dtos;
            let compraVenda = this.gerarCompraVenda(ids, dataVenda.dtos[0]);
            let subscriptionCompraVenda = this._compraVendaService.salvarCompraVenda(compraVenda).subscribe(() => subscriptionCompraVenda.unsubscribe());
          });

          this.showViaService(dataVenda, "success");
        } else {
          this.showViaService(dataVenda, "error");
        }
      });

      this.loadCustomers(this.ano, this.nomeMes);
      this.displayModalNew = false;
    }else{
      let aviso: Response = new Response();
      aviso.mensagem = "Selecione uma ação!";
      aviso.tipo = TipoResponse.ERRO;
      this.showViaService(aviso, "error");
    }
    
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

  showViaService(response: Response, tipo: string) {
    this._messageService.add({ severity: tipo, summary: response.tipo, detail: response.mensagem });
    setTimeout(() => {
      this._messageService.clear();
    }, 3000);
  }

}
