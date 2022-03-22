import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Venda } from "src/app/_model/venda.model";
import { Config } from "src/environments/config";

@Injectable({
    providedIn: 'root'
})
export class VendaService {

    private URL: string = Config.api.url + "api/venda";

    constructor(private http: HttpClient) { }

    salvarVenda(venda: Venda): Observable<Venda> {
        return this.http.post<Venda>(this.URL + "/save", venda);
    }

    consultarVendas(ano: string, mes: string): Observable<Venda[]> {
        return this.http.get<Venda[]>(this.URL + "/search/ano/mes/" + ano + "/" + mes);
    }

    excluirVenda(id: number): Observable<any> {
        return this.http.delete(this.URL + "/" + id);
    }

    editarVenda(venda: Venda): Observable<Venda> {
        return this.http.put<Venda>(this.URL + "/edit", venda);
    }

    calcularLucroBruto(idsVenda: number): Observable<number> {
        return this.http.get<number>(this.URL + "/calc/" + idsVenda);
    }

}