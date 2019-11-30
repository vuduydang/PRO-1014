<?php
session_start();
require_once"../commons/db.php";
require_once"../commons/constants.php";
require_once"../commons/helpers.php";

if (isset($_SESSION[AUTH_YF])) {
	header("location:".BASE_URL."/admin/dashboard.php");
}
if (isset($_POST['sigin'])) {
	$user = isset($_POST['user']) ? $_POST['user'] : "";
	$email = isset($_POST['email']) ? $_POST['email'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";

    if($user != "" || $email != "" && $password != ""){
    	// lấy dữ liệu từ csdl bảng users dựa vào email
    	$sqlUserQuery = "SELECT * FROM users WHERE username = '$user' OR email = '$email'";
    	$user = executeQuery($sqlUserQuery);
    	if($user && password_verify($password, $user['password'])){
    		$_SESSION[AUTH_YF] = [
    			"id" => $user['id'],
    			"username" => $user['username'],
    			"name" => $user['name'],
    			"phone" => $user['phone'],
    			"email" => $user['email'],
    			"avatar" => $user['avatar'],
    			"age" => $user['age'],
    			"role_id" => $user['role_id']
    		];
    		header('location: ' . BASE_URL . '/admin/dashboard.php');
    		die;
    	}
    }
    header('location: ' . BASE_URL . 'login.php?msg=Email/Mật khẩu không đúng');
    die;

	$select		= "SELECT * FROM admin_db WHERE ad_name=:adname AND ad_password=:adpassword";
	$stmt		= $conn->prepare($select);
	$stmt->bindParam(':adname', $adname );
	$stmt->bindParam(':adpassword', $adpassword);
	$stmt->execute();
	$admin		= $stmt->fetch();
	if ($stmt->rowCount()>0) {
		$_SESSION['admin'] = $admin['ad_name'];
		header("location: quanly.php");
	}else {
		echo '<script>alert("Sai Username or Password")</script>';
	}
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
		body {font-family: Arial, Helvetica, sans-serif;}

		/* Full-width input fields */
		input[type=text], input[type=password] {
		  width: 100%;
		  padding: 12px 20px;
		  margin: 8px 0;
		  display: inline-block;
		  border: 1px solid #ccc;
		  box-sizing: border-box;
		}

		/* Set a style for all buttons */
		button {
		  background-color: #4CAF50;
		  color: white;
		  padding: 14px 20px;
		  margin: 8px 0;
		  border: none;
		  cursor: pointer;
		  width: 100%;
		}

		button:hover {
		  opacity: 0.8;
		}

		/* Extra styles for the cancel button */
		.cancelbtn {
		  width: auto;
		  padding: 10px 18px;
		  background-color: #f44336;
		}

		/* Center the image and position the close button */
		.imgcontainer {
		  text-align: center;
		  margin: 24px 0 12px 0;
		  position: relative;
		}

		img.avatar {
		  width: 40%;
		  border-radius: 50%;
		}

		.container {
		  padding: 16px;
		}

		span.psw {
		  float: right;
		  padding-top: 16px;
		}

		/* The Modal (background) */
		.modal {
		  position: fixed; /* Stay in place */
		  z-index: 1; /* Sit on top */
		  left: 0;
		  top: 0;
		  width: 100%; /* Full width */
		  height: 100%; /* Full height */
		  overflow: auto; /* Enable scroll if needed */
		  background-color: rgb(0,0,0); /* Fallback color */
		  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
		  padding-top: 60px;
		}

		/* Modal Content/Box */
		.modal-content {
		  background-color: #fefefe;
		  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
		  border: 1px solid #888;
		  width: 30%; /* Could be more or less, depending on screen size */
		}

		/* The Close Button (x) */
		.close {
		  position: absolute;
		  right: 25px;
		  top: 0;
		  color: #000;
		  font-size: 35px;
		  font-weight: bold;
		}

		.close:hover,
		.close:focus {
		  color: red;
		  cursor: pointer;
		}

		/* Add Zoom Animation */
		.animate {
		  -webkit-animation: animatezoom 0.6s;
		  animation: animatezoom 0.6s
		}

		@-webkit-keyframes animatezoom {
		  from {-webkit-transform: scale(0)} 
		  to {-webkit-transform: scale(1)}
		}
		  
		@keyframes animatezoom {
		  from {transform: scale(0)} 
		  to {transform: scale(1)}
		}

		/* Change styles for span and cancel button on extra small screens */
		@media screen and (max-width: 300px) {
		  span.psw {
		     display: block;
		     float: none;
		  }
		  .cancelbtn {
		     width: 100%;
		  }
		}
	</style>
</head>
<body>
<div id="id01" class="modal">
  
  <form class="modal-content animate" action="" method="post">
    <div class="imgcontainer">
      <img src="../images/logo.png" alt="Avatar" class="avatar" width="100">
    </div>

    <div class="container">
      <label for="uname"><b>Username/Email</b></label>
      <input type="text" placeholder="Username" name="user" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Password" name="password" required>
        
      <button type="submit" name="sigin">Login</button>
    </div>
  </form>
</div>


</body>
</html>
