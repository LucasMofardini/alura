<?php declare(strict_types=1);
class ArrayUtils{
    public static function remover(string $elemento, array &$array){
        $posiçao = array_search($elemento,$array,true);
        if(is_int($posiçao)){
            unset($array[$posiçao]);
        }else{
            echo "<p> $elemento tem Parametro invalido </p>";
        }
    }
}