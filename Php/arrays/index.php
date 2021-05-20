<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP ARRAY</title>
</html>
<?php declare(strict_types=1);
// Aula 1
require_once 'Calculadora.php';
require_once 'ArrayUtils.php';

$calculadora = new Calculadora();
$notas = [9,7,10];

$media = $calculadora->calculaMedia($notas);

if($media){
    echo "A media é $media";
}else{
    echo "Não foi possivel calcular a media";
}
echo "</br>";
#--------------
// Aula 2
$saldos = [
    900,
    1000,
    1412,
    2500,
    1850,
    700
];
foreach($saldos as $saldo){
    echo "<p>O saldo é : $saldo</p>";
}

sort($saldos);
echo "O menor saldo é $saldos[0]";

$nomes = "Lucas, João, Paulo, Marcelo";
#transforma em array
$arrayNomes = explode(",",$nomes);
foreach($arrayNomes as $nome){
    echo "<p> O nome é $nome </p>";
}
$nomesJuntos = implode(", ", $arrayNomes);
echo $nomesJuntos;

echo "</br>";
#--------------
// Aula 3
$correntistaECompras = [
    "Lucas",
    "Gabriel",
    12,
    "Maria",
    "Paula",
    "12"
];
echo "<pre>";
var_dump($correntistaECompras) ;
ArrayUtils::remover("12",$correntistaECompras);
var_dump($correntistaECompras);
echo "</pre>";