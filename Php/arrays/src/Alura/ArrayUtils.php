<?php declare(strict_types=1);
// namespace Alura;

class ArrayUtils{
    public static function remover(string $elemento, array &$array){
        $posiçao = array_search($elemento,$array,true);
        if(is_int($posiçao)){
            unset($array[$posiçao]);
        }else{
            echo "<p> $elemento tem Parametro invalido </p>";
        }
    }
    public static function encontrarPessoasComSaldoMaior(int $saldo, array $array): array{
        $correntistasSaldoMaior = array(); 
        foreach($array as $chave => $valor){
            if($valor > $saldo){
                $correntistasSaldoMaior[] = $chave;
            }
        }
        return $correntistasSaldoMaior;
    }
}