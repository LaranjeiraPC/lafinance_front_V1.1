export class Dash {

    quantidadeTotal;
    valorBrutoTotal;
    valorInvestimentoTotal;
    valorBrutoMeta;
    ativoUm;
    ativoDois;

    constructor() {
        this.quantidadeTotal = 0;
        this.valorBrutoTotal = 0;
        this.valorInvestimentoTotal = 0;
        this.valorBrutoMeta = 0;
        this.ativoUm = "";
        this.ativoDois = "";
    }

    get _quantidadeTotal() {
        return this.quantidadeTotal
    }

    set _quantidadeTotal(quantidadeTotal) {
        this._quantidadeTotal = quantidadeTotal
    }

    get _valorBrutoTotal() {
        return this.valorBrutoTotal
    }

    set _valorBrutoTotal(valorBrutoTotal) {
        this._valorBrutoTotal = valorBrutoTotal
    }

    get _valorInvestimentoTotal() {
        return this.valorInvestimentoTotal
    }

    set _valorInvestimentoTotal(valorInvestimentoTotal) {
        this._valorInvestimentoTotal = valorInvestimentoTotal
    }

    get _valorBrutoMeta() {
        return this.valorBrutoMeta
    }

    set _valorBrutoMeta(valorBrutoMeta) {
        this._valorBrutoMeta = valorBrutoMeta
    }

    get _ativoUm() {
        return this.ativoUm
    }

    set _ativoUm(ativoUm) {
        this._ativoUm = ativoUm
    }

    get _ativoDois() {
        return this.ativoDois
    }

    set _ativoDois(ativoDois) {
        this._ativoDois = ativoDois
    }
}