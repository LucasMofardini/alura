import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }
    //Sobreescreve o metodo sacar da classe Conta.
   sacar(valorSaque){
     let taxa = 1.02;
     return super._sacar(valorSaque,taxa)
   }
}