<?php
    $conn = mysqli_connect('localhost', 'root', '', 'keeppley-shop');
    if ($conn) {
        mysqli_query($conn, "SET NAMES 'UTF8'");
        // echo 'successfully';
    }
    else {
        echo 'failed connect';
    }
?>