<?php
session_start();
header("Access-Control-Allow-Origin: *");
require_once 'db.php';

if (!empty($_POST['type']) &&
    !empty($_POST['gr']) &&
    !empty($_POST['energy'])  ) {
    $type = mysqli_escape_string($conn, $_POST['type']);
    $gr = mysqli_escape_string($conn, $_POST['gr']);
    $energy = mysqli_escape_string($conn, $_POST['energy']);


    $sqlInsertMessage = "INSERT INTO fruitsvegetables(`type`,`gr`,`energy`)
		VALUES ('" . $type . "', '" . $gr . "','" . $energy . "' )";

    if ($conn->query($sqlInsertMessage) === TRUE) {
        echo json_encode(['result' => 'ok']);
    } else {
        echo json_encode(['result' => 'notOk']);
    }
}else{
    echo json_encode(['result' => 'error']);
}