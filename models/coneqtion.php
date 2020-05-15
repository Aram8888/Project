<?php 
	$conn = mysqli_connect('localhost','root','','project');
	if (mysqli_connect_errno($conn)) {
		die("ERROR:".mysqli_connect_error($conn));
	}
?>