<?php
// Kết nối đến cơ sở dữ liệu
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "toy-shop";

// Tạo kết nối đến cơ sở dữ liệu
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Xác định comment_id từ yêu cầu POST
if (isset($_POST['IDcomment'])) {
    $comment_id = $_POST['IDcomment'];

    // Xóa comment từ cơ sở dữ liệu
    $sql = "DELETE FROM comments WHERE IDcomment = $comment_id";

    if ($conn->query($sql) === TRUE) {
        header("Location: comment.php");
    } else {
        echo "Error deleting comment: " . $conn->error;
    }
} else {
    echo "Comment ID not provided";
}

// Đóng kết nối đến cơ sở dữ liệu
$conn->close();
?>