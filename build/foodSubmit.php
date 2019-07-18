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

    $sql = "SELECT * FROM foodcalories where type='$type'";


    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $calorie=$howMuch*$row['gr']/100;
        $sqlInsertMessage = "INSERT INTO historyfood (`userId`,`time`,`type`,`gr`,`date`)
		VALUES ('" .  $_SESSION['userId'] . "', '" . $time . "','" . $type . "', '" . $calorie . "',   '" . $today . "')";


        if ($conn->query($sqlInsertMessage) === TRUE) {
            echo json_encode(['result' =>  $today]);
        } else {
            echo json_encode(['result' => $today]);
        }

    } else{
        echo json_encode(['result' => 'notOk']);

    }

}else{
    echo json_encode(['result' => 'error']);
}
