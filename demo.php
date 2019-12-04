<?php 
echo md5('123456');
echo "<br>";
echo password_hash('member', PASSWORD_DEFAULT);
echo "<br>";
var_dump(password_verify('123456', '$2y$10$20SRfRoZOA/5foAe/gkfp.TsIMwPP7Q9vpWnTEONOnlnrhcw34.KW'));
// $arr = [
// 		'name' => 'admin',
// 		'email' => 'admin@gmail.com',
// 		'password' => password_hash('123456', PASSWORD_DEFAULT),
// 		'role_id'=> 2
// 	];
// extract($arr);
// echo "$name - $email - $password - $role_id";


 ?>
 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<title>Document</title>
 	<base href="http://*/">
 </head>
 <body>
 	
 </body>
 </html>