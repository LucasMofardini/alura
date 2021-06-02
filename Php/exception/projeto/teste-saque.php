<?php

use Alura\Banco\Modelo\Conta\{ContaPoupanca, ContaCorrente, SaldoInsuficienteException, Titular};
use Alura\Banco\Modelo\{CPF, Endereco};
require_once 'autoload.php';

try{
    $conta = new ContaPoupanca(
    new Titular(
        new CPF('123.456.789-10'),
        'Vi',
        new Endereco('Petrópolis', 'bairro Teste', 'Rua lá', '37')
    )
);
}catch(InvalidArgumentException $exception){
    echo "Ocorreu um Erro no nome" . PHP_EOL;
}
// $conta->deposita(500);

// try {
//     $conta->saca(600);
// } catch (SaldoInsuficienteException $exception) {
//     echo "Você, não tem saldo para realizar este saque." . PHP_EOL;
//     echo $exception->getMessage();
// }

// echo $conta->recuperaSaldo();
