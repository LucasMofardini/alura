<?php

namespace Alura\Banco\Modelo\Funcionario;
use Alura\Banco\Modelo\{CPF,Conta,Pessoa};

//Funcionario é uma pessoa
abstract class Funcionario extends Pessoa{
 
    private $salario;

    function __construct(string $nome,CPF $cpf, float $salario){

    parent::__construct($nome,$cpf);
   
    $this->salario = $salario;
    }  

  
    public function recuperaSalario(): float{
        return $this->salario;
    }
   abstract public function calculaBonificacao(): float;
   
    public function recebeAumento($valorAumento): float{
        if($valorAumento < 0){
            echo 'Nao pode diminuir';
            return $this->salario;
        }

        return $this->salario += $valorAumento;
        
    }
}