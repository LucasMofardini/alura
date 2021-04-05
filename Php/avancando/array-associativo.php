<?php 
//Array associativo
$conta1 = [
  'nome' => 'Lucas',
  'saldo' => 1000
];
$conta2 = [
  'nome' => 'Pedro',
  'saldo' => 4030.10
];
$conta3 = [
  'nome' => 'João',
  'saldo' => 3000
];
$contas = [$conta1, $conta2,$conta3];

for($i = 0; $i < count($contas);$i++){
  echo $contas[$i]['nome'] . PHP_EOL ;
  
}
