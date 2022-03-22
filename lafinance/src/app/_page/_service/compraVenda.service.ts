import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CompraVenda } from "src/app/_model/compraVenda.model";
import { Config } from "src/environments/config";

@Injectable({
    providedIn: 'root'
})
export class CompraVendaService {

    private URL: string = Config.api.url + "api/compravenda";

    constructor(private http: HttpClient) { }

    salvarCompraVenda(CompraVenda: CompraVenda[]): Observable<Response> {
        return this.http.post<Response>(this.URL + "/save", CompraVenda);
    }

}