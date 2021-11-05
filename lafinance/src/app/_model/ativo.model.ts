export class Ativo {

    private _id;
    private _nome;
    private _status;

    constructor() {
        this._id = 0;
        this._nome = "";
        this._status = "";
    }

    get id() {
        return this._id
    }

    set id(id) {
        this._id = id
    }

    get nome() {
        return this._nome
    }

    set nome(nome) {
        this._nome = nome
    }

    get status() {
        return this._status
    }

    set status(status) {
        this._status = status
    }
}