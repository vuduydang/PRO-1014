<?php 
require_once './commons/db.php';
//https://github.com/fzaninotto/Faker
require_once './libs/Faker/autoload.php';
$faker = Faker\Factory::create();
// $name = $faker->name('female');
// $companyName = $faker->company;
// echo $name. "-" . $companyName;
// die;

// tạo dump data cho bảng roles
$roles = [
	['name' => 'member', 'status' => 1],
	['name' => 'admin', 'status' => 1],
	['name' => 'super admin', 'status' => 1]
];
foreach ($roles as $value) {
	extract($value);
	$sqlQuery = "insert into roles (name, status)
				values ('$name', $status)";
	// executeQuery($sqlQuery);
};
$users = [
	[
		'name' => 'Trần Thị Yên',
		'email' => 'yentt@gmail.com',
		'password' => password_hash('123456', PASSWORD_DEFAULT),
		'role_id'=> 1
	],
	[
		'name' => 'Trần Hồng Phước',
		'email' => 'phuocth@gmail.com',
		'password' => password_hash('123456', PASSWORD_DEFAULT),
		'role_id'=> 2
	],
	[
		'name' => 'admin',
		'email' => 'admin@gmail.com',
		'password' => password_hash('123456', PASSWORD_DEFAULT),
		'role_id'=> 2
	]
];
// foreach ($users as $value) {
// 	extract($value);
// 	$sqlQuery = "insert into users (name, email, password, role_id)
// 			values ('$name', '$email', '$password', $role_id)";
// 	executeQuery($sqlQuery);
// }
//for ($i=0; $i < 10; $i++) { 
	// $name = $faker->name;
	// $desc = $faker->realText($maxNbChars = 200, $indexSize = 2);
	// $desc =str_replace("'", "\'", $desc);
	// $showMenu = rand(0, 1);
	// echo $desc . "</br> <p></p>";
	// $sqlQuery = "insert into categories (name, description, show_menu) values ('$name','$desc','$showMenu')";
	 
//}

$sqlQuery = "select * from categories";
	$result = executeQuery($sqlQuery);
	arr($result);
//insert du lieu mau cho ban ghi products


 ?>

 <?php foreach ($collection as $value): ?>
 	
 <?php endforeach ?>

 