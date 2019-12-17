<?php

session_start();
require_once"../commons/constants.php";

unset($_SESSION[AUTH_YF]);
echo "<script type='text/javascript'>
		sessionStorage.removeItem('login');
	</script>";

// header("location: ../index.php");

?>