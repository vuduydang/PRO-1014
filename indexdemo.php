<?php 
require_once './commons/db.php';
$sql = "select 1+1";
$result= executeQuery($sql);
var_dump($result);


 ?>