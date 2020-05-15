<?php
session_start();
require_once("..//models/sign_in_model.php");	
$email=$_POST['email'];
$pas=$_POST['pas'];
$confirm_pas=$_POST['confirm_pas'];
$users=users();
$bool=false;
if ($_POST['action']=='add') {
		for ($i=0; $i <count($users) ; $i++) { 
			if($users[$i][0]===$email){
				$bool=true;
			}
		}
		if($pas===$confirm_pas&&$bool===false){
			add_user($email,$pas);
			$_SESSION['user']=$email;
			header("location:../view/MyPage.php");
			die;
		}
		else{
			$_SESSION['error']='Login or password is incorrect';
			header("location:../view/sign_in.php");
		die;
		}
	}
?>