<?php
session_start();
require_once("..//models/customers_model.php");	
$email=$_POST['email'];
$pas=$_POST['pas'];
$users=users();
$bool=false;
if ($_POST['action']=='add') {
	for ($i=0; $i <count($users) ; $i++) { 
			if($users[$i][1]===$email&&$users[$i][2]===$pas){
				$bool=true;
			}
		}
		if($bool){
			$_SESSION['user']=$email;
			header("location:../view/MyPage.php");
			die;
		}
		else{
			$_SESSION['user']='';
			$_SESSION['error']='Login or password is incorrect';
			header("location:../view/customers_office.php");
		die;
		}
	}
?>