<?php 
include('../connect.php');
  $conn = new DbConnect();
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case 'GET':
    $sql = "SELECT * FROM categories";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);        
    echo json_encode($users);
    break;
		}