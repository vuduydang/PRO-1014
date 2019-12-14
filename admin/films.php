<?php
require("../config.php");
header('Content-Type: text/html;charset=utf-8');  
ob_start();
session_start();
date_default_timezone_set('Asia/Ho_Chi_Minh');
$url_phim = $_GET['url_phim'];
$tap = $_GET['tap'];
?>
<!DOCTYPE html>
<html lang="vi">
<?php
$sql = "SELECT * FROM vhn_film WHERE linkphim = '$url_phim'";
$result = $conn->query($sql);
if ($result->num_rows > 0) 
{
    while($row = $result->fetch_assoc()) {
?>
<?php

    //PHP thuần
    $sessionKey = 'luotxem' . $postId;
    $sessionView = $_SESSION[$sessionKey];
    if (!$sessionView) { // nếu chưa có session
        $_SESSION[$sessionKey] = 1; //set giá trị cho session
        $conn->query("UPDATE vhn_film SET luotxem = luotxem + 1 WHERE linkphim = '$url_phim'");
    }


?>

<head>
      <base href="<?php echo $trangchu ?>/">
<title><?php echo "".$row["tenphim"].""; ?> Tập <?php echo $tap ?></title>
<meta name="description" content="<?php echo "".$row["noidung"].""; ?>" />
<link rel="canonical" href="https://aniraw.net/Info/<?php echo $url_phim ?>"/>
<link rel="icon" href="https://i.imgur.com/SQ5D74B.png" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta charset="utf-8">
<meta property="og:type" content="website" />
<meta property="og:title" content="Phim <?php echo "".$row["tenphim"].""; ?>" />
<meta property="og:description" content="<?php echo "".$row["noidung"].""; ?>" />
<meta property="og:image" content="<?php echo "".$row["thumbnail"].""; ?>" />
<meta property="og:site_name" content="aniraw.net" />
<meta property="og:url" content="https://aniraw.net/Info/<?php echo $url_phim ?>" />
<meta property="og:locale" content="vi_VN" />
<meta property="fb:app_id" content="2192074074245587" />
<meta property="fb:admins" content="113150126504227" />
<meta name="robots" content="index, follow">
<link href="https://fonts.googleapis.com/css?family=Pridi|Roboto" rel="stylesheet">
<link href="./themes/AH_1-2/all/css/styleweb.css?v=4.9.5" rel="stylesheet" />
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
<script src="./themes/AH_1-2/all/js/init.js?v=1.8.2"></script>
<script src="./themes/AH_1-2/all/js/player.js"></script>
<?php }} ?>
</head>
<body>
    <div id="ah-wrapper">
<?php include ("./vhn_themes/AnimeHay/header.html"); ?>
<div id="ah-container" class="ah-clear-both"><div id="ah-pif" itemscope="" itemtype="https://schema.org/Product">
<div style="display: block;text-align: center;line-height: 48px;">
<a href="javascript:changeiFrame()" id="dpa" style="
    background: #8a3a3a;
    padding: 10px 5px;
    border: 1px solid #313131;
    box-shadow: 1px 1px 1px #000;
    margin-left: 5px;
">Dự phòng A</a>

<a href="javascript:changeiFrame3()" id="dpa" style="
    background: #8a3a3a;
    padding: 10px 5px;
    border: 1px solid #313131;
    box-shadow: 1px 1px 1px #000;
    margin-left: 5px;
">Dự phòng C</a>
</div>
<div class="ah-watch-film">
    <div class="ah-wf-head">

	 
    		
      <div class="film-player ah-bg-bd">
				 <div id="ah-player" class="" style="">

<div id="VoHuuNhan">
				             </div></div>
				             <?php
$sql = "SELECT * FROM vhn_tap WHERE sotap = '$tap' limit 0,1";
$result = $conn->query($sql);
if ($result->num_rows > 0) 
{
    while($row = $result->fetch_assoc()) {
?>
        <div class="ah-wf-tool ah-bg-bd">
        <ul>
                        <li><a target="_blank" href="https://drive.google.com/uc?export=download&id=<?php echo $row["player"]; ?>" class="next-episode" title="Tải phim"><i class="fa fa-download"></i> Tải phim (HD)</a></li>
            <li><a href="<?php echo $trangchu ?>/Info/<?php echo $row["linkphim"]; ?>"><i class="fa fa-info-circle"></i> Thông tin</a></li>
			<!--<li><a id="turnOfflight" href="javascript:void(0)" onClick="turnOfflight()"><i class="fa fa-lightbulb-o"></i> Tắt đèn</a></li>-->
			     <li><a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $trangchu."/Xem/"; echo $row["linkphim"]; ?>/<?php echo $tap ?>" target="_blank">Chia Sẻ</a></li>
        </ul>
        </div><?php
				}}
			?>
				<?php
$sql = "SELECT * FROM vhn_film WHERE linkphim = '$url_phim'";
$result = $conn->query($sql);
if ($result->num_rows > 0) 
{
    while($row = $result->fetch_assoc()) {
?>
            <div class="ah-wf-title">
             <h1><a title="<?php echo "".$row["tenphim"].""; ?>"><?php echo "".$row["tenphim"].""; ?> Tập <?php echo $tap ?></h1>
        </div>
        <?php }} ?>
    </div>
    <div class="ah-wf-body">
				<div class="ah-pd ah-bg-bd"><p><span style="color:#FFA500">Admin :&nbsp;<a href="https://www.facebook.com/SPT.Nhan">https://www.facebook.com/SPT.Nhan</a></span></p>
</div>
		        <div class="ah-wf-le ah-bg-bd">
            
<div class="ah-le-server ah-le-fs35"><span>Tổng Hợp</span></div>
<ul>
<li>
        <?php $sql = "SELECT * FROM vhn_tap WHERE linkphim = '$url_phim' ORDER BY id ASC";$result = $conn->query($sql);if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
?>
                            <a href="<?php echo $trangchu ?>/Xem/<?php echo $url_phim ?>/<?php echo "".$row["sotap"].""; ?>" class="<?php if($row['sotap'] == "$tap"){
					echo 'active';
					} ?>"><?php echo "".$row["sotap"].""; ?></a>
                                   	<?php
				}}
			?></li>
            </ul>
    </div>
    </div>

   
</div>
</div>
</div>

 <?php include ("./vhn_themes/AnimeHay/footer.html"); ?>
        </div>
        
<?php
$sql = "SELECT * FROM vhn_tap WHERE sotap = '$tap' AND linkphim = '$url_phim'";
$result = $conn->query($sql);
if ($result->num_rows > 0) 
{
    while($row = $result->fetch_assoc()) {
?>
        <script type="text/javascript">
var playerInstance = jwplayer("VoHuuNhan");
playerInstance.setup({
width: "100%",
height: "100%",
title: "",
controls: true,
displaytitle: false,
aspectratio: "16:9",
fullscreen: "true",
primary: 'html5',
provider: 'http',
sources: [{file: 'https://www.googleapis.com/drive/v3/files/<?php echo  htmlentities($row["player"]); ?>?alt=media&key=AIzaSyDdoetN4aDmDBc6Y11CUGK4nhZ0pvZbXOw',type: 'mp4',label: '1080'}],
        abouttext: "Developer By Võ Hữu Nhân",
        aboutlink: "https://www.facebook.com/SPT.Nhan"
    
    });

</script>
<?php }} ?>
</body>
