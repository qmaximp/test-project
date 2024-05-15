<?php
	header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Headers:Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wiwato";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}