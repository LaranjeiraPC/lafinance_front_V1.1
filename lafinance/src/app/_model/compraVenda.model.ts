import { Acao } from "./acao.model";
import { Venda } from "./venda.model";

export class CompraVenda {

    id;
    compra: any;
    venda: any;

    constructor() {
        this.id = 0;
        this.compra;
        this.venda;
    }

    get _id() {
        return this.id
    }

    set _id(id) {
        this._id = id
    }

    get _compra() {
        return this.compra
    }

    set _compra(compra) {
        this._compra = compra
    }

    get _venda() {
        return this.venda
    }

    set _venda(venda) {
        this._venda = venda
    }
}