<?php

session_start();
require_once"../commons/constants.php";

unset($_SESSION[AUTH_YF]);
header("location: index.php");