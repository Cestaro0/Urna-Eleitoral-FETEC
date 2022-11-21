<?php
$servername = "localhost";
$database = "urna";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

if ($_POST) {
    $cpf = $_POST['cpf'];
    $voto = $_POST['voto'];

    $sql = "INSERT INTO votos (voto, cpf) VALUES ($voto, $cpf)";
    if (mysqli_query($conn, $sql)) {
        // echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}


?>