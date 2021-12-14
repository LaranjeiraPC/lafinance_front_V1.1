import { Ativo } from "./ativo.model";
import { CompraVenda } from "./compraVenda.model";

export class Venda {

    id;
    ativo;
    quantidade;
    valorBrutoVenda;
    valorAtivoVenda;
    dataVenda;
    mesCriacao;
    mesAtualizacao;
    compraVendaDTO;

    constructor() {
        this.id = 0;
        this.ativo = new Ativo();
        this.quantidade = 0;
        this.valorBrutoVenda = 0;
        this.valorAtivoVenda = 0;
        this.dataVenda = new Date();
        this.mesCriacao = new Date();
        this.mesAtualizacao = new Date();
        this.compraVendaDTO = new CompraVenda();
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

    get _valorBrutoVenda() {
        return this.valorBrutoVenda
    }

    set _valorBrutoVenda(valorBrutoVenda) {
        this._valorBrutoVenda = valorBrutoVenda
    }

    get _valorAtivoVenda() {
        return this.valorAtivoVenda
    }

    set _valorAtivoVenda(valorAtivoVenda) {
        this._valorAtivoVenda = valorAtivoVenda
    }

    get _dataVenda() {
        return this.dataVenda
    }

    set _dataVenda(dataVenda) {
        this._dataVenda = dataVenda
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

    get _compraVendaDTO() {
        return this.compraVendaDTO
    }

    set _compraVendaDTO(compraVendaDTO) {
        this._compraVendaDTO = compraVendaDTO
    }

}