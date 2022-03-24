import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Acao } from 'src/app/_model/acao.model';
import { AcaoService } from '../acao/_service/acao.service';
import { DashService } from './_service/dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  acoes: Acao[] = [];
  valorTotalInvestido: string = "";
  quantidade: number = 0;
  lucroBrutoTotalAno: string = "";

  basicData: any;
  basicOptions: any;

  constructor(
    private _dashService: DashService,
    private currency: CurrencyPipe,
    private _messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.totalInvestido();
    this.updateChartOptions();
  }

  updateChartOptions() {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.applyLightTheme();
  }

  applyLightTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

  }

  totalInvestido(): void {
    let subscription = this._dashService.consultarDadosDahsboard().subscribe(data => {
      subscription.unsubscribe();
      this.quantidade = data.quantidadeTotal;
      this.valorTotalInvestido += this.currency.transform(data.valorInvestimentoTotal, 'BRL');
      this.lucroBrutoTotalAno += this.currency.transform(data.valorBrutoTotal, 'BRL');
    });
  }

}
