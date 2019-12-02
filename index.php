<?php 
    require_once './commons/constants.php';
    require_once './commons/db.php';
    // require_once './commons/helpers.php';
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
    

    
       <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    
      <link rel="stylesheet" href="css/home9039.css?id=0cadef886044cb02b356">
  
      <link rel="stylesheet" href="css/style.css">
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
              <a href="tap-moi-nhat.php">Tập Mới Nhất <i class="icon icon-right"></i></a>
            </div>

            <?php foreach ($films as $films): ?>
            <div class="tray-content index">
                  <div class="tray-item">
                        <a href="info.php?id=<?=$films['id']?>">
                            <img class="tray-item-thumbnail" src="<?php echo $films['thumbnail'] ?>" >
                            <div class="tray-item-description">
                                <div class="tray-item-title"><?php echo $films['name'] ?></div>
                                <div class="tray-item-meta-info">
                                    <span class="tray-episode-name"><?php echo $films['series'] ?></span>
                                    <span class="tray-episode-views"><?php echo $films['views'] ?>lượt xem</span>
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
              <a href="video-2.php">Video Mới <i class="icon icon-right"></i></a>
            </div>
            <div class="tray-content">
              
                                  <div class="video-item">
                    <a href="info.php?id=<?=$films['id']?>">
                      <img class="video-item-thumbnail" src="<?php echo $films['thumbnail'] ?>" >
                        <div class="video-item-title">a</div>
                        <div class="video-item-duration"></div>
                        <div class="video-item-play-button">
                          <i class="icon-play"></i>
                        </div>
                    </a>
                    <div class="video-item-views">2 ngày trước - 724 lượt xem</div>
                  </div>
                                  
                            </div>
        </section>

        

        <!-- Picked films -->
        

        

        
        <!-- END ranking films -->

        
        <section class="tray all">
            <div class="tray-title">
              <a href="anime.php">Anime Mới <i class="icon icon-right"></i></a>
            </div>
            <div class="tray-content">
                                     <div class="tray-item">
    <a href="dr-stone.php">
        <img class="tray-item-thumbnail" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://i.imacdn.com/vg/2019/10/13/a8648186489cdaca_7e9643ea246c8fef_3823115709731078185710.jpg" alt="Dr. Stone">
        <div class="tray-item-description">
            <div class="tray-item-title">Dr. Stone</div>
            <div class="tray-item-meta-info">
                <div class="tray-film-views">1,264,486 lượt xem</div>
                <div class="tray-film-likes">1,807 thích</div>
            </div>
        </div>
        <div class="tray-film-genres">
                        <span>Khoa Học Viễn Tưởng</span>,&nbsp;                         <span>Phiêu Lưu</span>                    </div>
        <div class="tray-film-update">
                    3 / ??? tập
                </div>
        

        
            </a>
</div>                                     <div class="tray-item">
    <a href="to-muon-an-tuy-cua-cau.php">
        <img class="tray-item-thumbnail" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://i.imacdn.com/vg/2019/04/28/0afe3dc9c1f9f421_f4d259d1716295c5_3326015564306791129205.jpg" alt="Tớ Muốn Ăn Tụy Của Cậu">
        <div class="tray-item-description">
            <div class="tray-item-title">Tớ Muốn Ăn Tụy Của Cậu</div>
            <div class="tray-item-meta-info">
                <div class="tray-film-views">98,117 lượt xem</div>
                <div class="tray-film-likes">777 thích</div>
            </div>
        </div>
        <div class="tray-film-genres">
                        <span>Lãng Mạn</span>,&nbsp;                         <span>Trường Học</span>,&nbsp;                         <span>Đời Thường</span>                    </div>
        <div class="tray-film-update">
                    109 phút
                </div>
        

        
            </a>
</div>                                     <div class="tray-item">
    <a href="fatestay-night-movie-heavens-feel-ii-lost-butterfly.php">
        <img class="tray-item-thumbnail" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://i.imacdn.com/vg/2019/04/27/9ed39cb57d0bf03a_bcc8887ecbc0c44a_34503155635084639674.jpg" alt="Fate/stay night Movie: Heaven&#039;s Feel - II. Lost Butterfly">
        <div class="tray-item-description">
            <div class="tray-item-title">Fate/stay night Movie: Heaven&#039;s Feel - II. Lost Butterfly</div>
            <div class="tray-item-meta-info">
                <div class="tray-film-views">78,137 lượt xem</div>
                <div class="tray-film-likes">245 thích</div>
            </div>
        </div>
        <div class="tray-film-genres">
                        <span>Hành Động</span>,&nbsp;                         <span>Khoa Học Viễn Tưởng</span>,&nbsp;                         <span>Siêu Nhiên</span>                    </div>
        <div class="tray-film-update">
                    117 phút
                </div>
        

        
            </a>
