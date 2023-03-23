class Cliente {
    private _nome: String;
    private _cpf: String;
    private _conta: Conta;

    constructor(nome: String, cpf: String, conta: Conta) {

        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;

    }

    get nome(): String {
        return this._nome;
    }

    set nome(nome: String) {
        this._nome = nome;
    }

    get cpf(): String {
        return this._cpf;
    }

    set cpf(cpf: String) {
        this._cpf = cpf;
    }
}