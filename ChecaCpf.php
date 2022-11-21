<?php

//require_once('connection.php');

$pdo = new PDO('mysql:host=localhost;dbname=urna', 'root', null);
$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

$cpf_sem_formatacao = $_POST['cpf'];
$formatacao_1 = str_replace(".", "", $cpf_sem_formatacao);
$formatacao_2 = str_replace("-", "", $formatacao_1);
$cpf = $formatacao_2;
// $formatacao_3 = str_replace("mundo", "leitor", $texto);

if (empty($_POST['cpf']))
{
    echo "<script>alert('O campo CPF precisa ser preenchido'); window.location.assign('form.php');</script>";
}
else
{
    $aux = 0;
    $consulta = $pdo->query("select * from votos where cpf = $cpf");
    $data = $consulta->fetch(PDO::FETCH_ASSOC);

    if ($data['cpf'] == "") {
        header("Location: index.php?cpf=$cpf");
    }else{
        
        echo "<script>alert('Voce já votou (T-T)'); window.location.assign('form.php');</script>"; 
    
    }

}

?>