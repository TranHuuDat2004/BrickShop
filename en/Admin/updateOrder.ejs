<?php
require_once '../connection/connectData.php';

if(isset($_POST['editbutton'])) {
    // Lấy thông tin đơn hàng từ form
    $o_id = $_POST['o_id'];
    $o_status = $_POST['o_status'];

    // Kiểm tra giá trị của trường "o_status" và xây dựng câu lệnh SQL UPDATE tương ứng
    if($o_status == '0' || $o_status == '1') {
        $sql = "UPDATE `order` SET o_status = '$o_status' WHERE o_id = $o_id";

        // Thực thi truy vấn SQL
        if (mysqli_query($conn, $sql)) {
            // Nếu thành công, chuyển hướng người dùng về trang quản lý đơn hàng
            header('Location: ManageOrder.php');
            exit(); // Kết thúc script sau khi chuyển hướng để đảm bảo không có mã nào được thực thi tiếp sau khi chuyển hướng
        } else {
            // Nếu có lỗi, hiển thị thông báo lỗi
            echo "Lỗi cập nhật trạng thái đơn hàng: " . mysqli_error($conn);
        }
    } else {
        // Nếu giá trị của trường "o_status" không hợp lệ, hiển thị thông báo lỗi
        echo "Giá trị của trường o_status không hợp lệ.";
    }
} else {
    // Nếu không có biến sbm được gửi, chuyển hướng người dùng về trang quản lý đơn hàng
    header('Location: ManageOrder.php');
    exit();
}
?>
