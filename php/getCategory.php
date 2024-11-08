<?php
// error_reporting(0); // Tắt hiển thị tất cả các thông báo lỗi

if (isset($_GET['p_id'])) {
	$p_id = $_GET['p_id'];

	// Truy vấn chi tiết sản phẩm dựa trên p_id
	$sqlProduct = "SELECT * FROM `product` WHERE `p_id` = '$p_id'";
	$result = mysqli_query($conn, $sqlProduct);

	// Kiểm tra xem có kết quả trả về không
	if ($result->num_rows > 0) {
		// Lấy thông tin chi tiết của sản phẩm và đưa vào mảng product
		$row = $result->fetch_assoc();
		$product = array(
			"p_id" => $row["p_id"],
			"p_type" => $row["p_type"],
			"p_image" => $row["p_image"],
			"p_name" => $row["p_name"],
			"p_price" => $row["p_price"],
			"p_provider" => $row["p_provider"],
			"p_age" => $row["p_age"],
			"p_description" => $row["p_description"]
		);

		// Tách chuỗi hình ảnh thành mảng và loại bỏ khoảng trắng thừa
		$product_images = array_map('trim', explode(',', $row["p_image"]));

		// Kiểm tra và gán lại giá trị nếu ảnh thứ 2 và thứ 3 trống
		if (empty($product_images[1])) {
			$product_images[1] = $product_images[0];
		}

		if (empty($product_images[2])) {
			$product_images[2] = $product_images[0];
		}

		// Hiển thị thông tin chi tiết của sản phẩm
		// print_r($product_images);
	} else {
		echo "Không tìm thấy sản phẩm với p_id là $p_id";
		header("Location: 404.php");
		exit(); // Stop further execution of the script
	}
} else {
	header("Location: 404.php");
	exit(); // Stop further execution of the script
}

?>
