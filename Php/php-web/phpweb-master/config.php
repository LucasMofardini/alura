<?php
$mysql = new mysqli('localhost','root','awsmysql1','blog');
$mysql->set_charset('utf8');
if($mysql == false){
    echo 'Banco não está funcionando';
}

