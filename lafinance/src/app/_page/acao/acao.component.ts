import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Acao } from 'src/app/_model/acao.model';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.scss']
})
export class AcaoComponent implements OnInit {

  acoes: Acao[] = [];
  selectedAcao: Acao = new Acao;

  totalRecords: number = 0;
  cols: any[] = [];
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRowSelect(event: any) {
    console.log(event.data.name);
  }

  onRowUnselect(event: any) {
    console.log(event.data.name);
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = false;

    setTimeout(() => {
       //Implementar service de consulta
    }, 1000);
}

}
