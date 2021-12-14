import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ativo } from 'src/app/_model/ativo.model';
import { Response } from 'src/app/_response/response';
import { Config } from 'src/environments/config';

@Injectable({
    providedIn: 'root'
})
export class AtivoService {

    private URL: string = Config.api.url + "api/ativo";

    constructor(private http: HttpClient) { }

    consultarAtivos(): Observable<any> {
        return this.http.get(this.URL + "/consulta/");
    }

    editarAtivo(ativo: Ativo): Observable<Response> {
        return this.http.post<Response>(this.URL + "/editar/", ativo);
    }

    cadastrarAtivo(ativo: Ativo): Observable<Response> {
        return this.http.post<Response>(this.URL + "/salva/", ativo);
    }

    excluirAtivo(id: number): Observable<Response> {
        return this.http.get<Response>(this.URL + "/excluir/" + id);
    }
}