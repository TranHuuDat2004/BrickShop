<?php

include 'login.php'; // Kiểm tra người dùng đã đăng nhập

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $bio = $_POST['bio'];
    $birthday = $_POST['birthday'];
    $country = $_POST['country'];
    $phone = $_POST['phone'];

    // Cập nhật thông tin người dùng trong cơ sở dữ liệu
    $adminID = $_POST['adminID'];
    $sql = "UPDATE `Admin` SET bio = ?, birthday = ?, country = ?, phone = ? WHERE adminID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssi", $bio, $birthday, $country, $phone, $adminID);

    if ($stmt->execute()) {
        // echo "Information updated successfully!";
        $_SESSION['success_message'] = "Update Information Successfully";
        header('Location: Information.php');
        exit(); // Đảm bảo không có mã nào khác được thực thi sau khi chuyển hướng
    } else {
        // echo "Error updating information: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>