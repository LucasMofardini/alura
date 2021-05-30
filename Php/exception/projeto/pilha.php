<?php

function funcao1()
{
    echo 'Entrei na função 1' . PHP_EOL;
    try {funcao2();}
    catch(RuntimeException | DivisionByZeroError  $problema){
        echo 'Exception de : ' . $problema->getMessage() . ' Na Linha : '. $problema->getLine() . ' No CallStack : ' . PHP_EOL . $problema->getTraceAsString() . PHP_EOL;
    }
    echo 'Saindo da função 1' . PHP_EOL;
}

function funcao2()
{
    echo 'Entrei na função 2' . PHP_EOL;
    $divisao = intdiv(4,0);
    $arrayFixo = new SplFixedArray(2);
    $arrayFixo[3] = 'Lucas';
    for ($i = 1; $i <= 5; $i++) {
        echo $i . PHP_EOL;
    }
    echo 'Saindo da função 2' . PHP_EOL;
}

echo 'Iniciando o programa principal' . PHP_EOL;
funcao1();
echo 'Finalizando o programa principal' . PHP_EOL;
