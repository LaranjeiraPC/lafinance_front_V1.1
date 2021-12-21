import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Venda } from 'src/app/_model/venda.model';
import { Response, TipoResponse } from 'src/app/_response/response';
import { Util } from 'src/app/_util/util';
import { AnaliseService } from './_service/analise.service';
import { VendaService } from './_service/venda.service';
 
@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {
 
  vendas: Venda[] = [];
  selectedVenda: Venda = new Venda();
  selectedData: String = "N"
  dataVenda: Date = new Date();
  options: any[] = [];
  lucroTotalBruto: number = 0;
  nomeMes: string = "";
  ano: string = "";

  totalRecords: number = 0;
  cols: any[] = [];
  loading: boolean = false;

  displayModal: boolean = false;
  displayModalData: boolean = false;
  displayModalExcluir: boolean = false;
  displayModalCadastrar: boolean = false;

  constructor(
    private _vendaService: VendaService,
    private _analiseService: AnaliseService,
    private _messageService: MessageService,
    private _currency: CurrencyPipe,
    private _util: Util,
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.nomeMes = this._util.converterData();
    this.ano = new Date().getFullYear().toString();

    this.loadCustomers(this.ano, this.nomeMes);
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
    this.selectedData = "N";
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

  showViaService(response: Response, tipo: string) {
    this._messageService.add({ severity: tipo, summary: response.tipo, detail: response.mensagem });
    setTimeout(() => {
      this._messageService.clear();
    }, 3000);
  }

}
