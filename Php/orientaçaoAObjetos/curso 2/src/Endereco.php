<?php 
class Endereco{
  private $cidade;
  private $bairro;
  private $rua;
  private $numero;
  function __construct(string $cidade,string $bairro,string $rua,string $numero){
    $this->cidade = $cidade;
    $this->bairro = $bairro;
    $this->rua = $rua;
    $this->numero = $numero;
  }
  function recuperaCidade(){
      return $this->cidade;
  }
  function recuperaBairro(){
    return $this->bairro;
  }
  function recuperaRua(){
    return $this->rua;
  }
  function recuperaNumero(){
    return $this->numero;
}
}