<?php

use Alura\Banco\Modelo\Endereco;

require_once 'autoload.php';

$endereco1 = new Endereco('Sao paulo','Qualquer','minha rua','22');
$endereco2= new Endereco('Rio','Centro', 'Rua BalaTensa','12');

// echo $endereco1 . PHP_EOL;
// echo $endereco2 . PHP_EOL;
echo $endereco2->rua  = 'Gabriel';
echo $endereco2 . PHP_EOL;