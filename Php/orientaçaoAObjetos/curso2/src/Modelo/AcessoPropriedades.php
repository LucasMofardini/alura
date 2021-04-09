<?php

namespace Alura\Banco\Modelo;

trait AcessoPropriedades{

 //Metodo apenas para recuperar e nao para atribuir
 public function __get(string $nomeAtributo){
    
    $metodo =  'recupera' .  ucfirst($nomeAtributo);
    return $this->$metodo();
  }
  
}