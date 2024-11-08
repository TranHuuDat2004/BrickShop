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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userName = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm-password'];

    // Kiểm tra xem mật khẩu và mật khẩu xác nhận có khớp nhau không
    if ($password != $confirmPassword) {
        $_SESSION['error-pass'] = 'Passwords do not match.';
        header('Location: SignUp.php');
        exit();
    } else {
        unset($_SESSION['error-pass']);
        
        // Lệnh SQL để chèn dữ liệu người dùng mới
        $sql = "INSERT INTO `Admin` (`userName`, `email`, `loginpassword`) VALUES ('$userName', '$email', '$password')";

        if ($conn->query($sql) === TRUE) {
            $adminID = $conn->insert_id; // Lấy ID của bản ghi vừa chèn
            $_SESSION['success_message'] = "User registered successfully";
            $_SESSION['adminID'] = $adminID; // Gán userID vào biến session
            header('Location: General.php');
            exit(); // Đảm bảo không có mã nào khác được thực thi sau khi chuyển hướng
        } else {
            echo "Lỗi: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
