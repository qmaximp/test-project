<?php
include('../connect.php');



$title = $_POST['title'];
$description = $_POST['description'];
$price = $_POST['price'];
$valueCategory = $_POST['valueCategory'];
$phone = $_POST['phone'];
$userName = $_POST['userName'];

$sql = "INSERT INTO products ( `url`, `title`, `description`, `price`, `valueCategory`,  `phone`, `userName`) VALUES ( '$url', '$title', '$description', '$price', '$valueCategory', '$phone', '$userName')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

$response = array();
$upload_dir = 'C:/ospanel/domains/localhost/img/'; //Your upload directory path
$server_url = 'http://localhost:3001/img'; //for getting upload url


if($_FILES['file'])

{
        $file_name = $_FILES["file"]["name"];
        $file_tmp_name = $_FILES["file"]["tmp_name"];

        $random_name = rand(1000,1000000)."-".$file_name;
        $upload_name = $upload_dir.strtolower($random_name);


    if(move_uploaded_file($file_tmp_name , $upload_name)) {

                $imgUrl=$server_url."/".$random_name;

                //Inser image in database record
               /*  $query="INSERT INTO products (url)VALUES('$imgUrl') "; */
								$query="INSERT INTO products (`url`) VALUES ('$imgUrl')";
                $conn->query($query);

                  array_push($response,array(
                    "status" => "success",
                    "error" => false,
                    "message" => "File uploaded successfully",
                    "url" => $server_url."/".$random_name,
                  ));
            }else
            {
                array_push($response,array(
                    "status" => "danger",
                    "error" => true,
                    "url" =>  "",
                    "message" => "Error uploading the file!"
                ));
            }
}else{
    $response = array(
        "status" => "error",
        "error" => true,
        "url" =>  "",
        "message" => print_r($_FILES['file'])
    );
}

echo json_encode($response);


$conn->close();