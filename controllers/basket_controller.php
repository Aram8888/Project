<?php
require_once("..//models/basket_model.php");
session_start();
if ($_POST['action']=='delete') {
	delete($catid_delete);
	die;
}
if($_POST['action']=='order'){
	order();
	die;
}
$total=0;
$basket=basket();
for ($j=0; $j <count($basket) ; $j++) { 
			$total+=$basket[$j][4];
}
$_SESSION['total']=$total;
echo $_SESSION['total'];
$total=0;
$catid_delete=$_POST['catid_delete'];
?>