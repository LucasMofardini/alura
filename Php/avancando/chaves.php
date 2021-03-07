<?php 
//Array associativos só funcionam com valores : inteiros ou 
// Documentaçao do PHP sobre esse array associativo
// https://www.php.net/manual/pt_BR/language.types.array.php

$array = [
  1 => 'a',
  '1' => 'b', // Sobrescreve o inteiro 1 pois o php transforma essa string numerica em inteiro
  1.5 => 'c', // Sobrescreve o '1' por 1 inteiro pois o php ignora o decimal
  true => 'd' // true é convertido para 1

];
foreach ($array as $key => $value) {
  echo $value . PHP_EOL;
}