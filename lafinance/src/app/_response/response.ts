export enum TipoResponse {
    SUCESSO = "SUCESSO", ERRO = "ERRO", ATUALIZACAO = "ATUALIZAÇÃO", ATENCAO = "ATENÇÃO", DEFAULT = ""
}

export class Response {

    private _mensagem;
    private _tipo;

    constructor() {
        this._mensagem = "";
        this._tipo = TipoResponse.DEFAULT;
    }

    get mensagem() {
        return this._mensagem
    }

    set mensagem(mensagem) {
        this._mensagem = mensagem
    }

    get tipo() {
        return this._tipo
    }

    set tipo(tipo) {
        this._tipo = tipo
    }

}