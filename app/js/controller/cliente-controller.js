class ClienteController {
    inputNome;
    inputCpf;
    selectConta;
    clientes;
    contas;
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.selectConta = document.querySelector("#conta");
        this.clientes = new Clientes();
        this.contas = new Contas();
    }
    inserir(evento) {
        evento.preventDefault();
        const numero = Math.floor(Math.random() * 100).toString();
        let tipo = this.selectConta.options[this.selectConta.selectedIndex].value;
        let cliente;
        let conta;
        switch (tipo) {
            case "Poupança":
                conta = new Poupanca(numero, 0);
                cliente = new Cliente(this.inputNome.value, this.inputCpf.value, conta);
                break;
            case "Bonificada":
                conta = new ContaBonificada(numero, 0);
                cliente = new Cliente(this.inputNome.value, this.inputCpf.value, conta);
                break;
            default:
                conta = new Conta(numero, 0);
                cliente = new Cliente(this.inputNome.value, this.inputCpf.value, conta);
        }
        this.contas.inserir(conta);
        this.clientes.inserir(cliente);
        this.inputNome.value = "";
        this.inputCpf.value = "";
        this.inserirClienteNoHTML(cliente);
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener("click", (event) => {
            console.log(`Removendo ${cliente.toString()}`);
            this.clientes.remover(cliente.cpf);
            this.contas.remover(cliente.conta.numero);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
    listar() {
        this.clientes.listar().forEach(cliente => { this.inserirClienteNoHTML(cliente); });
    }
}
