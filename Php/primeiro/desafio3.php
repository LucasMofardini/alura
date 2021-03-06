<?php
$peso = 70;
$altura = 1.81;
$imc = $peso / ($altura *  $altura);
echo "Seu imc é : " .  $imc . PHP_EOL;
if($imc < 18.5){
  echo "Muito magro";
}elseif($imc < 25){
  echo "Ideal";
}else{
  echo "Obeso";
}
