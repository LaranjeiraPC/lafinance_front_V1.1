import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Venda } from 'src/app/_model/venda.model';
import { Util } from 'src/app/_util/util';
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

  totalRecords: number = 0;
  cols: any[] = [];
  loading: boolean = false;

  displayModal: boolean = false;
  displayModalData: boolean = false;
  displayModalExcluir: boolean = false;
  displayModalCadastrar: boolean = false;

  constructor(
    private _vendaService: VendaService,
    private _messageService: MessageService,
    private _currency: CurrencyPipe,
    private _util: Util,
  ) { }

  ngOnInit(): void {
    this.loading = true;

    let dataAtual = this._util.converterData();
    let ano = new Date().getFullYear().toString();

    this.loadCustomers(ano, dataAtual);
  }

  loadCustomers(ano: string, dataAtual: string) {
    setTimeout(() => {
      this.consultarVendas(ano, dataAtual);
    }, 1000);
  }

  consultarVendas(ano: string, mes: string): void {
    let subscription = this._vendaService.consultarVendas(ano, mes).subscribe(data => {
      subscription.unsubscribe();
      if (data.length >= 1) {
        this.loading = false;
        this.vendas = data;
      } else {
        this.loading = false;
      }
    });
  }

  selectVenda(venda: Venda): void {
  }

}
