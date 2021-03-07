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