</div>                                     <div class="tray-item">
    <a href="fatekaleid-liner-prismaillya-2wei-herz.php">
        <img class="tray-item-thumbnail" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://i.imacdn.com/vg/2019/02/27/fc247fdf8d8dd575_93943850d263ba75_19377515512691796118684.jpg" alt="Fate/kaleid liner Prisma☆Illya 2wei Herz!">
        <div class="tray-item-description">
            <div class="tray-item-title">Fate/kaleid liner Prisma☆Illya 2wei Herz!</div>
            <div class="tray-item-meta-info">
                <div class="tray-film-views">11,826 lượt xem</div>
                <div class="tray-film-likes">67 thích</div>
            </div>
        </div>
        <div class="tray-film-genres">
                        <span>Hành Động</span>,&nbsp;                         <span>Hài Hước</span>,&nbsp;                         <span>Siêu Nhiên</span>,&nbsp;                         <span>Đời Thường</span>                    </div>
        <div class="tray-film-update">
                    10 / 10 tập
                </div>
        

        
            </a>
</div>                                     <div class="tray-item">
    <a href="tu-chien-thanh-da-bang.php">
        <img class="tray-item-thumbnail" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://i.imacdn.com/vg/2019/02/08/5bb3388a8e6a18b7_45de0b55c99d0d84_46554154961780561.jpg" alt="Tử Chiến Thành Đa Bang">
        <div class="tray-item-description">
            <div class="tray-item-title">Tử Chiến Thành Đa Bang</div>
            <div class="tray-item-meta-info">
                <div class="tray-film-views">21,838 lượt xem</div>
                <div class="tray-film-likes">102 thích</div>
            </div>
        </div>
        <div class="tray-film-genres">
                        <span>Hành Động</span>,&nbsp;                         <span>Võ Thuật</span>                    </div>
        <div class="tray-film-update">
                    3 / 3 tập
                </div>
        

        
            </a>
</div>                                     <div class="tray-item">
    <a href="ly-thuong-kiet.php">
        <img class="tray-item-thumbnail" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://i.imacdn.com/vg/2019/02/08/3355857aa672d4ef_22e6152186b94ac9_36564154961644351.jpg" alt="Lý Thường Kiệt">
        <div class="tray-item-description">
            <div class="tray-item-title">Lý Thường Kiệt</div>
            <div class="tray-item-meta-info">
                <div class="tray-film-views">68,843 lượt xem</div>
                <div class="tray-film-likes">271 thích</div>
            </div>
        </div>
        <div class="tray-film-genres">
                        <span>Hành Động</span>,&nbsp;                         <span>Võ Thuật</span>                    </div>
        <div class="tray-film-update">
                    3 / 3 tập
                </div>
        

        
            </a>
</div>                            </div>
            
        </section>

        
      </div>

            <div class="column-right">

        

        <div class="video-hot">
          <div class="tray-title">Video HOT</div>
                    <div class="video-hot-item">
            <a href="video/176993.php">
              <img class="video-hot-thumbnail" src="assets/img/1.jpg">
              <div class="video-hot-title">Tom & jerry</div>
            </a>
          </div>
                    <div class="video-hot-item">
            <a href="video/176994.php">
              <img class="video-hot-thumbnail" src="assets/img/2.jpg">
              <div class="video-hot-title">Tom & jerry</div>
            </a>
          </div>
                    <div class="video-hot-item">
            <a href="video/176985.php">
              <img class="video-hot-thumbnail" src="assets/img/3.jpg">
              <div class="video-hot-title">Tom & jerry</div>
            </a>
          </div>
                    <div class="video-hot-item">
            <a href="video/176979.php">
              <img class="video-hot-thumbnail" src="assets/img/4.jpg">
              <div class="video-hot-title">Tom & jerry</div>
            </a>
          </div>
                    <div class="video-hot-item">
            <a href="video/176962.php">
              <img class="video-hot-thumbnail" src="assets/img/5.jpg">
              <div class="video-hot-title">Tom & jerry</div>
            </a>
          </div>
                    <div class="video-hot-item">
            <a href="video/176969.php">
              <img class="video-hot-thumbnail" src="assets/img/6.jpg">
              <div class="video-hot-title">Tom & jerry</div>
            </a>
          </div>
                  </div>

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

    
    <script type="text/javascript" src="js/bhome3422.js?id=f33d477c99c33e5d550a"></script>
              

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