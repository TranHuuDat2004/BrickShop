-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 10, 2024 lúc 04:23 PM
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
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `p_price` double NOT NULL,
  `p_image` varchar(255) NOT NULL,
  `p_type` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `p_id`, `p_name`, `p_price`, `p_image`, `p_type`, `quantity`) VALUES
(27, 39, 4, 'Hello Kitty', 0, 'HelloKitty.jpg', 'Hello Kitty', 4),
(31, 39, 1, 'Lion Triple Pack', 7.99, '70229.jpg', 'Lion Triple Pack', 3),
(32, 39, 12, 'Doraemon-Bus', 9.59, 'Doraemon-Bus.jpg', 'Doraemon-Bus', 7),
(35, 46, 8, 'Hello Kitty Mini Car', 13.99, 'HelloKittyMiniCar.jpg', 'Hello Kitty Mini Car', 100),
(36, 46, 12, 'Doraemon-Bus', 9.59, 'Doraemon-Bus.jpg', 'Doraemon-Bus', 101),
(64, -1, 33, 'Ice Bear Tribe', 7.99, '70230.jpg', 'Ice Bear Tribe', 1);

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
(1, 'Build & Fun', 'Build & Fun', 'Build&Fun0.jpg,Build&Fun1.jpg', 'Qman'),
(2, 'Doraemon', 'Doraemon', 'Doraemon0.jpg,Doraemon1.jpg', 'Keeppley'),
(3, 'Sario', 'Sario', 'Sario0.jpg,Sario1.jpg', 'Keeppley'),
(4, 'Conan', 'Conan', 'Conan0.jpg,Conan1.jpg', 'Keeppley'),
(5, 'Sumikko', 'Sumikko', 'Sumikko0.jpg,Sumikko1.jpg', 'Qman'),
(6, 'Lego Nexo Knight', 'Lego Nexo Knight', 'legonexoknight0.png,legonexoknight1.jpg', 'LEGO'),
(7, 'Lego Ninjago', 'Lego Ninjago', 'legoninjago0.png,legoninjago1.jpg', 'LEGO'),
(8, 'Lego Chima', 'Lego Chima', 'legochima0.png,legochima1.jpg', 'LEGO'),
(9, 'Lego City', 'Lego City', 'legocity0.png,legocity1.jpg', 'LEGO');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `userid` int(50) NOT NULL,
  `rank` int(11) DEFAULT NULL CHECK (`rank` between 1 and 5),
  `detail` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`id`, `productid`, `userid`, `rank`, `detail`, `created_at`) VALUES
(1, 21, 52, 5, 'sdasd', '2024-12-07 16:46:28'),
(2, 24, 52, 5, 'ddd', '2024-12-08 09:56:30'),
(3, 4, 31, 4, 'Đẹp', '2024-12-09 03:55:03'),
(4, 18, 31, 5, 'Good', '2024-12-10 15:08:44');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `subject`, `message`) VALUES
(1, 'huudatlego', 'huudat.lego@gmail.com', '0909141', 'Thêm nhiều chủ đề lego nữa đi', 'Thêm nhiều chủ đề lego nữa đi'),
(2, 'huyle', 'huyle@gmail.com', '0909141', 'Lego quá đẹp', 'Lego quá đẹp');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `coupon`
--

