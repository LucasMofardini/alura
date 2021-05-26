<?php
echo 'Lucas' . PHP_EOL;
echo 213  . 1324;
// $operadorExec = `ls`;
// echo $operadorExec;
$age = 18;
$underAge =  $age >= 18? 'Sim, voce é maior de idade': 'Não é maior de idade';
$user  =['name'=>'Lucas','age'=> 18];
echo $user['name']?? 'Outro nome';
//Se tiver um nome setado mostra o nome, se nao mostra outro nome
//Coalescência nula
for($i = 0; $i <=  50; $i++){
    echo $i . PHP_EOL;
}
echo strtoupper('Lucas');