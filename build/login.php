<?php
session_start();
header("Access-Control-Allow-Origin: *");
require_once 'db.php';


if($_SERVER['REQUEST_METHOD']==='POST' && !empty($_POST)) {

    {
        if (!empty($_POST['userName']) && !empty($_POST['password'])) {

            $userName = mysqli_escape_string($conn, $_POST['userName']);
            $password = mysqli_escape_string($conn, $_POST['password']);

            $sql = "SELECT id, userName, password FROM user where userName='$userName' AND password='$password' ";
            $result = $conn->query($sql);

            if ($result->num_rows == 1) {
                $row = $result->fetch_assoc();
                $_SESSION['userId'] = $row['id'];
                echo json_encode(['result' => 'ok']);
            }
            else{
                echo json_encode(['result' => 'not_ok']);
            }
        }
    }


}




