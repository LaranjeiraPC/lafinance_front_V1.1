import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TipoResponse } from 'src/app/_response/response';
import { CompraVendaService } from '../_service/compraVenda.service';
import { RelatorioService } from './_service/relatorio.service';

interface Filtro {
  nome: string;
  codigo: string;
}

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  filtros: string[] = [];
  filtroSelecionado: string = "";

  meses: string[] = [];
  mesSelecionado: string = "";

  anos: number[] = [];
  anoSelecionado: number = 0;

  ativos: string[] = [];
  ativoSelecionado: string = "";

  opcaoMes: boolean = false;
  opcaoAno: boolean = false;
  opcaoAtivo: boolean = false;

  constructor(
    private _compraVendaService: CompraVendaService,
    private _relatorioService: RelatorioService,
    private _messageService: MessageService
  ) {
    this.filtros = ["Mês e Ano", "Ano", "Ativo"];
  }

  ngOnInit(): void {
  }

  getFiltro(opcao: string): void {
    switch (opcao) {
      case 'Mês e Ano':
        this.opcaoAno = false;
        break;
      case 'Ano':
        this.anos = [];
        this.listarAnos()
        this.opcaoAno = true;
        break;
      case 'Ativo':
        this.opcaoAno = false;
        break;
    }
  }

  selecionarAnoFiltrarRelatorio(ano: number): void {
    let subscription = this._relatorioService.consultarDadosAno(ano).subscribe(data => {
      subscription.unsubscribe();
      console.log(data);
    }, () => {
      this.showViaService("error", TipoResponse.ERRO, "Falha ao consultar dados do relatório");
    });
  }

  listarAnos(): void {
    let subscription = this._compraVendaService.listarAnos().subscribe(data => {
      subscription.unsubscribe();
      this.anos = data;
    }, () => {
      this.showViaService("error", TipoResponse.ERRO, "Falha ao listar anos");
    });
  }

  showViaService(tipo: string, status: string, mensagem: string) {
    this._messageService.add({ severity: tipo, summary: status, detail: mensagem });
    setTimeout(() => {
      this._messageService.clear();
    }, 3000);
  }

}
