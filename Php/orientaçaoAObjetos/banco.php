<?php
require_once 'src/Conta.php';

$contaNova = new Conta('389.886.878-84','Lucas Mofardini');
$contaNova->depositar(250);
$contaNova->sacar(50);
// var_dump($contaNova);
echo $contaNova->recuperarSaldo() . PHP_EOL;
echo $contaNova->recuperarTitular() .  PHP_EOL;
echo $contaNova->recuperarCpf() . PHP_EOL;
echo 'Numero de contas ' . Conta::recuperaNumeroContas();