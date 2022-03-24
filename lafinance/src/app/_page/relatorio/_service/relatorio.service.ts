import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'src/environments/config';

@Injectable({
    providedIn: 'root'
})
export class RelatorioService {

    private URL: string = Config.api.url + "api/relatorio";

    constructor(private http: HttpClient) { }

    consultarDadosAno(ano: number): Observable<any> {
        return this.http.get<any>(this.URL + "/search/" + ano);
    }
}