<?php
namespace Alura\Banco\Modelo;

use DomainException;
class NomeCurto extends DomainException{
    public function __construct(string $nomeTitular)
    {
        $mensagem = "$nomeTitular é invalido, curto demais";
        parent::__construct($mensagem);
    }

}