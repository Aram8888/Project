<?php
	session_start();
	if ($_POST['action']=='logout') {
		$_SESSION['user']='';
		header('location:../index.php');
		die;
		}
?>