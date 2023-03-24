class Clientes {
    listaClientes: Cliente[];

    constructor() {
        this.listaClientes = [];
    }

    inserir(cliente: Cliente): void {
        this.listaClientes.push(cliente);
    }

    remover(cpf: String): void {
        this.listaClientes = this.listaClientes.filter((cliente) => cliente.cpf !== cpf );
    }

    listar(cliente: Cliente) {
        return this.listaClientes;
    }

    pesquisar(cpf: String) {
        if (this.listaClientes.find((cliente) => cliente.cpf === cpf)) {
            return this.listaClientes;
        } else {
            console.log("Cliente não encontrado");
        }

    }
}