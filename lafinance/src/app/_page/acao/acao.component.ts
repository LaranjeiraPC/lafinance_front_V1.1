import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Acao } from 'src/app/_model/acao.model';
import { Response, TipoResponse } from 'src/app/_response/response';
import { AcaoService } from './_service/acao.service';
 
@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.scss']
})
export class AcaoComponent implements OnInit {

  acoes: Acao[] = [];
  selectedAcao: Acao = new Acao();
  selectedData: String = "N"
  dataCompra: Date = new Date();
  options: any[] = [];

  totalRecords: number = 0;
  cols: any[] = [];
  loading: boolean = false;

  displayModal: boolean = false;
  displayModalData: boolean = false;
  displayModalExcluir: boolean = false;
  displayModalCadastrar: boolean = false;

  constructor(
    private _acaoService: AcaoService,
    private _messageService: MessageService,
    private _currency: CurrencyPipe
  ) {
    this.options = [
      { label: "Nova Data", value: "S" },
      { label: "Data Atual", value: "N" }
    ];
  }

  ngOnInit(): void {
    this.loading = true;
    this.loadCustomers();
  }

  loadCustomers() {
    setTimeout(() => {
      this.consultarAcoes();
    }, 1000);
  }

  consultarAcoes(): void {
    this.acoes = [];
    let subscription = this._acaoService.consultarAcoesAtivos().subscribe(data => {
      subscription.unsubscribe();
      if (data.length >= 1) {
        this.loading = false;
        this.acoes = data;
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
      let subscription = this._acaoService.excluirAcao(acao.id).subscribe(data => {
        subscription.unsubscribe();
        this.displayModalExcluir = false;
        this.displayModal = false;
        if (data.tipo == TipoResponse.SUCESSO) {
          this.showViaService(data, "success");
        } else {
          this.showViaService(data, "error");
        }
        this.loadCustomers();
      });
    }
  }

  abrirModalData(){
    this.displayModalData = true;
  }

  editarAcao(acao: Acao) {
    if (this.selectedData == "S") {
      acao.dataCompra = this.dataCompra;
    }

    let subscription = this._acaoService.editarAcao(acao).subscribe(data => {
      subscription.unsubscribe();
      if (data.tipo != null && data.tipo == TipoResponse.SUCESSO) {
        this.displayModal = false;
        this.displayModalData = false;
        this.showViaService(data, "success");
        this.loadCustomers();
      } else {
        this.displayModalData = true;
        this.displayModal = false;
        this.showViaService(data, "error");
        this.loading = false;
      }
    });
    
  }

  showViaService(response: Response, tipo: string) {
    this._messageService.add({ severity: tipo, summary: response.tipo, detail: response.mensagem });
    setTimeout(() => {
      this._messageService.clear();
    }, 3000);
  }

}
