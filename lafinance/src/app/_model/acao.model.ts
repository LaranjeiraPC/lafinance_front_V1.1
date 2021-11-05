import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Ativo } from "./ativo.model";
import { LucroPrejuizo } from "./lucroPrejuizo.model";

export class Acao {

    private _id;
    private _ativo;
    private _quantidade;
    private _valorBrutoPago;
    private _valorAtivoPago;
    private _dataCompra;
    private _mesCriacao;
    private _mesAtualizacao;
    private _lucroPrejuizo;

    constructor() {
        this._id = 0;
        this._ativo = new Ativo();
        this._quantidade = 0;
        this._valorBrutoPago = 0;
        this._valorAtivoPago = 0;
        this._dataCompra = new Date();
        this._mesCriacao = new Date();
        this._mesAtualizacao = new Date();
        this._lucroPrejuizo = new LucroPrejuizo();
    }

    get id() {
        return this._id
    }

    set id(id) {
        this._id = id
    }

    get ativo() {
        return this._ativo
    }

    set ativo(ativo) {
        this._ativo = ativo
    }

    get quantidade() {
        return this._quantidade
    }

    set quantidade(quantidade) {
        this._quantidade = quantidade
    }

    get valorBrutoPago() {
        return this._valorBrutoPago
    }

    set valorBrutoPago(valorBrutoPago) {
        this._valorBrutoPago = valorBrutoPago
    }

    get valorAtivoPago() {
        return this._valorAtivoPago
    }

    set valorAtivoPago(valorAtivoPago) {
        this._valorAtivoPago = valorAtivoPago
    }

    get dataCompra() {
        return this._dataCompra
    }

    set dataCompra(dataCompra) {
        this._dataCompra = dataCompra
    }

    get mesCriacao() {
        return this._mesCriacao
    }

    set mesCriacao(mesCriacao) {
        this._mesCriacao = mesCriacao
    }

    get mesAtualizacao() {
        return this._mesAtualizacao
    }

    set mesAtualizacao(mesAtualizacao) {
        this._mesAtualizacao = mesAtualizacao
    }

    get lucroPrejuizo() {
        return this._lucroPrejuizo
    }

    set lucroPrejuizo(lucroPrejuizo) {
        this._lucroPrejuizo = lucroPrejuizo
    }

}