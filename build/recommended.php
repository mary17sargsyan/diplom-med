<?php
session_start();
header("Access-Control-Allow-Origin: *");
require_once 'db.php';

$userId=$_SESSION['userId'];


$sql = "SELECT weight, height, age, goal, kfa FROM user where id='$userId' ";
$result = $conn->query($sql);

if ($result->num_rows>0) {
    $row = $result->fetch_assoc();
    if($row['goal']=='loseWeight'){
      loseWeight($row['weight'],$row['height'],$row['age'], $row['kfa']);
    }else if ($row['goal']=='beHealthier'){
        beHealthy($row['weight'],$row['height'],$row['age'], $row['kfa']);
    }else if ($row['goal']=='gainWeight'){
        gainWeight($row['weight'],$row['height'],$row['age'], $row['kfa']);
    }


}
else{
    echo json_encode(['result' => 'error']);
}
function beHealthy($weight,$height,$age,$kfa){
    $bmWeight = 9.247 * $weight;
    $bmHeight = 3.098 * $height;
    $bmAge=4.330 * $age;
    $bmr =  447.593  + $bmWeight + $bmHeight - $bmAge ;
    $all =$bmr * $kfa;
    $arrFull = array('result' => $all,
        'a' => 'Eat a variety of foods each day',
        'b' => 'Balance food intake with moderate exercise',
        'c' => 'Include whole grains, fruits and vegetables daily',
        'd' => 'Decrease intake of total fats, saturated fat and cholesterol',
        'aa' => 'Moderate your intake of sugars, sodium and alcohol',
        'bb' => 'Include both aerobic and strength training exercise',
        'cc' => 'Keep fat intake to 15-30% of daily calories',
        'dd' => 'Weigh yourself every day',
        'mm' => 'If alcohol is consumed, it should be consumed in moderation—up to one drink per day for women and up to two drinks per day for men—and only by adults of legal drinking age');
    echo json_encode($arrFull);

}
function loseWeight($weight,$height,$age,$kfa){
    $bmWeight = 7.247 * $weight;
    $bmHeight = 3.098 * $height;
    $bmAge=4.330 * $age;
    $bmr =  447.593  + $bmWeight + $bmHeight - $bmAge  ;
    $all =$bmr * $kfa - 300;
    $arrFull = array('result' => $all,
        'a' => 'Eat a high-protein breakfast',
        'b' => 'Avoid sugary drinks and fruit juice',
        'c' => 'Drink water a half hour before meals',
        'd' => 'Choose weight loss-friendly foods ',
        'aa' => 'Eat soluble fiber',
        'bb' => 'Eat mostly whole, unprocessed foods',
        'cc' => 'Eat your food slowly',
        'dd' => 'Weigh yourself every day',
        'mm' => 'Get a good nights sleep, every night.');
    echo json_encode($arrFull);

}
function gainWeight($weight,$height,$age,$kfa){
    $bmWeight = 9.247 * $weight;
    $bmHeight = 3.098 * $height;
    $bmAge=4.330 * $age;
    $bmr =  447.593  + $bmWeight + $bmHeight - $bmAge ;
    $all =$bmr * $kfa - 300 ;
    $arrFull = array('result' => $all,
        'a' => 'Don\'t drink water before meals',
        'b' => 'Eat more often',
        'c' => 'Drink milk',
        'd' => 'Try weight gainer shakes',
        'aa' => 'Add cream to your coffee',
        'bb' => 'Take creatine',
        'cc' => 'Get quality sleep',
        'dd' => 'Eat your protein first and vegetables last',
        'mm' => 'Don\'t smoke. ');
     echo json_encode($arrFull);

}