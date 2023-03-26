class ClienteEspecial extends Cliente {
    private dependentes: Cliente[];
  
    constructor(nome: string, cpf: string, conta: Conta, dependentes: Cliente[]) {
      super(nome, cpf, conta);
      this.dependentes = dependentes;
    }
  
    adicionarDependente(dependente: Cliente): void {
      this.dependentes.push(dependente);
    }
  
    removerDependente(dependente: Cliente): void {
      const index = this.dependentes.indexOf(dependente);
      if (index !== -1) {
        this.dependentes.splice(index, 1);
      }
    }
  
    listarDependentes(): Cliente[] {
      return this.dependentes;
    }
  }