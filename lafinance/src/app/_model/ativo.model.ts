export class Ativo {

    id;
    nome;
    status;

    constructor() {
        this.id = 0;
        this.nome = "";
        this.status = "";
    }

    get _id() {
        return this.id
    }

    set _id(id) {
        this._id = id
    }

    get _nome() {
        return this.nome
    }

    set _nome(nome) {
        this._nome = nome
    }

    get _status() {
        return this.status
    }

    set _status(status) {
        this._status = status
    }
}