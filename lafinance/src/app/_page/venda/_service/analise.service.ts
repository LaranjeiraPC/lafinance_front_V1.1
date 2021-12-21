import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Config } from "src/environments/config";

@Injectable({
    providedIn: 'root'
})
export class AnaliseService {

    private URL: string = Config.api.url + "api/analise";

    constructor(private http: HttpClient) { }

    calcularLucroBruto(idsVenda: number): Observable<number> {
        return this.http.get<number>(this.URL + "/calculo/" + idsVenda);
    }
        
}