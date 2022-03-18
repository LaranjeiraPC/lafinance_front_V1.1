import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Acao } from 'src/app/_model/acao.model';
import { Response, TipoResponse } from 'src/app/_response/response';
import { AcaoService } from '../acao/_service/acao.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  acoes: Acao[] = [];
  valorTotalInvestido: string = "";
  quantidade: number = 0;

  basicData: any;
  basicOptions: any;

  constructor(
    private _acaoService: AcaoService,
    private currency: CurrencyPipe,
    private _messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.totalInvestido();
    this.updateChartOptions();
    this.atualizarRegistroAtivos();
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
    let valorTotalInvestido: number = 0;

    let subscription = this._acaoService.consultarcoesAll().subscribe(data => {
      subscription.unsubscribe();
      if (data.length >= 1) {
        this.acoes = data;
      }else{
        this.valorTotalInvestido = "R$0,00";
      }

      this.quantidadeTotal(this.acoes);
      this.acoes.forEach(a => {
        valorTotalInvestido = valorTotalInvestido + a.valorBrutoPago;
      });
      this.valorTotalInvestido += this.currency.transform(valorTotalInvestido, 'BRL');
    });

  }

  quantidadeTotal(acao: Acao[]): void {
    let quantidadeTotal: number = 0;
    acao.forEach(a => {
      quantidadeTotal = quantidadeTotal + a.quantidade;
    });
    this.quantidade = quantidadeTotal;
  }

  atualizarRegistroAtivos(): void {
    let subscription = this._acaoService.atualizarRegistroAtivos().subscribe(data => {
      subscription.unsubscribe();
      if (data.tipo == TipoResponse.SUCESSO) {
        this.showViaService(data, "success");
      }else {
        this.showViaService(data, "error");
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
