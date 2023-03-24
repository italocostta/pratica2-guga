class Clientes {
    listaClientes;
    constructor() {
        this.listaClientes = [];
    }
    inserir(cliente) {
        this.listaClientes.push(cliente);
    }
    remover(cpf) {
        this.listaClientes = this.listaClientes.filter((cliente) => cliente.cpf !== cpf);
    }
    listar(cliente) {
        return this.listaClientes;
    }
    pesquisar(cpf) {
        if (this.listaClientes.find((cliente) => cliente.cpf === cpf)) {
            return this.listaClientes;
        }
        else {
            console.log("Cliente não encontrado");
        }
    }
}
