//Classe abstrata que define os métodos e propriedades da classe Conta.
export class Conta{

    constructor(saldoInicial,cliente,agencia){

        if (this.constructor == Conta) {
            throw new Error("Não é permitido instanciar da classe Conta Diretamente");
        }

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

    //Método abstrato
    sacar(valorSaque){
        throw new Error("Método sacar não implementado");
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