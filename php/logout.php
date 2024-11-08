<?php
session_start();
session_unset(); // Xóa tất cả các biến phiên
session_destroy(); // Hủy phiên hiện tại

// Chuyển hướng người dùng về trang đăng nhập hoặc trang chủ
header('Location: ../en/index.php');
exit(); // Đảm bảo không có mã nào khác được thực thi sau khi chuyển hướng
?>
