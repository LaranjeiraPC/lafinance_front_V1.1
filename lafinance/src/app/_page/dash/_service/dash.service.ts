import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dash } from "src/app/_model/dash.model";
import { Config } from "src/environments/config";

@Injectable({
    providedIn: 'root'
})
export class DashService {

    private URL: string = Config.api.url + "api/dash";

    constructor(private http: HttpClient) { }

    consultarDadosDahsboard(): Observable<Dash> {
        return this.http.get<Dash>(this.URL + "/search");
    }

}