<?php
require_once 'src/Conta.php';

$contaNova = new Conta();
$contaNova->defineTitular('Lucas');
$contaNova->defineCpf('389.886.878-84');
$contaNova->depositar(250);
$contaNova->sacar(50);

echo $contaNova->recuperarSaldo() . PHP_EOL;
echo $contaNova->recuperarTitular() .  PHP_EOL;
echo $contaNova->recuperarCpf() . PHP_EOL;
