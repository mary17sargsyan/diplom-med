<?php
session_start();
header("Access-Control-Allow-Origin: *");
require_once 'db.php';

if (!empty($_POST['lastName']) &&
    !empty($_POST['firstName']) &&
    !empty($_POST['userName'])  &&
    !empty($_POST['password'])  &&
    !empty($_POST['passwordRepeat'])&&
    !empty($_POST['age']) &&
    !empty($_POST['selectGender']) &&
    !empty($_POST['weight'])  &&
    !empty($_POST['height']) &&
    !empty($_POST['goal'])  &&
    !empty($_POST['kfa']) ) {
    $firstName = mysqli_escape_string($conn, $_POST['firstName']);
    $lastName = mysqli_escape_string($conn, $_POST['lastName']);
    $userName = mysqli_escape_string($conn, $_POST['userName']);
    $password = mysqli_escape_string($conn, $_POST['password']);
    $passwordRepeat= mysqli_escape_string($conn, $_POST['passwordRepeat']);
    $age= mysqli_escape_string($conn, $_POST['age']);
    $gender= mysqli_escape_string($conn, $_POST['selectGender']);
    $weight= mysqli_escape_string($conn, $_POST['weight']);
    $height= mysqli_escape_string($conn, $_POST['height']);
    $goal= mysqli_escape_string($conn, $_POST['goal']);
    $kfa= mysqli_escape_string($conn, $_POST['kfa']);

    if($password != $passwordRepeat){
        echo json_encode(['result' => 'notOk']);
        exit;
    }

    $hashedPassword = hash('sha256', $password);

    $sqlInsertMessage = "INSERT INTO user 
      (`firstName`,`lastName`,`userName`,`password`,`age`,`gender`,`weight`,`height`,`goal`,`kfa`)
		VALUES (
		  '" . $firstName . "', 
		  '" . $lastName . "',
		  '" . $userName . " ', 
		  '" . $hashedPassword . "',
		  '" . $age . "',
		  '" . $gender . "', 
		  '" . $weight . "', 
		  '" . $height . "', 
		  '" . $goal . "' , 
		  '" . $kfa . "' ) ";

    if ($conn->query($sqlInsertMessage) === TRUE) {
        echo json_encode(['result' => 'ok']);
    } else {
        echo json_encode(['result' => 'notOk']);
    }
}else{
    echo json_encode(['result' => 'error']);
}
