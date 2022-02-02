class Cliente {
    nome;
    cpf;

}

class ContaCorrente {
    agencia;
    _saldo =0 ;

    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricado";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);