import { Funcionari } from "./Funcionario.js";

export class Diretor extends Funcionari {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        this._bonificacao = 1.1;
    }
}