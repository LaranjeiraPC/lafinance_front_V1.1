import { Ativo } from "./ativo.model";
import { LucroPrejuizo } from "./lucroPrejuizo.model";

export class Acao {

    id;
    ativo;
    quantidade;
    valorBrutoPago;
    valorAtivoPago;
    dataCompra;
    mesCriacao;
    mesAtualizacao;
    lucroPrejuizo;
    status;
    precoAlvo;
    precoHoje;

    constructor() {
        this.id = 0;
        this.ativo = new Ativo();
        this.quantidade = 0;
        this.valorBrutoPago = 0;
        this.valorAtivoPago = 0;
        this.dataCompra = new Date();
        this.mesCriacao = new Date();
        this.mesAtualizacao = new Date();
        this.lucroPrejuizo = new LucroPrejuizo();
        this.status = "S";
        this.precoHoje = 0;
        this.precoAlvo = 0;
    }

    get _id() {
        return this.id
    }

    set _id(id) {
        this._id = id
    }

    get _ativo() {
        return this.ativo
    }

    set _ativo(ativo) {
        this._ativo = ativo
    }

    get _quantidade() {
        return this.quantidade
    }

    set _quantidade(quantidade) {
        this._quantidade = quantidade
    }

    get _valorBrutoPago() {
        return this.valorBrutoPago
    }

    set _valorBrutoPago(valorBrutoPago) {
        this._valorBrutoPago = valorBrutoPago
    }

    get _valorAtivoPago() {
        return this.valorAtivoPago
    }

    set _valorAtivoPago(valorAtivoPago) {
        this._valorAtivoPago = valorAtivoPago
    }

    get _dataCompra() {
        return this.dataCompra
    }

    set _dataCompra(dataCompra) {
        this._dataCompra = dataCompra
    }

    get _mesCriacao() {
        return this.mesCriacao
    }

    set _mesCriacao(mesCriacao) {
        this._mesCriacao = mesCriacao
    }

    get _mesAtualizacao() {
        return this.mesAtualizacao
    }

    set _mesAtualizacao(mesAtualizacao) {
        this._mesAtualizacao = mesAtualizacao
    }

    get _lucroPrejuizo() {
        return this.lucroPrejuizo
    }

    set _lucroPrejuizo(lucroPrejuizo) {
        this._lucroPrejuizo = lucroPrejuizo
    }

    get _precoAlvo() {
        return this.precoAlvo
    }

    set _precoAlvo(precoAlvo) {
        this._precoAlvo = precoAlvo
    }

    get _precoHoje() {
        return this.precoHoje
    }

    set _precoHoje(precoHoje) {
        this._precoHoje = precoHoje 
    }

}