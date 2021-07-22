<?php
spl_autoload_register(function($classe){
    require "src/Alura/$classe.php";
});