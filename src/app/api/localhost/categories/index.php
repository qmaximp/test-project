<?php 
include('../connect.php');
header('Access-Control-Allow-Origin: *');

$data = array(); 
$sql = "SELECT * FROM categories";
$ta = mysqli_query($conn,$sql); 
while($row = mysqli_fetch_assoc($ta)){
    $data[] = $row; 
}
echo json_encode($data); 