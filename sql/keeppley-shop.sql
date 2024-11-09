-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 09, 2024 lúc 08:29 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `keeppley-shop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `adminID` int(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `loginpassword` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `birthday` date DEFAULT NULL,
  `bio` text NOT NULL,
  `country` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`adminID`, `userName`, `email`, `loginpassword`, `image`, `birthday`, `bio`, `country`, `phone`) VALUES
(1, 'admin', 'admin@gmail.com', '1234', 'admin.png', '2024-08-10', 'Ta là Admin đây', 'Việt Nam', '0909141761'),
(2, 'admin10', 'admin@gmail.com', 'huudat', '', NULL, '', '', ''),
(3, 'admin100', 'admin@gmail.com', 'huudat', '', NULL, '', '', ''),
(4, 'Trần Hữu Đạt', 'huudat.lego@gmail.com', 'huudat', '', NULL, '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name_en` varchar(255) NOT NULL,
  `name_vn` varchar(255) NOT NULL,
  `images` text NOT NULL,
  `provider` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name_en`, `name_vn`, `images`, `provider`) VALUES
(2, 'Doraemon', 'Doraemon', 'Doraemon0.jpg,Doraemon1.jpg', 'Keeppley'),
(3, 'Sario', 'Sario', 'Sario0.jpg,Sario1.jpg', 'Keeppley'),
(5, 'Sumikko', 'Sumikko', 'Sumikko0.jpg,Sumikko1.jpg', 'Qman'),
(6, 'Build & Fun', 'Build & Fun', 'Build&Fun0.jpg,Build&Fun1.jpg', 'Qman'),
(4, 'Conan', 'Conan', 'Conan0.jpg,Conan1.jpg', 'Keeppley');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `p_id` int(11) NOT NULL,
  `p_number` varchar(255) NOT NULL,
  `p_name_en` varchar(255) NOT NULL,
  `p_name_vn` varchar(255) NOT NULL,
  `p_image` varchar(255) NOT NULL,
  `p_price_en` varchar(255) NOT NULL,
  `p_price_vn` varchar(255) NOT NULL,
  `p_category` varchar(225) NOT NULL,
  `p_tutorial` varchar(100) NOT NULL,
  `p_description_en` text NOT NULL,
  `p_description_vn` text NOT NULL,
  `p_sold` int(10) NOT NULL,
  `p_age` varchar(255) NOT NULL,
  `p_stock_status` enum('in_stock','out_of_stock') NOT NULL DEFAULT 'in_stock',
  `p_product_status` enum('bestseller','top_revenue','normal') NOT NULL DEFAULT 'normal'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`p_id`, `p_number`, `p_name_en`, `p_name_vn`, `p_image`, `p_price_en`, `p_price_vn`, `p_category`, `p_tutorial`, `p_description_en`, `p_description_vn`, `p_sold`, `p_age`, `p_stock_status`, `p_product_status`) VALUES
(3, 'K20401', 'Time Machine', 'Cỗ Máy Thời Gian', 'TimeMachine.jpg', '9.99', '0', 'Doraemon', 'K20401.pdf', '', '', 0, '6-12', 'in_stock', 'bestseller'),
(4, 'K20801', 'Hello Kitty', 'Hello Kitty', 'HelloKitty.jpg', '19.99', '0', 'Sario', 'K20801.pdf', '', '', 0, '6-12', 'in_stock', 'bestseller'),
(5, 'K20802', 'Melody', 'Melody', 'Melody.jpg,,', '9.99', '0', 'Sario', 'K20802.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(6, 'K20804', 'Purin', 'Purin', 'Purin.jpg,,', '9.99', '0', 'Sario', 'K20804.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(7, 'K20803', 'Cinnamon', 'Cinnamon', 'Cinnamon.jpg,,', '9.99', '0', 'Sario', 'K20803.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(8, 'K20805', 'Hello Kitty Mini Car', 'Hello Kitty Mini Car', 'HelloKittyMiniCar.jpg,,', '19.99', '0', 'Sario', 'K20805.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(9, 'K20806', 'Hello Kitty Mini Bus', 'Hello Kitty Mini Bus', 'HelloKittyMiniBus.jpg,,', '19.99', '0', 'Sario', 'K20806.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(10, 'K20402', 'Nobita Room', 'Nobita Room', 'NobitaRoom.jpg,,', '15.99', '0', 'Doraemon', 'K20402.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(11, 'K20406', 'Doraemon-Beetles', 'Doraemon-Beetles', 'Doraemon-Beetles.jpg,,', '11.99', '0', 'Doraemon', 'K20406.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(12, 'K20407', 'Doraemon-Bus', 'Doraemon-Bus', 'Doraemon-Bus.jpg,,', '11.99', '0', 'Doraemon', 'K20407.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(13, 'K20408', 'Doraemon-TV', 'Doraemon-TV', 'Doraemon-TV.jpg,,', '13.99', '0', 'Doraemon', 'K20408.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(14, 'K20409', 'Doraemon-Cement Pipe Space', 'Doraemon-Cement Pipe Space', 'Doraemon-CementPipeSpace.jpg,,', '9.99', '0', 'Doraemon', 'K20409.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(15, 'K20701', 'Conan Edogawa', 'Conan Edogawa', 'Conan.jpg,,', '9.99', '0', 'Conan', 'K20701.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(16, 'K20702', 'Ran Mori', 'Ran Mori', 'Ran Mori.jpg,,', '9.99', '0', 'Conan', 'K20702.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(17, 'K20703', 'Kid', 'Kid', 'Kid.jpg,,', '9.99', '0', 'Conan', 'K20703.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(18, 'K20704', 'Ai Haibara', 'Ai Haibara', 'Ai Haibara.jpg,,', '9.99', '0', 'Conan', 'K20704.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(19, '35011', 'Sweetie Story', 'Sweetie Story', 'Sweet.jpg,,', '9.99', '0', 'Build & Fun', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(21, '35012', 'Burger', 'Burger', 'Burger.jpg,,', '9.99', '0', 'Build & Fun', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(22, '35014', 'Qtea-PDQ', 'Qtea-PDQ', 'Qtea.jpg,,', '9.99', '0', 'Build & Fun', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(23, '35015', 'Qman Mart-PDQ', 'Qman Mart-PDQ', 'Qmart.jpg,,', '9.99', '0', 'Build & Fun', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(24, '77011', 'Comfortable Corner', 'Comfortable Corner', 'Comforable Corner.jpg,,', '9.99', '0', 'Sumikko', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(20, '77012', 'Relax Coffee Time', 'Relax Coffee Time', 'Coffee.jpg,,', '9.99', '0', 'Sumikko', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(25, '77013', 'Delicious Bento', 'Delicious Bento', 'Bento.jpg,,', '9.99', '0', 'Sumikko', '', '', '', 0, '12+', 'in_stock', 'bestseller')

;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `userID` int(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `loginpassword` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `birthday` date DEFAULT NULL,
  `bio` text NOT NULL,
  `country` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`userID`, `userName`, `email`, `loginpassword`, `image`, `birthday`, `bio`, `country`, `phone`) VALUES
(1, 'admin', 'admin123@gmail.com', '1230', '', NULL, '', '', '0'),
(2, 'khanhne', 'Khanhne@gmail.com', '1234', 'ThuyKhanh1.jpg', '2024-08-01', 'À Nhon, Mình là nhóm trưởng đây', 'Việt Nam', '0902313725'),
(14, 'TranHuuDat', 'huudat.lego@gmail.com', 'huudat', 'ThuyLinh.jpg', '2024-08-05', 'HELLO', 'Việt Nam', '0902313725'),
(15, 'TranHuuDat123', 'huudat.mini', 'huudat', '', NULL, '', '', '0'),
(16, 'DuongThiThuyLinh', 'DuongThiThuyLinh', '1234', '', NULL, '', '', '0'),
(17, 'NguyenThuyKhanh', 'NguyenThuyKhanh', '1234', '', NULL, '', '', '0'),
(19, 'TestA', 'TestA', '1234', '', NULL, '', '', '0'),
(21, 'DaoMinhPhuc', 'DaoMinhPhuc@gmail.com', '1234', '', NULL, '', '', '0'),
(23, 'huudat', 'huudat', 'huudat', '', NULL, '', '', '0'),
(24, 'mini', 'mini', 'mini', '', NULL, '', '', '0'),
(25, 'MIni World', 'TranHuuDat@gmail.com', '123456', '', NULL, '', '', '0'),
(26, 'SaoTinhNghich', 'my.love.lego.city@gmail.com', 'huudat', '', NULL, '', '', ''),
(27, 'Melody', 'Melody@gmail.com', 'huudat', 'Mymelody.webp', '2024-08-01', 'Ta là Melody đây', 'Việt Nam', '0909141761'),
(28, 'Kuromi', 'Kuromi@gmail.com', 'huudat', '', NULL, '', '', ''),
(29, 'Hello Kitty', 'HelloKitty@gmail.com', 'huudat', 'Mymelody.webp', '2024-08-03', 'Hello Kitty', 'Việt Nam', '0909141761');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminID`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`p_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `adminID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
