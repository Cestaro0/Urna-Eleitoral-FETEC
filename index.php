<?php
require "connection.php";
$cpf = $_GET['cpf'];
if (!$_GET['cpf'])
    header("Location: form.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/screen.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/keys.css">
    <link rel="stylesheet" href="./assets/css/fim.css">
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <title>Urna Eletrônica</title>
</head>

<body>
    <div class="container">
        <img src="./assets/imgs/urna_Model3.png" class="urna">
        <div class="screen">
            <div class="divFoto" id="divFoto">
                <div class="animacaoFim">
                    <div class="loading" id="loading">
                        <label>Carregando...</label>
                        <div class="barra">
                            <div class="carregado" id="carregado"></div>
                        </div>
                    </div>
                    <div class="telaFim" id="telaFim">
                        <label class="lblFim">FIM</label>
                        <label class="lblVotou">VOTOU</label>
                    </div>
                </div>
            </div>
            <label class="title" id="titulo"></label>
            <label class="textTitle" id="textTitle">SEU VOTO É</label>
            <label class="textVoto" id="textNumber">Número:</label>
            <div class="confirmVote" id="confirmVote">
                <label class="confirmTitle">Aperte a tecla:</label>
                <label class="confirmBtnConfirma">CONFIRMA para CONFIRMAR esse voto</label>
                <label class="confirmBtnCorrige">CORRIGE para corrigir esse voto</label>
            </div>
            <input type="text" id="voto1" name="numero1" class="vote1" value="" disabled>
            <input type="text" id="voto2" name="numero2" class="vote2" value="" disabled>
        </div>
        <div class="keys">
            <form action="" method="POST" id="form">
                <input type="button" class="btn one" id="n1" value="1" onclick="GetValueInput(1)">
                <input type="button" class="btn two" id="n2" value="2" onclick="GetValueInput(2)">
                <input type="button" class="btn three" id="n3" value="3" onclick="GetValueInput(3)">
                <input type="button" class="btn four" id="n4" value="4" onclick="GetValueInput(4)">
                <input type="button" class="btn five" id="n5" value="5" onclick="GetValueInput(5)">
                <input type="button" class="btn six" id="n6" value="6" onclick="GetValueInput(6)">
                <input type="button" class="btn seven" id="n7" value="7" onclick="GetValueInput(7)">
                <input type="button" class="btn eight" id="n8" value="8" onclick="GetValueInput(8)">
                <input type="button" class="btn nine" id="n9" value="9" onclick="GetValueInput(9)">
                <input type="button" class="btn zero" id="n0" value="0" onclick="GetValueInput(0)">
                
                <input type="hidden" name="cpf" id="cpf" value="<?php echo $cpf; ?>">

                <img src="./assets/imgs/btn-branco.png" class="btn branco" id="btnBranco" onclick="white()">
                <img src="./assets/imgs/btn-corrige.png" class="btn corrige" id="btnCorrige" onclick="correct()">
                <button class="btn confirma" id="btnConfirma" onclick="confirm()"></button>
            </form>

        </div>
        <div id="imprime" class="divTeste"></div>
    </div>
    <script src="./script.js"></script>
</body>

</html>