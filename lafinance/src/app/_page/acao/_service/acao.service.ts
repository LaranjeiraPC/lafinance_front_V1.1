import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acao } from 'src/app/_model/acao.model';
import { Response } from 'src/app/_response/response';
import { Config } from 'src/environments/config';

@Injectable({
    providedIn: 'root'
})
export class AcaoService {

    private URL: string = Config.api.url + "api/acao";

    constructor(private http: HttpClient) { }

    consultarAcoesAtivos(): Observable<Acao[]> {
        return this.http.get<Acao[]>(this.URL + "/consulta/acoes/");
    }

    cadastrarAcao(acao: Acao): Observable<Response> {
        return this.http.post<Response>(this.URL + "/salva/", acao);
    }

    editarAcao(acao: Acao): Observable<Response> {
        return this.http.post<Response>(this.URL + "/edita/", acao);
    }

    excluirAcao(id: number): Observable<Response> {
        return this.http.delete<Response>(this.URL + "/excluir/" + id);
    }

    consultarAcoesAtivosVenda(nome: string): Observable<Acao[]> {
        return this.http.get<Acao[]>(this.URL + "/consulta/acoes/venda/" + nome);
    }

    inativarAcoes(acao: Acao[]): Observable<Response> {
        return this.http.post<Response>(this.URL + "/inativar/", acao);
    }

}