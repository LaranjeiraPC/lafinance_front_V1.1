import { RelatorioDetalhe } from "./relatorioDetalhe.model";

export class Relatorio {

    detalhe: RelatorioDetalhe[] = [];

    constructor() {
    }

    get _detalhe() {
        return this.detalhe
    }

    set _detalhe(detalhe) {
        this._detalhe = detalhe
    }
}