CREATE TABLE `coupon` (
  `id` int(11) NOT NULL,
  `nameCoupon` varchar(255) NOT NULL,
  `discount` int(11) NOT NULL,
  `code` varchar(50) NOT NULL,
  `condition` text DEFAULT NULL,
  `validityPeriod` date NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `minimum` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `coupon`
--

INSERT INTO `coupon` (`id`, `nameCoupon`, `discount`, `code`, `condition`, `validityPeriod`, `quantity`, `minimum`) VALUES
(1, 'NewUser', 22, 'NewUser', 'hidden', '2024-12-13', 0, 200),
(4, 'Weekend', 10, 'Weekend', 'active', '2024-12-19', 2, 50),
(5, 'Mini', 15, 'Hello', 'active', '2025-01-02', 3, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `group`
--

CREATE TABLE `group` (
  `group_id` int(11) NOT NULL,
  `group_name` varchar(255) NOT NULL,
  `group_desc` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `group`
--

INSERT INTO `group` (`group_id`, `group_name`, `group_desc`) VALUES
(1, 'Character Sario', NULL),
(2, 'Battle Sult', NULL),
(3, 'Character Detective Conan', NULL),
(4, 'Doraemon', NULL),
(5, 'Build & Fun', NULL),
(6, 'Sumikko', NULL),
(7, 'Lego Chima', NULL),
(8, 'Lego Ninjago', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `group_product`
--

CREATE TABLE `group_product` (
  `group_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `group_product`
--

INSERT INTO `group_product` (`group_id`, `product_id`) VALUES
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(2, 26),
(2, 27),
(2, 28),
(2, 29),
(2, 30),
(3, 15),
(3, 16),
(3, 17),
(3, 18),
(4, 10),
(4, 11),
(4, 12),
(4, 13),
(4, 14),
(4, 34),
(5, 19),
(5, 21),
(5, 22),
(5, 23),
(6, 20),
(6, 24),
(6, 25),
(7, 33),
(8, 2),
(8, 3),
(8, 31);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `o_id` varchar(16) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_date` datetime DEFAULT current_timestamp(),
  `fullname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `delivery` varchar(255) NOT NULL,
  `status` tinyint(4) DEFAULT 0,
  `total` decimal(10,2) NOT NULL,
  `phone` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `order`
--

INSERT INTO `order` (`id`, `o_id`, `user_id`, `order_date`, `fullname`, `address`, `delivery`, `status`, `total`, `phone`) VALUES
(18, '202412100001', 31, '2024-12-10 21:59:19', 'Trần Hữu Đạt', '19 Nguyễn Hữu Thọ Quận 7', 'fast', 0, 12.79, '0909000'),
(19, '202412100002', 31, '2024-12-10 22:08:15', 'Trần Hữu Đạt', '19 Nguyễn Hữu Thọ Quận 7', 'fast', 3, 5.60, '0909000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int(11) NOT NULL,
  `o_id` varchar(16) NOT NULL,
  `user_id` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `p_image` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `order_detail`
--

INSERT INTO `order_detail` (`id`, `o_id`, `user_id`, `p_id`, `p_name`, `p_image`, `price`, `quantity`) VALUES
(37, '202412100001', 31, 10, 'Nobita Room', 'NobitaRoom.jpg', 12.79, 1),
(38, '202412100002', 31, 13, 'Doraemon-TV', 'Doraemon-TV.jpg', 11.19, 1);

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
  `p_price_en` double NOT NULL,
  `p_price_vn` double NOT NULL,
  `p_discount` int(3) NOT NULL,
  `p_category` varchar(225) NOT NULL,
  `p_tutorial` varchar(100) NOT NULL,
  `p_description_en` text NOT NULL,
  `p_description_vn` text NOT NULL,
  `p_sold` int(10) NOT NULL,
  `p_age` varchar(255) NOT NULL,
  `p_stock_status` enum('in_stock','out_of_stock') NOT NULL DEFAULT 'in_stock',
  `p_product_status` enum('bestseller','top_revenue','normal','new') NOT NULL DEFAULT 'new'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`p_id`, `p_number`, `p_name_en`, `p_name_vn`, `p_image`, `p_price_en`, `p_price_vn`, `p_discount`, `p_category`, `p_tutorial`, `p_description_en`, `p_description_vn`, `p_sold`, `p_age`, `p_stock_status`, `p_product_status`) VALUES
(2, '71806', 'Cole Elemental Earth Mech', '', '71806.webp', 9.99, 0, 80, 'Lego Ninjago', '', '', '', 0, '12+', 'in_stock', 'new'),
(3, '71807', 'Sora Technic Mech', '', '71807.webp', 9.99, 0, 20, 'Lego Ninjago', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(4, 'K20801', 'Hello Kitty', 'Hello Kitty', 'HelloKitty.jpg', 9.99, 0, 100, 'Sario', 'K20801.pdf', '', '', 0, '6-12', 'in_stock', 'new'),
(5, 'K20802', 'Melody', 'Melody', 'Melody.jpg,,', 9.99, 0, 20, 'Sario', 'K20802.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(6, 'K20804', 'Purin', 'Purin', 'Purin.jpg,,', 9.99, 0, 20, 'Sario', 'K20804.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(7, 'K20803', 'Cinnamon', 'Cinnamon', 'Cinnamon.jpg,,', 9.99, 0, 20, 'Sario', 'K20803.pdf', '', '', 0, '12+', 'in_stock', 'new'),
(8, 'K20805', 'Hello Kitty Mini Car', 'Hello Kitty Mini Car', 'HelloKittyMiniCar.jpg,,', 19.99, 0, 30, 'Sario', 'K20805.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(9, 'K20806', 'Hello Kitty Mini Bus', 'Hello Kitty Mini Bus', 'HelloKittyMiniBus.jpg,,', 19.99, 0, 20, 'Sario', 'K20806.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(10, 'K20402', 'Nobita Room', 'Nobita Room', 'NobitaRoom.jpg,,', 15.99, 0, 20, 'Doraemon', 'K20402.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(11, 'K20406', 'Doraemon-Beetles', 'Doraemon-Beetles', 'Doraemon-Beetles.jpg,,', 11.99, 0, 20, 'Doraemon', 'K20406.pdf', '', '', 0, '12+', 'in_stock', 'new'),
(12, 'K20407', 'Doraemon-Bus', 'Doraemon-Bus', 'Doraemon-Bus.jpg,,', 11.99, 0, 20, 'Doraemon', 'K20407.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(13, 'K20408', 'Doraemon-TV', 'Doraemon-TV', 'Doraemon-TV.jpg,,', 13.99, 0, 20, 'Doraemon', 'K20408.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(14, 'K20409', 'Doraemon-Cement Pipe Space', 'Doraemon-Cement Pipe Space', 'Doraemon-CementPipeSpace.jpg,,', 9.99, 0, 20, 'Doraemon', 'K20409.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(15, 'K20701', 'Conan Edogawa', 'Conan Edogawa', 'Conan.jpg,,', 9.99, 0, 20, 'Conan', 'K20701.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(16, 'K20702', 'Ran Mori', 'Ran Mori', 'Ran Mori.jpg,,', 9.99, 0, 20, 'Conan', 'K20702.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(17, 'K20703', 'Kid', 'Kid', 'Kid.jpg,,', 9.99, 0, 20, 'Conan', 'K20703.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(18, 'K20704', 'Ai Haibara', 'Ai Haibara', 'Ai Haibara.jpg,,', 9.99, 0, 20, 'Conan', 'K20704.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(19, '35011', 'Sweetie Story', 'Sweetie Story', 'Sweet.jpg,,', 9.99, 0, 20, 'Build & Fun', '', '', '', 0, '12+', 'in_stock', 'new'),
(20, '77012', 'Relax Coffee Time', 'Relax Coffee Time', 'Coffee.jpg,,', 9.99, 0, 20, 'Sumikko', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(21, '35012', 'Burger', 'Burger', 'Burger.jpg,,', 9.99, 0, 20, 'Build & Fun', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(22, '35014', 'Qtea-PDQ', 'Qtea-PDQ', 'Qtea.jpg,,', 9.99, 0, 20, 'Build & Fun', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(23, '35015', 'Qman Mart-PDQ', 'Qman Mart-PDQ', 'Qmart.jpg,,', 9.99, 0, 20, 'Build & Fun', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(24, '77011', 'Comfortable Corner', 'Comfortable Corner', 'Comforable Corner.jpg,,', 9.99, 0, 20, 'Sumikko', '', '', '', 0, '12+', 'in_stock', 'new'),
(25, '77013', 'Delicious Bento', 'Delicious Bento', 'Bento.jpg,,', 9.99, 0, 20, 'Sumikko', '', '', '', 0, '12+', 'in_stock', 'bestseller'),
(26, '70365', 'Battle Sult Axl', 'Lego Axl', 'Axl.jpg,,', 9.99, 0, 20, 'Lego Nexo Knight', '70365.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(27, '70362', 'Battle Sult Clay', 'Battle Sult Clay', 'Clay.jpg,,', 9.99, 0, 20, 'Lego Nexo Knight', '70362.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(28, '70363', 'Battle Sult Macy', 'Battle Sult Macy', 'Macy.jpg,,', 9.99, 0, 20, 'Lego Nexo Knight', '70363.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(29, '70364', 'Battle Sult Arron', 'Battle Sult Arron', 'Aaron.jpg,,', 9.99, 0, 20, 'Lego Nexo Knight', '70364.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(30, '70366', 'Battle Sult Lance', 'Battle Sult Lance', 'Lance.jpg,,', 9.99, 0, 20, 'Lego Nexo Knight', '70366.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(31, '71781', 'Lloyd Mech Battle', 'Lloyd Mech Battle', '71781.jpg,,', 9.99, 0, 20, 'Lego Ninjago', '71781.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(32, '60312', 'Police Car', 'Police Car', '60312.jpg,,', 9.99, 0, 20, 'Lego City', '60312.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(33, '70230', 'Ice Bear Tribe', 'Ice Bear Tribe', '70230.jpg,,', 9.99, 0, 20, 'Lego Chima', '70230.pdf', '', '', 0, '12+', 'in_stock', 'bestseller'),
(34, 'K20401', 'Time Machine', 'Cỗ Máy Thời Gian', 'TimeMachine.jpg', 9.99, 0, 20, 'Doraemon', 'K20401.pdf', '', '', 0, '6-12', 'in_stock', 'bestseller');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `userID` int(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `loginpassword` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `address` text DEFAULT NULL,
  `bio` text NOT NULL,
  `country` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`userID`, `userName`, `fullname`, `email`, `loginpassword`, `image`, `address`, `bio`, `country`, `phone`) VALUES
(31, 'TranHuuDat', '', 'huudat.peashooer@gmail.com', '$2b$10$6SOXgYtqXz9ysKzA.f1vvuX7ZHU/oQm7CfdYjCiOhnR9wR.8qFoEC', 'Cole.jpg', '19 Nguyễn Hữu Thọ Quận 7', 'Hi', 'Việt Nam', '0909000'),
(32, 'huyle', '', 'huyle@gmail.com', '$2b$10$7cRJjtF2d7XyBPNyqVWcVOWZxULd1oYnfdOct391qn8LDGcatqRT2', 'Jay.jpg', '2024-11-11', 'Hi', 'Việt Nam', '0909'),
(33, 'nodepay', 'Trần Hữu Đạt', '', 'huudat', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(34, 'phuc.tv', 'Trần Hữu Đạt', '', '$2b$10$AcxrzMSB3qscypL/OKON7ukr7wgkxP06N1rAGgpYquC2hV1wzq5Za', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(35, 'phuc.tv', 'Trần Hữu Đạt', '', '$2b$10$1Mz9jJvA6ICa4h4DfWmFju0qTpu.1p6esGaK2Ieet3sK/pKcJP8LC', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(36, 'phuc.tv', 'Trần Hữu Đạt', '', '$2b$10$MI3tZ1z2NTTRItlskw0yeupz3p1QjKLHxCUoNOUoqwb8mNRG4LMpC', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(37, 'phuc.tv', 'Trần Hữu Đạt', '', '$2b$10$heSz8No2hh8F.5Gtr3b1uORhVGH9F8rj7psdTLHm/PsF9CR.pGS/.', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(38, 'phuc.tv', 'Trần Hữu Đạt', '', '$2b$10$nboPcZZzK1/5PK09lgPnoulRr5eY2KWvVovAs2I0LkHiMKvpKlX4q', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(39, 'miniword', 'Trần Hữu Đạt', '', '$2b$10$gL9O/oRJsNqWnqPahH.umuODYw.78sFrIa/xFweFBhOYYMv.NsIOC', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(40, 'miniword', 'Trần Hữu Đạt', '', '$2b$10$0XNSiksODHIoqHR/s6mV4eMh6VKEMS0q2mr4PjuZvjF5p/6sEdVVG', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(41, 'nodepay', 'Trần Hữu Đạt', '', '$2b$10$UffVZEhRN4vDnl.fn2hvZ.0tbyV7evKKhkdKKO27REYc/Hf1rgd56', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(42, 'Tranhuudat987', 'Trần Hữu Đạt', '', '$2b$10$bpa1gTu.wMVGRnqM7Du8I.IdhZY0je02XJ/keC8Oyjvoe0x1KFQj2', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(43, 'Tranhuudat', 'Trần Hữu Đạt', '', '$2b$10$X9zacewlLol4Ql5hlfmtduvHL03H/MQwMQOc7EP7O9K9DU7JyJHEa', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(44, 'Tranhuudat777', 'Trần Hữu Đạt', '', '$2b$10$uMCILaYsuOUq9ninPv48/OlnK0q1cPfC/H2D85DBqe4nPgfBZKO6K', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(45, 'Tranhuudat555', 'Trần Hữu Đạt', '', '$2b$10$cGsJyx/H4SRrKfg6Sht.I.lZv609sKRXpg8xnIKSzyZSHu/b4/L9C', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(46, 'Tranhuudat333', 'Trần Hữu Đạt', '', '$2b$10$VZYFoUMysTxWY1thtxeOPe1h.Gx7DiaF6sbeasWNvhueaRXp1qrIm', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(47, 'Tranhuudat1011', 'Trần Hữu Đạt', '', '$2b$10$rSycT7UZha4Rc1UbfCu0ROfh2VNIz66JXlLBVUNtOd3.MhZasw8lG', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(48, 'thuylinh2004', 'Dương Thị Thùy Linh', '', '$2b$10$gMTtetUaxFId9EZIjzhb3OM1kpmnNYvGFo54RMngx1e5sBg.o1JPy', 'ThuyKhanh.jpg', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(49, 'huyle2004', 'Lê Tấn Huy', '', '$2b$10$fd5E16qEErFHsMQ4Hk3b/OYAvzDTeFYwuY5df31U9.WlpZCbpdmYG', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(50, 'MinhPhucDao', 'Đào Minh Phúc', '', '$2b$10$dWkOpL7.1P3D/ryh.Y3JH.j7vrqwl3JDEJuOvP4IXEbRU8nBeG8mO', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141'),
(51, 'MinhPhucDao111', 'Đào Minh Phúc', '', '$2b$10$8DVHz3gTCQ.oqL2I9nQx5e8qHi5TgxZMtTWNoHwyAXOHFMO/YbJNe', '', '19 Nguyễn Hữu Thọ Quận 7', '', '', '0909141');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminID`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productid` (`productid`),
  ADD KEY `userid` (`userid`);

--
-- Chỉ mục cho bảng `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Chỉ mục cho bảng `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`group_id`);

--
-- Chỉ mục cho bảng `group_product`
--
ALTER TABLE `group_product`
  ADD PRIMARY KEY (`group_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `o_id` (`o_id`);

--
-- Chỉ mục cho bảng `order_detail`
--
ALTER TABLE `order_detail`
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
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `coupon`
--
ALTER TABLE `coupon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `group`
--
ALTER TABLE `group`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`productid`) REFERENCES `product` (`p_id`);

--
-- Các ràng buộc cho bảng `group_product`
--
ALTER TABLE `group_product`
  ADD CONSTRAINT `group_product_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `group` (`group_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `group_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`p_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
