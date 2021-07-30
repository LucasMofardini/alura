export class ContaCorrente{
    agencia;
    cliente;
    //Proposta de implementação de campos privados em JS https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valorSaque){
           
        if(valorSaque > this._saldo){
            return;
        }   
        this._saldo -= valorSaque;
        return valorSaque;
    }
    
    depositar(valorDeposito){
        if(valorDeposito <= 0){
            return;
        }
        this._saldo += valorDeposito;
        return valorDeposito;
    }
    mostraSaldo(){
        return this._saldo;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}