<?php
    // Kết nối đến cơ sở dữ liệu
    $conn = new mysqli('localhost', 'root', '','keeppley-shop');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Thực hiện truy vấn SQL
    $sql = "SELECT * FROM product";
    $result = $conn->query($sql);


?>