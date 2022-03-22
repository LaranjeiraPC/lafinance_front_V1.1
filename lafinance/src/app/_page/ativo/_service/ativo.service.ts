import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ativo } from 'src/app/_model/ativo.model';
import { Config } from 'src/environments/config';

@Injectable({
    providedIn: 'root'
})
export class AtivoService {

    private URL: string = Config.api.url + "api/ativo";

    constructor(private http: HttpClient) { }

    consultarAtivos(): Observable<any> {
        return this.http.get(this.URL + "/list");
    }

    editarAtivo(ativo: Ativo): Observable<Response> {
        return this.http.put<Response>(this.URL + "/edit", ativo);
    }

    cadastrarAtivo(ativo: Ativo): Observable<Response> {
        return this.http.post<Response>(this.URL + "/save", ativo);
    }

    excluirAtivo(id: number): Observable<Response> {
        return this.http.delete<Response>(this.URL + "/" + id);
    }
}