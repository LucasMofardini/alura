<?php
//Funcionario é uma pessoa
class Funcionario extends Pessoa{
 
    private $cargo;

    function __construct(string $nome,CPF $cpf,string $cargo){
    parent::__construct($nome,$cpf);
    $this->cargo = $cargo;   
    }  

    public function recuperaCargo(){
    return $this->cargo;
    }
}