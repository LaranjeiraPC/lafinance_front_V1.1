import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Acao } from "src/app/_model/acao.model";
import { Venda } from "src/app/_model/venda.model";
import { Config } from "src/environments/config";

@Injectable({
    providedIn: 'root'
})
export class VendaService {

    private URL: string = Config.api.url + "api/venda";

    constructor(private http: HttpClient) { }

    consultarVendas(ano: string, mes: string): Observable<Venda[]> {
        return this.http.get<Venda[]>(this.URL + "/consulta/ano/mes/" + ano + "/" + mes);
    }
        
}