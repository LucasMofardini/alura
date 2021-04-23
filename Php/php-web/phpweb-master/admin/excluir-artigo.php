<?php
require '../config.php';
require '../src/Artigo.php';
require '../src/redireciona.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    
    $artigo = new Artigo($mysql);
    $artigo->remover($_POST['id']);
    redireciona('index.php');
}
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <link rel="stylesheet" type="text/css" href="../style.css">
    <meta charset="UTF-8">
    <title>Excluir Artigo</title>
</head>

<body>
    <div id="container">
        <h1>Você realmente deseja excluir o artigo?</h1>
        <form method="post" action="excluir-artigo.php">
            <p>
                <!-- Ele recebe o id da página -->
                <input type="hidden" name="id" value="<?php echo $_GET['id']; ?>" />
                <button class="botao">Excluir</button>
            </p>
        </form>
    </div>
</body>

</html>