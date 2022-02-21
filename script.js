import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta/Conta.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const conta = new Conta(0, cliente1, 1001);


console.log(Conta);