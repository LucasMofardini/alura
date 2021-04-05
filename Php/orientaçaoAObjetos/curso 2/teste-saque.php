<?php
use Alura\Banco\Modelo\Conta\Titular;
use Alura\Banco\Modelo\Endereco;
use Alura\Banco\Modelo\CPF;
use Alura\Banco\Modelo\Conta\ContaCorrente;
use Alura\Banco\Modelo\Conta\ContaPoupanca;
require_once 'autoload.php';
$conta = new ContaCorrente(
    new Titular( 
    new CPF('389.886.878-84'),
    'Lucas Mofardini',
    new Endereco('São Paulo','Capão Redondo', 'Consciencia Popular', '22'))
    
);
$conta->deposita(500);
$conta->saca(100); //Tem que remover 105
echo $conta->recuperaSaldo() . PHP_EOL;

$conta2 = new ContaPoupanca(
  new Titular( 
  new CPF('389.886.878-84'),
  'Lucas Mofardini',
  new Endereco('São Paulo','Capão Redondo', 'Consciencia Popular', '22'))
  
);
$conta2->deposita(500);
$conta2->saca(100); //Tem que remover 105
echo $conta2->recuperaSaldo() . PHP_EOL;