<?php

session_start();
require_once"../commons/constants.php";

unset($_SESSION[AUTH_YF]);
// die();
// echo "<script>sessionStorage.removeItem('loginYF');</script>";
// echo "<script>sessionStorage.clear();</script>";

header("location: ../index.php");

?>