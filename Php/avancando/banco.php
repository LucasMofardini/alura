<?php 
//Esse : é para falar o que vai retornar
function sacar(array $conta,float $valor) : array{
  if($valor > $conta['saldo']){
    exibeMensagem('Você não tem saldo suficiente');
  }else{
    $conta['saldo'] -= $valor;
  }
  return $conta;
}
function depositar(array $conta, float $valor) : array{
  if($valor > 0){
    $conta['saldo'] += $valor;
  }else{
    exibeMensagem("Depositos positivos");
  }
  return $conta;
}
function exibeMensagem($mensagem){
  echo $mensagem . PHP_EOL;
}
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

//Não sabemos necessariamente o indice de cada conta
foreach($contas as  $index => $valor){
  // echo "Indice de valor $index " . $valor['nome'] .  " " . 'R$'.$valor['saldo'] . PHP_EOL;
  exibeMensagem("Indice de valor $index " . $valor['nome'] .  " " . 'R$'.$valor['saldo']);
}

