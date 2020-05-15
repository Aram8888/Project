<?php
require_once("coneqtion.php");
function basket(){
	global $conn;
	$query="SELECT * FROM `basket`";
	$res = mysqli_query($conn,$query);
	$result=mysqli_fetch_all($res);
	if (!$res) {
		die("ERROR:".mysqli_error($conn));
	}
	return $result;
};
function delete($id){
	global $conn;
	$query="DELETE FROM `basket` WHERE id='$id'";
	$res = mysqli_query($conn,$query);
	if (!$res) {
		die("ERROR:".mysqli_error($conn));
	}
}
function order(){
	global $conn;
	$query="DELETE FROM `basket` WHERE id limit  40";
	$res = mysqli_query($conn,$query);
	if (!$res) {
		die("ERROR:".mysqli_error($conn));
	}
}
?>