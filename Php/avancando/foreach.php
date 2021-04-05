<?php 

$contas = [
  12345678910 => [
    'nome' => 'Lucas',
    'saldo' => 1000
],
12345678911 => [
    'nome' => 'João',
    'saldo' => 10000
],
12325678912 => [
'nome' => 'Rodrigo',
'saldo' => 3003.1
]
];
$contas[12325678312] = [
  'nome' => 'Maria',
  'saldo' => 2003.31
];
//Não sabemos necessariamente o indice de cada conta
foreach($contas as  $index => $valor){
  echo "Indice de valor $index " . $valor['nome'] .  " " . $valor['saldo'] . PHP_EOL;
}
