<?php
require_once("..//models/pizza_model.php");
$img_address=$_POST['img_address'];
$name=$_POST['name'];
$size=$_POST['size'];
$price=$_POST['price'];
if($_POST['action']=='add'){
	add_basket($img_address,$name,$size,$price);
	header('location:..//pizza.php')
}
?>