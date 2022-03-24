import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Config } from "src/environments/config";
import { CompraVenda } from "src/app/_model/compraVenda.model";

@Injectable({
    providedIn: 'root'
})
export class CompraVendaService {

    private URL: string = Config.api.url + "api/compravenda";

    constructor(private http: HttpClient) { }

    salvarCompraVenda(CompraVenda: CompraVenda[]): Observable<Response> {
        return this.http.post<Response>(this.URL + "/save", CompraVenda);
    }

    listarAnos(): Observable<number[]> {
        return this.http.get<number[]>(this.URL + "/list/years");
    }

    listarDataVendaSomenteMes(ano: number): Observable<any> {
        return this.http.get(this.URL + "/list/month/" + ano);
    }

    listarAtivosAgrupandoByNomeAtivo(): Observable<any> {
        return this.http.get(this.URL + "/list/ativos");
    }

}