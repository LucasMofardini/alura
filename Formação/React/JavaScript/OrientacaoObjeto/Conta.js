export class Conta{

    constructor(saldoInicial,cliente,agencia){
        this._saldo  = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valorSaque){

        let taxa = 1;
        return  this._sacar(valorSaque, taxa);
    }
    _sacar(valorSaque, taxa){

        let valorAplicado = taxa * valorSaque;

        if(this._saldo >= valorAplicado){
            this._saldo -= valorAplicado;
            return valorAplicado;
        }    
        return 0;
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