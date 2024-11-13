<?php
// Kết nối cơ sở dữ liệu
$conn = new mysqli('localhost', 'root', '', 'keeppley-shop'); // servername, username, password, database's name
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

// Xử lý cập nhật sản phẩm khi người dùng submit form
if (isset($_POST['sbm'])) {
    $p_id = $_POST['p_id'];

    // Lấy thông tin hình ảnh cũ từ cơ sở dữ liệu
    $query = "SELECT p_image FROM product WHERE p_id = '$p_id'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);
    $old_images = explode(',', $row['p_image']);

    // Xử lý các hình ảnh mới
    $new_images = [];
    for ($i = 0; $i < 3; $i++) {
        if (!empty($_FILES['p_image']['name'][$i])) {
            $new_image_name = $_FILES['p_image']['name'][$i];
            move_uploaded_file($_FILES['p_image']['tmp_name'][$i], '../images/' . $new_image_name);
            $new_images[] = $new_image_name;
        } else {
            // Nếu không có hình ảnh mới được tải lên, giữ lại hình ảnh cũ
            $new_images[] = $old_images[$i];
        }
    }

    // Chuyển đổi mảng hình ảnh thành chuỗi để lưu vào cơ sở dữ liệu
    $new_images_string = implode(',', $new_images);

    // Câu lệnh SQL để cập nhật sản phẩm
    $sql = "UPDATE product 
            SET p_image = '$new_images_string'
            WHERE p_id = '$p_id'";

    try {
        $query = mysqli_query($conn, $sql);
        header('Location: manageProduct.php');
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
