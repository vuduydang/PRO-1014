<?php
require_once './commons/constants.php';
require_once './commons/db.php';
require_once './commons/helpers.php';
      $value = isset($_GET['search-box']) ? $_GET['search-box'] : "";
      $sqlQuery_films="SELECT * FROM films 
                        WHERE 
                        categories like '%$value%' 
                        OR year LIKE '%$value%' 
                        OR author LIKE '%$value%' 
                        OR series LIKE '%$value%'
                        OR name LIKE '%$value%'
                        ";
      $films = executeQuery($sqlQuery_films, true);
      if (!$films) {
          header("location: ./error.php");
      }
?>
<!DOCTYPE html>
<html lang="vi">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <title>ClipAnime Video & Anime Online</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <meta name="_token" id="token" value="">
    <meta name="_socket" id="socket" value="6001">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Vietnamese, English" />
    <link rel="shortcut icon" href="./assets/ico.png" type="image/png" />
    
      <link rel="stylesheet" href="./public/css/home9039.css?id=0cadef886044cb02b356">
  
      <link rel="stylesheet" href="./public/css/style.css">
</head>
<body>

    <?php include_once"./_share/header.php"; ?>
    
    <div class="container">

       <section class="tray video-page">
        <div class="tray-title">
          <a href="javascript:void(0)">Danh sách Phim <i class="icon icon-right"></i></a>
      </div>
        <div class="tray-content">
            <?php foreach ($films as $value) : ?> 
            <div class="tray-item">
                <a href="info.php?id=<?=$value['id']?>">
                    <img class="tray-item-thumbnail" src="./assets/thumbnails/<?php echo $value['thumbnail'] ?>" >
                    <div class="tray-item-description">
                        <div class="tray-item-title"><?php echo $value['name'] ?></div>
                        <div class="tray-item-meta-info">
                            <span class="tray-episode-name"><?php echo $value['series'] ?></span>
                            <span class="tray-episode-views"><?php echo $value['views'] ?>lượt xem</span>
                        </div>
                    </div>
                </a>
            </div>
            <?php endforeach ?>
        </div>
<div class="loading hidden"></div>
</section>
      
    </div> <!-- /container -->



    <div class="floating-action">
    <div class="action-item action-toggle"><i class="icon-up"></i></div>
    
</div>    

    
<script type="text/javascript" src="./public/js/bfilms.js"></script>


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-81129102-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-81129102-2');
</script>
            
</body>

<!-- Mirrored from clipanime.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 07 Nov 2019 07:01:12 GMT -->
</html>