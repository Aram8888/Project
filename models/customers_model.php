<?php
require_once("coneqtion.php");
function users(){
	global $conn;
	$query="SELECT * FROM `users` ";
	$res = mysqli_query($conn,$query);
	$result=mysqli_fetch_all($res);
	if (!$res) {
		die("ERROR:".mysqli_error($conn));
	}
	return $result;
}
?>