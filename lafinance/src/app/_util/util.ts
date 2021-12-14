import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Util {

    data: Date = new Date;

    converterData() {
        let mes = this.data.getMonth() + 1;
        switch (mes) {
            case 1:
                return "Janeiro";
            case 2:
                return "Fevereiro";
            case 3:
                return "Março";
            case 4:
                return "Abri";
            case 5:
                return "Maio";
            case 6:
                return "Junho";
            case 7:
                return "Julho";
            case 8:
                return "Agosto";
            case 9:
                return "Setembro";
            case 10:
                return "Outubro";
            case 11:
                return "Novembro";
            case 12:
                return "Dezembro";
            default: return ""
        }
    }
}