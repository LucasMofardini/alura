<?php 
//Tipo conta 
class Conta{
  //Definição dos dados da conta
  public string $cpfTitular;
  public string  $nometitular;
  public float $saldo = 0;
  public function sacar(float $valorASacar){
      if($valorASacar > $this->saldo){
        echo 'Saldo indisponivel';
      }else{
        $this->saldo -= $valorASacar;
      }
  }
  public function depositar(float $valorADepositar){
    if($valorADepositar < 0){
      echo 'Deposito indisponivel';
    }else{
      $this->saldo += $valorADepositar;
    }
  }
  public function transferir(float $valorATransferir, Conta $contaDestino){
    if($valorATransferir > $this->saldo){
      echo 'Saldo indisponivel';
    }else{
      $this->sacar($valorATransferir);
      $contaDestino->depositar($valorATransferir);
    }
  }
  
}

$contaNova = new Conta();
$contaNova->cpcTitular = '389.886.878-84';
$contaNova->nomeTitular = 'Lucas';
$contaNova->saldo = 0;
$contaNova->depositar(250);
$contaNova->sacar(50);
var_dump($contaNova);

