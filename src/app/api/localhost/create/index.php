<?php
include('../connect.php');


$image = $_POST['image'];
$title = $_POST['title'];
$description = $_POST['description'];
$price = $_POST['price'];
$valueCategory = $_POST['valueCategory'];
$phone = $_POST['phone'];
$userName = $_POST['userName'];

$sql = "INSERT INTO products (`image`, `title`, `description`, `price`, `valueCategory`,  `phone`, `userName`) VALUES ('$image', '$title', '$description', '$price', '$valueCategory', '$phone', '$userName')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


$conn->close();