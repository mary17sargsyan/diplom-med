<?php
session_start();
header("Access-Control-Allow-Origin: *");
require_once 'db.php';
$userId=$_SESSION['userId'];



$sql = "SELECT * FROM historyfood WHERE userId='$userId' ORDER BY `date` DESC";
$result = $conn->query($sql);

$products = [];
$sums = [];

if ($result->num_rows > 0) {
    while( $row = $result->fetch_assoc()) {
        $products[$row['date']][] = $row;
    }
}

$sql = "SELECT SUM(`gr`) as `sum_gr`, `date` FROM historyfood WHERE userId='$userId' GROUP BY `date` ORDER BY `date` DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while( $row = $result->fetch_assoc()) {
        $sums[$row['date']] = $row['sum_gr'];
    }
}
echo json_encode(['products' => $products, 'sums' => $sums]);