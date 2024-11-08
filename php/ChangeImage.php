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

if (isset($_POST['userID'])) {
    $userID = $_POST['userID']; // Lấy userID từ form

    // Kiểm tra nếu người dùng chọn ảnh mặc định
    if (isset($_POST['defaultImage']) && !empty($_POST['defaultImage'])) {
        $defaultImage = basename($_POST['defaultImage']);
        $sql = "UPDATE user SET `image` = '$defaultImage' WHERE userID = $userID";

    } 
    // Nếu không có ảnh mặc định, kiểm tra xem có ảnh mới nào được tải lên
    elseif (!empty($_FILES['profileImage']['name'])) {
        $p_image = $_FILES['profileImage']['name'];
        $p_image_tmp = $_FILES['profileImage']['tmp_name'];

        // Di chuyển tệp vào thư mục 'user'
        $image_path = basename($p_image);
        move_uploaded_file($p_image_tmp, '../user/' . $image_path);

        // Cập nhật thông tin sản phẩm kèm theo đường dẫn ảnh mới
        $sql = "UPDATE user SET `image` = '$image_path' WHERE userID = $userID";

    } else {
        // Nếu không có ảnh mặc định hoặc ảnh mới nào được chọn, dừng xử lý và thông báo lỗi
        echo "Không có ảnh được chọn.";
        $conn->close();
        exit();
    }

    // Thực thi câu lệnh SQL
    if ($conn->query($sql) === TRUE) {
        $_SESSION['success_message'] = "Update Image Successfully";
        header('Location: ../en/Image.php');
        exit(); // Đảm bảo không có mã nào khác được thực thi sau khi chuyển hướng
    } else {
        echo "Lỗi: " . $sql . "<br>" . $conn->error;
    }

    // Đóng kết nối
    $conn->close();
}
?>
