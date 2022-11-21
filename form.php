<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/form.css">
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <title>Identifique-se!</title>
</head>

<body class="background">
    <form action="ChecaCpf.php" class="formCpf" id="form" method="POST">
        <h1> DIGITE SEU CPF</h1>
        <input type="text" autofocus id="cpf" name="cpf" autocomplete="off" maxlength="14">
        <label id="lblError"></label>
        <button id="btnEnv" onclick="clickBtn()">Confirma</button>
    </form>
    <script>
        const inputCpf = document.getElementById("cpf");
        const form = document.getElementById("form");
        const button = document.getElementById("btnEnv");

        inputCpf.addEventListener("keypress", (e) => {
            if (e.key == "0" || e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9") {
                let inputCpfLength = inputCpf.value.length;

                if (inputCpfLength === 3 || inputCpfLength === 7) {
                    inputCpf.value += ".";
                } else if (inputCpfLength === 11) {
                    inputCpf.value += "-";
                }
            } else if (e.key == "Enter") {
                //
            } else {
                setTimeout(() => {
                    inputCpf.value = "";
                    alert("Somente números por favor!")
                }, 10)
            }
        })

        function cancelSend() {
            form.addEventListener("submit", (e) => {
                window.location.reload(true);
                e.preventDefault();
                console.log(e)
            })
            inputCpf.value = "";
            alert("uepa ratinho")
        }

        function verify(cpf) {
            console.log("cpf da function verify: " + cpf);

            if (cpf.indexOf('000') > -1 || cpf.indexOf('111') > -1) {
                cancelSend();
            } else if (cpf.indexOf('222') > -1) {
                cancelSend();
            } else if (cpf.indexOf('333') > -1) {
                cancelSend();
            } else if (cpf.indexOf('444') > -1) {
                cancelSend();
            } else if (cpf.indexOf('555') > -1) {
                cancelSend();
            } else if (cpf.indexOf('666') > -1) {
                cancelSend();
            } else if (cpf.indexOf('777') > -1) {
                cancelSend();
            } else if (cpf.indexOf('888') > -1) {
                cancelSend();
            } else if (cpf.indexOf('999') > -1) {
                cancelSend();
            } else {
                button.setAttribute("type", "submit")
                $.ajax({
                    type: "POST",
                    data: {
                        cpf: cpf
                    },
                    url: "ChecaCpf.php",
                    dataType: "html",
                });
                window.location.href = "./ChecaCpf.php";
            }
        }

        function clickBtn() {
            if (inputCpf.value.length == 14) {
                button.setAttribute("type", "submit")
                var notFormat = inputCpf.value;
                var format = notFormat.replace(".", "");
                var format2 = format.replace(".", "")
                var cpf = format2.replace("-", "")

                verify(cpf);
                cpf = "";

                return;
            } else {
                alert("Número de caractéres não conferem!")
            }
        }
    </script>
</body>

</html>