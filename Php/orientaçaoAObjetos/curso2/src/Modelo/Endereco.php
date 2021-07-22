<?php 
namespace Alura\Banco\Modelo;

final class Endereco{
  //Para usar uma Trait
  use AcessoPropriedades;
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
  public function recuperaCidade(){
      return $this->cidade;
  }
  public function recuperaBairro(){
    return $this->bairro;
  }
  public function recuperaRua(){
    return $this->rua;
  }
  public function recuperaNumero(){
    return $this->numero;
  }
  public function __toString() :string{

    return "{$this->rua}, {$this->numero}, {$this->bairro}, {$this->cidade}";
    
  }

  public function __set($name, string $value):void
  {
    $this->$name = $value;
  }
}