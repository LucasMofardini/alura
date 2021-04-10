<?php
$mysql = new mysqli('localhost','root','root','blog');
$mysql->set_charset('utf8');
if($mysql == false){
    echo 'ERRO';
}

