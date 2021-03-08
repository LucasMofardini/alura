<?php 
//Include é para arquivos que nao necessariamente são necessarios para o funcionamento
// include('funcoes.php');

//Require é para arquivos que precisam ser executados no código
// require('funcoes.php');
//Require_once é para esse arquivo ser importado apenas uma vez
require_once('funcoes.php');

$contas = [
  '123.456.789-10' => [
      'nome' => 'Lucas',
      'saldo' => 1000
  ],
  '123.456.789-11' => [
      'nome' => 'João',
      'saldo' => 10000
  ],
  '123.256.789-12' => [
  'nome' => 'Rodrigo',
  'saldo' => 3003.1
  ]
];
//Entra na conta , executa a function sacar da da $contas['CPF'] , e tira 500 do saldo
$contas['123.256.789-12'] = sacar($contas['123.256.789-12'],500);
$contas['123.456.789-10'] = depositar($contas['123.456.789-10'], 900);
unset($contas['123.256.789-12']);
letrasM($contas['123.456.789-10' ]);
//Não sabemos necessariamente o indice de cada conta
foreach($contas as  $index => $conta){
  list('nome' => $nome,'saldo' => $saldo) = $conta;
  // echo "Indice de valor $index " . $valor['nome'] .  " " . 'R$'.$valor['saldo'] . PHP_EOL;
  exibeMensagem("$index $nome $saldo");
}

