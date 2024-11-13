<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "keeppley-shop";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

if(isset($_POST['adminID'])){
    $adminID = $_POST['adminID']; // Lấy adminID từ form

    // Kiểm tra nếu có hình ảnh được chọn
    if (!empty($_FILES['profileImage']['name'])) {
        $p_image = $_FILES['profileImage']['name'];
        $p_image_tmp = $_FILES['profileImage']['tmp_name'];
        
        // Di chuyển tệp vào thư mục 'user'
        $image_path = basename($p_image);
        move_uploaded_file($p_image_tmp, '../images/' . $image_path);
        
        // Cập nhật thông tin sản phẩm kèm theo đường dẫn ảnh mới
        $sql = "UPDATE `Admin` SET `image` = '$image_path' WHERE adminID = $adminID";
        
        if ($conn->query($sql) !== TRUE) {
            echo "Lỗi: " . $sql . "<br>" . $conn->error;
        }
    }

    // Các giá trị cần cập nhật
    $newUserName = $_POST['userName'];
    $newEmail = $_POST['email'];

    // Lệnh SQL để cập nhật dữ liệu
    $sql = "UPDATE Admin SET userName='$newUserName', email='$newEmail' WHERE adminID = $adminID";

    if ($conn->query($sql) === TRUE) {
        $_SESSION['success_message'] = "Update Information Successfully";
        header('Location: General.php');
        exit(); // Đảm bảo không có mã nào khác được thực thi sau khi chuyển hướng
    } else {
        echo "Lỗi: " . $sql . "<br>" . $conn->error;
    }

    // Đóng kết nối
    $conn->close();
}

?>
