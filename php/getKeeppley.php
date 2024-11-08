<?php
// error_reporting(0); // Tắt hiển thị tất cả các thông báo lỗi
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

	$sqlKeeppley = "SELECT * FROM `Category` WHERE `provider` = 'Keeppley'";
	$result = mysqli_query($conn, $sqlKeeppley);

	// Kiểm tra xem có kết quả trả về không
	if ($result->num_rows > 0) {
		// Lấy thông tin chi tiết của sản phẩm và đưa vào mảng product
		$row = $result->fetch_assoc();
		$Keeppleys = array(
			"id" => $row["id"],
			"name_en" => $row["name_en"],
			"images" => $row["images"],
			"name_vn" => $row["name_vn"],
		);

		// Tách chuỗi hình ảnh thành mảng và loại bỏ khoảng trắng thừa
		$product_images = array_map('trim', explode(',', $Keeppleys["images"]));

		print_r($product_images[0]);
		
		// Kiểm tra và gán lại giá trị nếu ảnh thứ 2 và thứ 3 trống
		if (empty($product_images[1])) {
			$product_images[1] = $product_images[0];
		}

		// Hiển thị thông tin chi tiết của sản phẩm
		// print_r($product_images);
	} else {
		echo "Không tìm thấy sản phẩm với providerlà Keeppley";
		exit(); // Stop further execution of the script
	}


?>
