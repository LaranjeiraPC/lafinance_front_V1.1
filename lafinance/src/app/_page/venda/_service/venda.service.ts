import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Venda } from "src/app/_model/venda.model";
import { Response } from "src/app/_response/response";
import { Config } from "src/environments/config";

@Injectable({
    providedIn: 'root'
})
export class VendaService {

    private URL: string = Config.api.url + "api/venda";

    constructor(private http: HttpClient) { }

    salvarVenda(venda: Venda): Observable<Response> {
        return this.http.post<Response>(this.URL + "/venda/", venda);
    }

    consultarVendas(ano: string, mes: string): Observable<Venda[]> {
        return this.http.get<Venda[]>(this.URL + "/consulta/ano/mes/" + ano + "/" + mes);
    }

    excluirVenda(id: number): Observable<Response> {
        return this.http.delete<Response>(this.URL + "/excluir/" + id);
    }

    editarVenda(venda: Venda): Observable<Response> {
        return this.http.post<Response>(this.URL + "/edita/", venda);
    }
        
}