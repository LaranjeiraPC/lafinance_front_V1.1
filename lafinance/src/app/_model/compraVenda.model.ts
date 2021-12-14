import { Acao } from "./acao.model";
import { Venda } from "./venda.model";

export class CompraVenda {

    id;
    acao;
    venda;

    constructor() {
        this.id = 0;
        this.acao = 0;
        this.venda = 0;
    }

    get _id() {
        return this.id
    }

    set _id(id) {
        this._id = id
    }

    get _acao() {
        return this.acao
    }

    set _acao(acao) {
        this._acao = acao
    }

    get _venda() {
        return this.venda
    }

    set _venda(venda) {
        this._venda = venda
    }
}