<?php
session_start();
require_once"../commons/db.php";
require_once"../commons/constants.php";
require_once"../commons/helpers.php";




	$full_name  = isset($_POST['full_name']) ? $_POST['full_name'] : "";
    $password   = isset($_POST['password']) ? $_POST['password'] : "";
    $gender     = isset($_POST['gender']) ? $_POST['gender'] : "";
    $birthday   = isset($_POST['birthday']) ? $_POST['birthday'] : "";
    $birthmonth = isset($_POST['birthmonth']) ? $_POST['birthmonth'] : "";
    $birthyear  = isset($_POST['birthyear']) ? $_POST['birthyear'] : "";
    $birthdays  = $birthyear.'-'. $birthmonth.'-'.$birthday;


    if($full_name != ""){
    	// lấy dữ liệu từ csdl bảng users dựa vào email
        $id     = $_SESSION[AUTH_YF]['id'];
    	$sqlUserQuery = "SELECT * FROM users WHERE id = '$id'";
    	$user = executeQuery($sqlUserQuery);
        
    	if($user && password_verify($password, $user['password'])){
    		$update = "UPDATE users SET name = '$full_name', gender = '$gender', age = '$birthdays' WHERE id = '$id'";
            executeQuery($update);
            $_SESSION[AUTH_YF] = [
                "id" => $user['id'],
                "username" => $user['username'],
                "name" => $full_name,
                "email" => $user['email'],
                "avatar" => $user['avatar'],
                "age" => $birthdays,
                "role_id" => $user['role_id']
            ];
            header("location: ../");
        }else{
            echo "<script>alert('Sai Password !')</script>";
            echo "<script>window.history.back()</script>";
            die();
        }
    }
?>
<script type="text/javascript">
    alert('Bạn chưa nhập tên hiển thị !');
    window.history.back();
</script>