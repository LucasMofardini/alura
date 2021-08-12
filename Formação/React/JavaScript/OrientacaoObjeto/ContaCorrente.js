import { Conta } from './Conta.js';

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente,agencia){
        //Faz uma referencia para uma casa mae, que é a classe Conta.
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas++;
    }
    //Sobreescreve o metodo de Conta.
    sacar(valorSaque){
        let taxa = 1.1;
        return super._sacar(valorSaque, taxa);
      
    }
    
   
}