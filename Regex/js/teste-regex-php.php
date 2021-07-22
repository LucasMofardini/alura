<?php
$reg = '~(\d\d)(\w)~';
$alvo = '11a22b33c';
$find = preg_match_all($reg ,$alvo, $match);
echo $find; 
print_r($find);