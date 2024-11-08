<?php
    require_once '../connection/connectData.php';
    
    if(isset($_GET['o_id'])) {
        $o_id = $_GET['o_id'];
        
        // Xóa dữ liệu trong bảng "order_detail" dựa trên "o_id"
        $sql_delete_order_detail = "DELETE FROM order_detail WHERE o_id = $o_id";
        $query_delete_order_detail = mysqli_query($conn, $sql_delete_order_detail);
        
        // Xóa dữ liệu trong bảng "order" dựa trên "o_id"
        $sql_delete_order = "DELETE FROM `order` WHERE o_id = $o_id";
        $query_delete_order = mysqli_query($conn, $sql_delete_order);
        
        if ($query_delete_order_detail && $query_delete_order) {
            // Nếu xóa thành công, chuyển hướng đến trang quản lý đơn hàng
            header('Location: ManageOrder.php');
        } else {
            // Nếu có lỗi, xử lý tùy ý (ví dụ: hiển thị thông báo lỗi)
            echo "Có lỗi xảy ra khi xóa dữ liệu.";
        }
    } else {
        // Nếu không có o_id được cung cấp, xử lý tùy ý (ví dụ: hiển thị thông báo lỗi)
        echo "Không có o_id được cung cấp.";
    }
?>
