<?php 
    require_once './commons/constants.php';
    require_once './commons/db.php';
    require_once './commons/helpers.php';
    $sqlQuery = "select * from films  limit 6";
    $films = executeQuery($sqlQuery, true);
    

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

    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Vietnamese, English" /> -->
    

    
       <link rel="shortcut icon" href="./assets/ico.png" type="image/png" />
    
      <link rel="stylesheet" href="./public/css/home9039.css?id=0cadef886044cb02b356">
  
      <link rel="stylesheet" href="./public/css/style.css">
    </head>
<body>

    <?php include_once"./_share/header.php"; ?>
    
    <div class="container">

                      <div class="banner-masthead">
        <script type="text/javascript">
          var _avlVar = _avlVar || [];
          _avlVar.push(["685a2cbb1c3448729f4a578af4a29f25","[yo_page_url]","[width]","[height]"]);
        </script>
        <script type="text/javascript" src="../ss.yomedia.vn/js/yomedia-sdk30f4.js?v=3" id="s-685a2cbb1c3448729f4a578af4a29f25"></script>
        </div>
                      
      

      <div class="column-left">
        <!-- Latest episodes -->



         

        <section class="tray episode">
            <div class="tray-title">
              <a href="tap-moi-nhat.php">Phim mới <i class="icon icon-right"></i></a>
            </div>

            <?php foreach ($films as $value): ?>
            <div class="tray-content index">
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
            </div>
              <?php endforeach ?>
        </section>


        
        <!-- END latest episodes -->

        
                          
        <section class="tray">
            <div class="tray-title">
              <a href="video-2.php">Tập mới <i class="icon icon-right"></i></a>
            </div>
            <div class="tray-content">

              <?php foreach ($films as $value) : ?>
                <div class="video-item">
                    <a href="info.php?id=<?=$value['id']?>">
                      <img class="video-item-thumbnail" src="./assets/thumbnails/<?php echo $value['thumbnail'] ?>" >
                        <div class="video-item-title"><?php echo $value['name'] ?></div>
                        <div class="video-item-duration"><?php echo $value['name'] ?></div>
                        <div class="video-item-play-button">
                          <i class="icon-play"></i>
                        </div>
                    </a>
                    <div class="video-item-views">2 ngày trước - 724 lượt xem</div>
                </div>
              <?php endforeach?>
            </div>
        </section>

        

        <!-- Picked films -->
        

        

        
        <!-- END ranking films -->

        
        <section class="tray all">
            <div class="tray-title">
              <a href="anime.php">TẤT CẢ ANIME<i class="icon icon-right"></i></a>
            </div>
            <?php foreach ($films as $value) : ?>
            <div class="tray-content">
                <div class="tray-item">
                  <a href="info.php?id=<?=$value['id']?>">
                      <img class="tray-item-thumbnail" src="./assets/thumbnails/<?php echo $value['thumbnail'] ?>" alt="">
                      <div class="tray-item-description">
                        <div class="tray-item-title"><?php echo $value['name'] ?></div>
                          <div class="tray-item-meta-info">
                              <div class="tray-film-views"><?php echo $value['views'] ?> lượt xem</div>
                              <div class="tray-film-likes">1,807 thích</div>
                          </div>
                        </div>
                  </a>
                </div>                                       
            </div>
          <?php endforeach ?>
            
        </section>

        
      </div>

            <div class="column-right">

        

        <div class="video-hot"></div>

        <div class="anime-hot">
          <div class="tray-title">Anime HOT</div>
                    <div class="anime-hot-item">
            <a href="boruto-naruto-next-generations.php">
              <img class="anime-hot-thumbnail" src="assets/img/3.jpg">
              <div class="video-hot-title">Tom & jerry</div>
            </a>
            <span class="anime-hot-views">30,471,788 lượt xem</span>
            <span class="anime-hot-update">
                                131 / 999 tập
                          </span>
          </div>
                    <div class="anime-hot-item">
            <a href="one-piece.php">
              <img class="anime-hot-thumbnail" src="assets/img/7.png">
              <div class="anime-hot-title">Vua Hải Tặc</div>
            </a>
            <span class="anime-hot-views">146,046,125 lượt xem</span>
            <span class="anime-hot-update">
                                817 / 6969 tập
                          </span>
          </div>
                    <div class="anime-hot-item">
            <a href="pokemon.php">
              <img class="anime-hot-thumbnail" src="assets/img/1.jpg">
              <div class="anime-hot-title">Pokemon</div>
            </a>
            <span class="anime-hot-views">3,335,900 lượt xem</span>
            <span class="anime-hot-update">
                                847 / 6969 tập
                          </span>
          </div>
                    <div class="anime-hot-item">
            <a href="naruto-shippuuden.php">
              <img class="anime-hot-thumbnail" src="assets/img/1.jpg">
              <div class="video-hot-title">Tom & jerry</div>
            </a>
            <span class="anime-hot-views">60,276,036 lượt xem</span>
            <span class="anime-hot-update">
                                500 / 500 tập
                          </span>
          </div>
                    <div class="anime-hot-item">
            <a href="tham-tu-lung-danh-conan.php">
              <img class="anime-hot-thumbnail" src="assets/img/1.jpg">
              <div class="anime-hot-title">Thám Tử Lừng Danh Conan</div>
            </a>
            <span class="anime-hot-views">12,593,581 lượt xem</span>
            <span class="anime-hot-update">
                                956 / ??? tập
                          </span>
          </div>
                    <div class="anime-hot-item">
            <a href="doraemon.php">
              <img class="anime-hot-thumbnail" src="assets/img/1.jpg">
              <div class="anime-hot-title">Doraemon</div>
            </a>
            <span class="anime-hot-views">2,705,001 lượt xem</span>
            <span class="anime-hot-update">
                                505 / ??? tập
                          </span>
          </div>
                  </div>
      </div>
      
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
                                <div id="balloon">
                
                
                <script type="text/javascript">
                    var _avlVar = _avlVar || [];
                _avlVar.push(["844e3b44c6ca44368dd07b5871b5dea9","[yo_page_url]","[width]","[height]"]);
                </script>
                <script type="text/javascript" src="../ss.yomedia.vn/js/yomedia-sdk30f4.js?v=3" id="s-844e3b44c6ca44368dd07b5871b5dea9"></script>
            </div>
                        <script type="text/javascript" async defer src="../ss.yomedia.vn/js/ads.js"></script>
            
</body>

<!-- Mirrored from clipanime.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 07 Nov 2019 07:01:12 GMT -->
</html>