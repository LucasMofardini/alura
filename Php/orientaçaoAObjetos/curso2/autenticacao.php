<?php

use Alura\Banco\Service\Autenticador;
use Alura\Banco\Modelo\Funcionario\Diretor;
use Alura\Banco\Modelo\CPF;
require_once 'autoload.php';


$autenticador = new Autenticador();

$umDiretor = new Diretor(
    'Joao Silvestre',
    new CPF('123.951.789-11'),
    10000
);
$autenticador->tentaLogin($umDiretor,'1234');