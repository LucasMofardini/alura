<?php 

try{
    echo "Executando o codigo" . PHP_EOL;
    // throw new Exception('Mensagem');
}catch (Throwable $e){
    echo "caindono catch" . PHP_EOL;
}finally{
    Echo "Sempre executa o finally" . PHP_EOL;
}