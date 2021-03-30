<?php 
//Tipo conta 
class Conta{
  //Definição dos dados da conta
  private string $cpfTitular;
  private string  $nomeTitular;
  private float $saldo;
  //Atributo da classe e nao da instancia
  private static $numeroContas = 0;
  private static $codigoBanco = 45;

  public function __construct(string $cpfTitular, string $nomeTitular){
    $this->saldo = 0;
    $this->validaNome($nomeTitular);
    $this->nomeTitular = $nomeTitular;
    $this->cpfTitular = $cpfTitular;
    self::$numeroContas++;
  }
  public function __destruct(){
    self::$numeroContas--;
  }
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
    return $this->cpfTitular; 
}
//  public function defineCpf(string $cpf): void{
//   $this->cpfTitular = $cpf;
// }
// public function defineTitular(string $nome): void{
//   $this->nomeTitular = $nome;
// }
  public function recuperarTitular(): string{
    return $this->nomeTitular; 
  }
  private function validaNome(string $nomeTitular){
    if(strlen($nomeTitular < 5)){
      echo 'Nome precisa ter no minimo 5 caracteres';
    }
  }
  public static function recuperaNumeroContas():int{
    return self::$numeroContas;
  }
}

