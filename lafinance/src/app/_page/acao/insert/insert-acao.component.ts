import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Acao } from 'src/app/_model/acao.model';
import { Ativo } from 'src/app/_model/ativo.model';
import { Response } from 'src/app/_response/response';
import { AtivoService } from '../../ativo/_service/ativo.service';
import { AcaoService } from '../_service/acao.service';

@Component({
  selector: 'app-insert-acao',
  templateUrl: './insert-acao.component.html',
  styleUrls: ['./insert-acao.component.scss']
})
export class InsertAcaoComponent implements OnInit {

  acao: Acao = new Acao();
  ativos: Ativo[] = [];
  selectedAtivo: Ativo = new Ativo;

  constructor(
    private messageService: MessageService,
    private _ativoService: AtivoService,
    private _acaoService: AcaoService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.consultarAtivos();
  }

  consultarAtivos(): void {
    let subscription = this._ativoService.consultarAtivos().subscribe(data => {
      subscription.unsubscribe();
      if (data.length >= 1) {
        this.ativos = data;
        if(this.ativos.length >= 1){
          this.selectedAtivo = this.ativos[0];
        }
      }
    });
  }

  salvarRegistro(): void {
    if (this.acao.ativo.nome != null) {
      this.acao.ativo = this.selectedAtivo;
      let subscription = this._acaoService.cadastrarAcao(this.acao).subscribe(data => {
        subscription.unsubscribe();
        if (data != null) {
          this.showViaService(data, "success");
          this._route.navigate(['/acao'])
        } else {
          this.showViaService(data, "error");
        }
      });
    }
  }

  showViaService(response: Response, tipo: string) {
    this.messageService.add({ severity: tipo, summary: response.tipo, detail: response.mensagem });
    setTimeout(() => {
      this.messageService.clear();
    }, 3000);
  }

}
