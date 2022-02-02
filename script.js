class Cliente {
    nome;
    cpf;

}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor) {
            this.saldo -= valor;
        }
    };
}

const cliente1 = new Cliente();
cliente1.nome = "Ricado";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(cliente1);