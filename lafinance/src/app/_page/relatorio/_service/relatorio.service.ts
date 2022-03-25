import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RelatorioDetalhe } from 'src/app/_model/relatorioDetalhe.model';
import { Config } from 'src/environments/config';

@Injectable({
    providedIn: 'root'
})
export class RelatorioService {

    private URL: string = Config.api.url + "api/relatorio";

    constructor(private http: HttpClient) { }

    consultarDadosAno(ano: number): Observable<Map<string, RelatorioDetalhe[]>> {
        return this.http.get<Map<string, RelatorioDetalhe[]>>(this.URL + "/search/" + ano);
    }
}