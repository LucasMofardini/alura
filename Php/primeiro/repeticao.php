<?php
$i = 1;
// loop
while($i <= 15){
  echo "#$i" . PHP_EOL;
  $i++;
}
for($contador = 15; $contador <= 30; $contador++){
  if($contador == 13){
    continue;
  }
    echo "#$contador" . PHP_EOL;
  
 
}