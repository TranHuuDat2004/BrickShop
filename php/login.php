<?php
session_start();

// if (!isset($_SESSION['username'])) {
//   header('Location: ../admin/index.php');
//   die();
// }

$username = '';
$password = '';
$error = '';

$conn = new mysqli('localhost', 'root', '', 'keeppley-shop'); //servername, usernamename, password, database's name
if ($conn->connect_error) {
    die("Connection Failed : " . $conn->connect_error);
} else {
    if (isset($_POST['username']) && isset($_POST['password'])) { // kiểm tra xem biến có tồn tại hay không
        $username = $_POST['username'];
        $password = $_POST['password'];

        if ($username === 'admin' && $password === '1234') {
            $_SESSION['username'] = 'admin.com';
            header('Location: ../Admin/public/index.php');
        } else {
            $stmt = $conn->prepare("SELECT * FROM `user` WHERE username = ? AND loginpassword = ?"); // so sánh biến nhập vào với database
            $stmt->bind_param("ss", $username, $password);
            $stmt->execute();
            $result = $stmt->get_result();
            
            if ($result->num_rows <= 0) {
                $_SESSION['error0'] = 'Invalid username or password';
                header('Location: login_again_en.php'); // Chuyển hướng đến trang reaction_form.html nếu đăng nhập thất bại
            } else {
                unset ($_SESSION['error0']);
                $row = $result->fetch_assoc();
                $_SESSION['userID'] = $row['userID'];

                // print_r($_SESSION['username']);
                
                header('Location: ../en/product.php');
            }

            $stmt->close();
            $conn->close();
        }
    }
}
?>
