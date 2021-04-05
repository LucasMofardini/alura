<?php

require_once 'autoload.php';

use Alura\Banco\Service\ControladorDeBonificacoes;
use Alura\Banco\Modelo\Funcionario\{Gerente,Diretor,Desenvolvedor};
use Alura\Banco\Modelo\CPF;


$umFuncionario = new Desenvolvedor(
    'Lucas',
    new CPF('389.886.878-84'),
    'Programador',
    1000);

$umaFuncionaria = new Gerente(
    'Isabella',
    new CPF('389.886.878-72'),
    'Gerente',
    3000);

var_dump($umFuncionario,$umaFuncionaria);

// $controlador = new ControladorDeBonificacoes();
// $controlador->adicionaBonificacaoDe($funcioumFuncionarionario);
// $controlador->adicionaBonificacaoDe($umaFuncionaria);
// echo $controlador->recuperaTotal();