<?php 
$idade = 18;
$nPessoas = 1;
$nome = "Lucas";
echo "Você só pode entrar a partir de 18 anos ou 16 anos acompanhado " . PHP_EOL;

if($idade >= 18){  
echo "Você tem $idade anos.". PHP_EOL . "Pode entrar"; 
}else if($idade >= 16 && $nPessoas > 1){
    echo "Você tem $idade anos. Está acompanhado". PHP_EOL . "Pode entrar"; 
}else{
  echo "Você tem $idade anos." . PHP_EOL . "Não Pode entrar";
}
  

echo PHP_EOL;
echo "Adeus!";