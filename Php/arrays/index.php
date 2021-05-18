<?php
require_once 'Calculadora.php';
$calculadora = new Calculadora();
$notas = [9,7,10];

$media = $calculadora->calculaMedia($notas);

if($media){
    echo "A media é $media";
}else{
    echo "Não foi possivel calcular a media";
}