<?php
include('../connect.php');
$response = array();
$upload_dir = 'E:/ospanel/domains/localhost/img/'; 
$server_url = 'http://localhost:3001/img'; 

if($_FILES['file']) {

        $file_name = $_FILES["file"]["name"];
        $file_tmp_name = $_FILES["file"]["tmp_name"];
        $random_name = rand(1000,1000000)."-".$file_name;
        $upload_name = $upload_dir.strtolower($random_name);
				
    if(move_uploaded_file($file_tmp_name , $upload_name)) {
                $imgUrl=$server_url."/".$random_name;
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