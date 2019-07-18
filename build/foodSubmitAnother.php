<?php
session_start();
header("Access-Control-Allow-Origin: *");
$today = date("Y-m-d");
require_once 'db.php';

if (!empty($_POST['time']) &&
    !empty($_POST['type']) &&
    !empty($_POST['howMuch'])  ) {
    $type = mysqli_escape_string($conn, $_POST['type']);
    $time = mysqli_escape_string($conn, $_POST['time']);
    $howMuch = mysqli_escape_string($conn, $_POST['howMuch']);

    $sqlInsertMessage = "INSERT INTO historyfood (`userId`,`time`,`type`,`gr`,`date`)
		VALUES ('" . $_SESSION['userId'] . "','" . $time . "','" . $type . "','" . $howMuch . "','" . $today . "')";


    if ($conn->query($sqlInsertMessage) === TRUE) {
        echo json_encode(['result' => 'ok']);
    } else {
        echo json_encode(['result' => $today]);
    }

}


