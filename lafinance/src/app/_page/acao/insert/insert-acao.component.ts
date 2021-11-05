import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Acao } from 'src/app/_model/acao.model';

@Component({
  selector: 'app-insert-acao',
  templateUrl: './insert-acao.component.html',
  styleUrls: ['./insert-acao.component.scss']
})
export class InsertAcaoComponent implements OnInit {

  acao: Acao = new Acao();

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  showViaService() {
    console.log(this.acao)
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    setTimeout(() => {
      this.messageService.clear();
    }, 2000);
  }

}
