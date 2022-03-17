import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'src/environments/config';

@Injectable({
    providedIn: 'root'
})
export class AlphaVantageService {

    private URL: string = Config.api.url + "api/alpha_vantage";

    constructor(private http: HttpClient) { }

    consultarPrecoAlvo(acao: String): Observable<number> {
        return this.http.get<number>(this.URL + "/ativo/" + acao);
    }
    
}