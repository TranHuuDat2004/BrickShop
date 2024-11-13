<?php
// Kết nối cơ sở dữ liệu
$conn = new mysqli('localhost', 'root', '', 'keeppley-shop');
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

// Xử lý cập nhật sản phẩm khi người dùng submit form
if (isset($_POST['sbm'])) {
    $p_id = $_POST['p_id'];

    // Lấy thông tin file hướng dẫn cũ từ cơ sở dữ liệu
    $query = "SELECT p_tutorial FROM product WHERE p_id = '$p_id'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);
    $old_tutorial = $row['p_tutorial'];

    // Xử lý tệp hướng dẫn mới
    if (!empty($_FILES['p_tutorial']['name'])) {
        $tutorial_name = $_FILES['p_tutorial']['name'];
        move_uploaded_file($_FILES['p_tutorial']['tmp_name'], '../tutorials/' . $tutorial_name);
    } else {
        // Nếu không có tệp mới được tải lên, giữ lại tệp cũ
        $tutorial_name = $old_tutorial;
    }

    // Câu lệnh SQL để cập nhật sản phẩm
    $sql = "UPDATE product 
            SET p_tutorial = '$tutorial_name'
            WHERE p_id = '$p_id'";

    try {
        $query = mysqli_query($conn, $sql);
        header('Location: manageProduct.php');
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
