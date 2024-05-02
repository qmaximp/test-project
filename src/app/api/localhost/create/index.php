<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
include('../connect.php');

$title = $_POST['title'];
$description = $_POST['description'];
$price = $_POST['price'];

$sql = "INSERT INTO products (`title`, `description`, `price`) VALUES ('$title', '$description', '$price')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


$conn->close();