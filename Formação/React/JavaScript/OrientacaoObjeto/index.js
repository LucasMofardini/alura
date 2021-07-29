class Cliente{
    nome;
    cpf;
}
class ContaCorrente{
    agencia;
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
}
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 1001;

contaCorrenteLucas.depositar(2300);
contaCorrenteLucas.sacar(300);
console.log(contaCorrenteLucas.mostraSaldo());
console.log(contaCorrenteLucas);
