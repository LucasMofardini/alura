<?php
use Alura\Banco\Modelo\Conta\{ContaPoupanca, ContaCorrente, SaldoInsuficienteException,NomeCurtoException, Titular};
use Alura\Banco\Modelo\{CPF, Endereco, NomeCurto};

require_once 'autoload.php';
try{
$contaCorrente = new ContaCorrente(
    new Titular(
        new CPF('389.886.878-84'), 
        'Luc', 
        new Endereco('Cidade', 'Bairro', 'Rua','Numero')
    )
);
}catch(NomeCurto $exceptionDomain){
    $exceptionDomain->getMessage() . PHP_EOL;
}
// try{
//     $contaCorrente->deposita(100);
//     echo $contaCorrente->recuperaSaldo() . PHP_EOL;
// }catch(Exception $exception){
//     echo "Não pode depositar saldo negativo" . PHP_EOL;
// }