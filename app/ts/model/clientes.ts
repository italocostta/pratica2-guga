class Clientes {
    //private listaClientes: Cliente[];
    private _clientes: Array<Cliente>

    constructor() {
        this._clientes = [];
    }

    inserir(cliente: Cliente): void {
        this._clientes.push(cliente);
    }

    remover(cpf: string): void {
        this._clientes = this._clientes.filter((cliente) => cliente.cpf !== cpf );
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }

    pesquisar(cpf: string) {
        if (this._clientes.find((cliente) => cliente.cpf === cpf)) {
            return this._clientes;
        } else {
            console.log("Cliente não encontrado");
        }

    }

}