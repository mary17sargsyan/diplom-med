<?php


session_start();
header("Access-Control-Allow-Origin: *");
if(empty($_SESSION['userId'])){
    echo json_encode(['result' => 'ok']);
    exit;
}else{
    echo json_encode(['result' => 'not_ok']);
}


