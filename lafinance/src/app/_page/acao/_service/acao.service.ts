import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acao } from 'src/app/_model/acao.model';
import { Config } from 'src/environments/config';

@Injectable({
    providedIn: 'root'
})
export class AcaoService {

    private URL: string = Config.api.url + "api/acao";

    constructor(private http: HttpClient) { }

    cadastrarAcao(acao: Acao): Observable<Acao> {
        return this.http.post<Acao>(this.URL + "/save", acao);
    }

    editarAcao(acao: Acao): Observable<any> {
        return this.http.put(this.URL + "/edit", acao);
    }

    excluirAcao(id: number): Observable<any> {
        return this.http.delete(this.URL + "/" + id, { observe: 'response' });
    }
    
    consultarAcoesAtivosVenda(nome: string): Observable<Acao[]> {
        return this.http.get<Acao[]>(this.URL + "/search/acoes/venda/" + nome);
    }

    inativarAcoes(acao: Acao[]): Observable<Acao[]> {
        return this.http.post<Acao[]>(this.URL + "/disable", acao);
    }

    consultarAcoesAtivosMesAtual(mes: number, ano: number): Observable<Acao[]> {
        return this.http.get<Acao[]>(this.URL + "/search/acoes/atual/" + mes + "/" + ano);
    }

    consultarAcoesAtivosOutrosMeses(ids: Acao[]): Observable<Acao[]> {
        return this.http.post<Acao[]>(this.URL + "/search/acoes/outros", ids);
    }

    consultarcoesAll(): Observable<Acao[]> {
        return this.http.get<Acao[]>(this.URL + "/search/all");
    }

}