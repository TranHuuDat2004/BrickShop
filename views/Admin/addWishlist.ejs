<?php
require_once '../connection/connectData.php';

if(isset($_GET['p_id'])) {
    $p_id = $_GET['p_id'];
    
    $sql = "INSERT INTO wishlist (p_name, p_image, p_type, p_price)
        SELECT p_name, p_image, p_type, p_price FROM product
        WHERE NOT EXISTS (
            SELECT 1 FROM wishlist WHERE wishlist.p_name = product.p_name
        ) AND product.p_id = ?";

    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $p_id);
    
    if ($stmt->execute()) {
        header('Location: ../../Fontend/wishlist.php');
        exit();
    } else {
        echo "Lỗi: " . $stmt->error;
    }
    
    $stmt->close();
}
else {
    echo 'fail';
}

$conn->close();

?>