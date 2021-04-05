<?php

namespace Alura\Banco\Modelo\Funcionario;
use Alura\Banco\Modelo\{CPF,Conta,Pessoa};

//Funcionario é uma pessoa
abstract class Funcionario extends Pessoa{
 
    private $cargo;
    private $salario;

    function __construct(string $nome,CPF $cpf,string $cargo, float $salario){
    
    parent::__construct($nome,$cpf);
    $this->cargo = $cargo;   
    $this->salario = $salario;
    }  

    public function recuperaCargo(){
    return $this->cargo;
    }
    public function recuperaSalario(): float{
        return $this->salario;
    }
    public function calculaBonificacao(): float{
        return $this->salario * 0.1;
    }
    public function recebeAumento($valorAumento): float{
        if($valorAumento < 0){
            echo 'Nao pode diminuir';
            return $this->salario;
        }

        return $this->salario += $valorAumento;
        
    }
}