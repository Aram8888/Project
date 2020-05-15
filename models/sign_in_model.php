<?php
require_once("coneqtion.php");
function  add_user($email,$password){
	global $conn;
	$query="INSERT INTO `users`(`user_email`, `user_password`) VALUES ('$email','$password')";
	$res=mysqli_query($conn,$query);
	if(!$res){
		die("ERROR:".mysqli_error($conn));
	}
}
function users(){
	global $conn;
	$query="SELECT `user_email` FROM `users` ";
	$res = mysqli_query($conn,$query);
	$result=mysqli_fetch_all($res);
	if (!$res) {
		die("ERROR:".mysqli_error($conn));
	}
	return $result;
}
?>