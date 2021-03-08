<?php 
//Include é para arquivos que nao necessariamente são necessarios para o funcionamento
// include('funcoes.php');

//Require é para arquivos que precisam ser executados no código
// require('funcoes.php');
//Require_once é para esse arquivo ser importado apenas uma vez
require_once('funcoes.php');

$contas = [
  '123.456.789-10' => [
      'nome' => 'Lucas',
      'saldo' => 1000
  ],
  '123.456.789-11' => [
      'nome' => 'João',
      'saldo' => 10000
  ],
  '123.256.789-12' => [
  'nome' => 'Rodrigo',
  'saldo' => 3003.1
  ]
];
//Entra na conta , executa a function sacar da da $contas['CPF'] , e tira 500 do saldo
$contas['123.256.789-12'] = sacar($contas['123.256.789-12'],500);
$contas['123.456.789-10'] = depositar($contas['123.456.789-10'], 900);
unset($contas['123.256.789-12']);
letrasM($contas['123.456.789-10' ]);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
    <h1>Contas correntes</h1>

    <dl>
        <?php foreach($contas as $cpf => $conta) { ?>
        <dt>
            <h3><?= $conta['nome']; ?> - <?= $cpf; ?></h3>
        </dt>
        <dd>Saldo: <?= $conta['saldo']; ?></dd>
        <?php } ?>
    </dl>
</body>
</html>
