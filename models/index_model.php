<?php
require_once("coneqtion.php");
function add_basket($img_address,$name,$size,$price){
	global $conn;
	$query="INSERT INTO `basket`(`img`, `name`, `size`, `price`) VALUES ('$img_address','$name','$size','$price')";
	$res = mysqli_query($conn,$query);
	if (!$res) {
		die("ERROR:".mysqli_error($conn));
	}
	return mysqli_num_rows($res);
}
?>