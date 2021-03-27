<?php 
//Tipo conta 
class Conta{
  //Definição dos dados da conta
  public string $cpfTitular;
  public string  $nometitular;
  public float $saldo;
}
$contaNova = new Conta();
$contaNova->cpcTitular = '389.886.878-84';
$contaNova->nomeTitular = 'Lucas';
$contaNova->saldo = 300;
echo $contaNova->saldo;