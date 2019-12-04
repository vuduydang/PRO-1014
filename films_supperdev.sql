-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 04, 2019 lúc 11:59 AM
-- Phiên bản máy phục vụ: 10.3.16-MariaDB
-- Phiên bản PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `films_supperdev`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `categories` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `categories`) VALUES
(1, 'Hành động'),
(2, 'Hài hước'),
(3, 'Kinh dị'),
(4, 'Viễn tưởng'),
(5, 'Tâm lý');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `films`
--

CREATE TABLE `films` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `series` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `categories` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `banner` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `views` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `films`
--

INSERT INTO `films` (`id`, `name`, `series`, `year`, `categories`, `author`, `banner`, `thumbnail`, `content`, `quantity`, `status`, `views`, `url`, `active`) VALUES
(12, 'Biệt đội titan', 'Phim hành động', 2010, 'Hành động', 'Greg Berlanti, Akiva Goldsman, Geoff Johns, Carol Banker', '4.jpg', 'tom&jerry.jpg', '<strong style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Biệt Đội Titan</strong><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">&nbsp;do lo sợ một thế lực ma quái đang cố gắng chiếm lấy bản thân mình, nữ phù thủy trẻ tuổi Raven (Teagan Croft) liền tìm gặp chàng thanh tra Dick Grayson/Robin (Brenton Thwaites) để cầu xin sự giúp đỡ. Sử dụng năng lực tâm linh, cô nàng đã thuyết phục được Grayson nhờ nói trúng kí ức đau buồn nhất đời anh: mất bố mẹ trong một vụ tai nạn nghề xiếc thương tâm. Ngoài hai nhân vật này, hai thành viên khác là Beast Boy (Ryan Potter), Star Fire “phiên bản gây tranh cãi” (Anna Diop) cùng cặp đôi phản anh hùng Hawk và Dove.</span><br>', 12, 'Hoàn thành', 0, 'Biệt-đội-titanhtml', 1),
(13, 'Giải mã bí ẩn ngân hà', 'Phim viễn tưởng', 2017, 'Viễn tưởng', 'James Gray', 'navbar-user-header.jpg', '3.jpg', '<strong style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Ad Astra</strong><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">&nbsp;là câu chuyện viễn tưởng về phi hành gia&nbsp;</span><strong style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Roy McBride</strong><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">&nbsp;(Brad Pitt) và hành trình đến rìa Hệ Mặt Trời để tìm người cha mất tích. Tại đây, Roy khám phá mối hiểm họa đe dọa sự tồn vong của nhân loại. Tác phẩm mới của đạo diễn James Gray thu hút nhờ cốt truyện hấp dẫn và sự tham gia của tài tử Brad Pitt trong vai chính. Bên cạnh đó, phim cũng hứa hẹn mang đến những trải nghiệm choáng ngợp về mặt thị giác - được phụ trách bởi Hoyte Van Hoytema, đạo diễn hình ảnh từng gây tiếng vang với Interstellar.</span><br>', 1, 'Hoàn thành', 0, 'Giải-mã-bí-ẩn-ngân-hàhtml', 1),
(14, 'Chú hề ma quái 2', 'Phim kinh dị', 2019, 'Kinh dị', 'Andy Muschietti', 'banner.png', '7.jpg', '<strong style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">It Chapter Two (Gã Hề Ma Quái 2)</strong><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">&nbsp;vẫn là câu chuyện về những cô cậu bé của nhóm The Losers Club, lúc này đã trưởng thành và đối mặt với vô số vấn đề trong cuộc sống. Chưa dừng lại ở đó, ám ảnh ma hề Pennywise cứ 27 năm lại xuất hiện một lần tại thị trấn Derry buộc 7 cô cậu bé ngày nào phải tiếp tục cuốn vào cuộc chạm trán tiếp theo giữa hai bên thiện và ác.</span><br style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\"><br style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\"><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Mặc dù có thể cả nhóm đã trưởng thành và khôn ngoan hơn, cuộc chiến của họ với Pennywise vẫn còn đó những hậu quả bất ngờ, thậm chí khiến một số thành viên phải trải qua đau đớn đến tột cùng.</span><br>', 1, 'Hoàn thành', 0, 'Chú-hề-ma-quái-html', 1),
(15, 'Những chú chim giận dữ 2', 'Phim hài hước', 2019, 'Hài hước', 'John Rice, Thurop Van Orman', 'banner.jpg', '7.png', '<span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Trong Angry Birds Movie 2,&nbsp;</span><strong style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Red</strong><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">&nbsp;(Jason Sudeikis) đã trở thành người hùng của đảo Chim và đang giao chiến cùng đảo Heo với sự giúp sức của người anh em&nbsp;</span><strong style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Chuck</strong><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">&nbsp;(Josh Gad) và&nbsp;</span><strong style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Bomb</strong><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">&nbsp;(Danny McBride). Khi cả bầy chim và heo cùng bị tấn công bởi loạt băng khổng lồ của Nữ hoàng băng giá&nbsp;</span><strong style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Zeta</strong><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">&nbsp;(Leslie Jones) từ đảo Đại Bàng, Red và&nbsp;</span><strong style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">King Leonard Mudbeard</strong><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">&nbsp;(Bill Hader) đã đồng ý cùng liên minh để chống lại kẻ thù chung, với sự trợ lực từ&nbsp;</span><strong style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Silver</strong><span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">&nbsp;(Rachel Bloom), một sinh viên kỹ thuật xuất sắc.</span><br style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">', 1, 'Hoàn thành', 0, 'Những-chú-chim-giận-dữ-html', 1),
(16, 'Bên em chọn đời', 'Phim tâm lý', 2017, 'Tâm lý', 'Andy Muschietti', 'banner.png', 'onion.gif', '<span style=\"color: rgb(187, 187, 187); font-family: arial; font-size: 13px; background-color: rgb(34, 34, 34);\">Forever My Girl kể về một anh chàng ngôi sao nhạc đồng quê trở về quê nhà tìm lại tình yêu của cuộc đời.</span><br>', 1, 'Hoàn thành', 0, 'Bên-em-chọn-đờihtml', 1),
(17, 'Pokemon', 'Phim hành động', 2019, 'Hành động, Viễn tưởng, Kinh dị', 'Greg Berlanti, Akiva Goldsman, Geoff Johns, Carol Banker', 'panda.gif', '10.jpg', 'ngjfkagjhfdsklgjkfldsghjfah', 1, 'Hoàn thành', 0, 'Pokemonhtml', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `follows`
--

CREATE TABLE `follows` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `film_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `historys`
--

CREATE TABLE `historys` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `part_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `parts`
--

CREATE TABLE `parts` (
  `id` int(11) NOT NULL,
  `film_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `player` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `film_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `status`, `name`) VALUES
(1, -1, 'đã khóa'),
(2, 0, 'thành viên'),
(3, 1, 'admin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `systems`
--

CREATE TABLE `systems` (
  `logo` varchar(255) NOT NULL,
  `id_player` varchar(300) NOT NULL,
  `message` text DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `fanpage` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `introduce` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `age` varchar(50) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `email`, `avatar`, `age`, `role_id`) VALUES
(1, 'nguyenvana', '123456', 'nguyễn văn a', 'haivdph@gmail.com', '', '19', 0),
(2, 'nguyenvanb', '123123', 'nguyễn văn b', 'bbb@gmail.com', '', '19', 0),
(3, 'admin', '$2y$10$QYr7SvXdOguZz3dlnPxO.u0Y0Ffj6nNErwm168unZkzPoWRxR7..e', 'admin', 'haivdph07968@gmail.com', '', '', 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `years`
--

CREATE TABLE `years` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `historys`
--
ALTER TABLE `historys`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `parts`
--
ALTER TABLE `parts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `years`
--
ALTER TABLE `years`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `films`
--
ALTER TABLE `films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `follows`
--
ALTER TABLE `follows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `historys`
--
ALTER TABLE `historys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `parts`
--
ALTER TABLE `parts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `years`
--
ALTER TABLE `years`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
