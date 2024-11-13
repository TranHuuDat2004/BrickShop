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

if (isset($_POST['AdminID'])) {
    $AdminID = $_POST['AdminID'];
    // print_r($userName);
    $sqlLogin = "SELECT * FROM `Admin` WHERE AdminID = '$AdminID' ";
    $queryLogin = mysqli_query($conn, $sqlLogin);
    // print_r($queryLogin);
    // Kiểm tra kết quả truy vấn

    // Duyệt qua từng hàng dữ liệu từ kết quả truy vấn
    $row = $queryLogin->fetch_assoc();
    // Thêm thông tin từng hàng vào mảng $userLogin
    $userLogin = array(
        "AdminID" => $row["AdminID"],
        "userName" => $row["userName"],
        "email" => $row["email"],
        "image" => $row["image"],
        "loginpassword" => $row["loginpassword"],
    );
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $current_password = $_POST['current_password'];
    $new_password = $_POST['new_password'];
    $repeat_new_password = $_POST['repeat_new_password'];

    // Kiểm tra mật khẩu hiện tại
    if ($current_password != $userLogin['loginpassword']) {
        $_SESSION['error-pass0'] = 'Password incorrect.';
        header('Location: Password.php');
        exit();
    } else {
        unset($_SESSION['error-pass0']);

        // Kiểm tra xem mật khẩu mới và mật khẩu lặp lại có khớp nhau không
        if ($new_password != $repeat_new_password) {
            $_SESSION['error-pass1'] = 'New password does not match.';
            header('Location: Password.php');
            exit();
        } else {
            unset($_SESSION['error-pass1']);

            // // Mã hóa mật khẩu mới
            // $hashed_new_password = password_hash($new_password, PASSWORD_DEFAULT);

            // Lệnh SQL để cập nhật dữ liệu
            $sql = "UPDATE `Admin` SET `loginpassword` = '$new_password' WHERE AdminID = '$AdminID'";

            if ($conn->query($sql) === TRUE) {
                $_SESSION['success_message'] = "Update Password Successfully";
                header('Location: Password.php');
                exit(); // Đảm bảo không có mã nào khác được thực thi sau khi chuyển hướng
            } else {
                echo "Lỗi: " . $sql . "<br>" . $conn->error;
            }
        }
    }
}

$conn->close();
?>
