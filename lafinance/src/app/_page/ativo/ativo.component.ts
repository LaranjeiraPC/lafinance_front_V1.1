import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Ativo } from 'src/app/_model/ativo.model';
import { TipoResponse } from 'src/app/_response/response';
import { AtivoService } from './_service/ativo.service';

@Component({
  selector: 'app-ativo',
  templateUrl: './ativo.component.html',
  styleUrls: ['./ativo.component.scss']
})
export class AtivoComponent implements OnInit {

  ativo: Ativo[] = [];
  selectedAtivo: Ativo = new Ativo;
  selectedNewAtivo: Ativo = new Ativo();
  options: any[] = [];

  totalRecords: number = 0;
  cols: any[] = [];
  loading: boolean = false;
  displayModal: boolean = false;
  displayModalExcluir: boolean = false;
  displayModalCadastrar: boolean = false;

  constructor(
    private _ativoService: AtivoService,
    private _messageService: MessageService
  ) {
    this.options = [
      { label: "Sim", value: "S" },
      { label: "Não", value: "N" }
    ];
  }

  ngOnInit(): void {
    this.loading = true;
  }

  loadCustomers() {
    setTimeout(() => {
      this.consultarAtivos();
    }, 1000);
  }

  consultarAtivos(): void {
    this.loading = true;
    let subscription = this._ativoService.consultarAtivos().subscribe(data => {
      subscription.unsubscribe();
      if (data.length >= 1) {
        this.loading = false;
        this.ativo = data;
      } else {
        this.loading = false;
      }
    });
  }

  selectAtivo(ativo: Ativo) {
    this.selectedAtivo = ativo;
    this.displayModal = true;
  }

  abrirModalCadastrarAtivo() {
    this.selectedNewAtivo = new Ativo;
    this.displayModalCadastrar = true;
  }

  editarAtivo(ativo: Ativo) {
    let subscription = this._ativoService.editarAtivo(ativo).subscribe(data => {
      subscription.unsubscribe();
      this.loading = false;
      this.displayModal = false;
      this.showViaService("success", TipoResponse.SUCESSO, "Ativo editado com sucesso");
    }, () => {
      this.showViaService("error", TipoResponse.ERRO, "Falha ao editar ativo");
    });
  }

  cadastrarAtivo(ativo: Ativo) {
    if (ativo.nome.length >= 1) {
      ativo.nome = ativo.nome.toUpperCase();
      ativo.status = "S";
      let subscription = this._ativoService.cadastrarAtivo(ativo).subscribe(data => {
        subscription.unsubscribe();
        this.loadCustomers();
        this.displayModalCadastrar = false;
        this.loading = false;
        this.showViaService("success", TipoResponse.SUCESSO, "Ativo cadastrado com sucesso");
      }, () => {
        this.showViaService("error", TipoResponse.ERRO, "Falha ao cadastrar ativo");
      });
    }
  }

  excluirAtivo(ativo: Ativo) {
    if (ativo) {
      let subscription = this._ativoService.excluirAtivo(ativo.id).subscribe(data => {
        subscription.unsubscribe();
        this.displayModalExcluir = false;
        this.displayModal = false;
        this.showViaService("success", TipoResponse.SUCESSO, "Ativo excluído com sucesso");
        this.loadCustomers();
      }, () => {
        this.showViaService("error", TipoResponse.ERRO, "Falha ao excluir ativo");
      });
    }
  }

  showViaService(tipo: string, status: string, mensagem: string) {
    this._messageService.add({ severity: tipo, summary: status, detail: mensagem });
    setTimeout(() => {
      this._messageService.clear();
    }, 3000);
  }

}
