export class LucroPrejuizo {

    private _indiceLucroPrejuizo;
    private _valorLucroPrejuizo;

    constructor() {
        this._indiceLucroPrejuizo = 0;
        this._valorLucroPrejuizo = 0;
    }

    get indiceLucroPrejuizo() {
        return this._indiceLucroPrejuizo
    }

    set indiceLucroPrejuizo(indiceLucroPrejuizo) {
        this._indiceLucroPrejuizo = indiceLucroPrejuizo
    }

    get valorLucroPrejuizo() {
        return this._valorLucroPrejuizo
    }

    set valorLucroPrejuizo(valorLucroPrejuizo) {
        this._valorLucroPrejuizo = valorLucroPrejuizo
    }

}