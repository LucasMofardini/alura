<?php 
//Tipo conta 
class Conta{
  //Definição dos dados da conta
  private string $cpfTitular;
  private string  $nometitular;
  private float $saldo = 0;

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
  public function recuperarSaldo(): float{
     return $this->saldo; 
  }
  public function recuperarCpf(): string{
    return $this->cpf; 
 }
 public function defineCpf(string $cpf): void{
  $this->cpfTitular = $cpf;
}
public function defineTitular(string $nome): void{
  $this->nometitular = $nome;
}
 public function recuperarTitular(): string{
  return $this->nometitular; 
}
}

