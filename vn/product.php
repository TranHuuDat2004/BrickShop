<?php
// Lấy tên file này
$website = basename($_SERVER['SCRIPT_NAME']);
// echo $website;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include '../php/head.php'; ?>
    <?php include '../php/login.php'; ?>
    <?php include '../php/getUser.php'; ?>
    <title>Brick Shop - Products</title>
    <link rel="stylesheet" href="../css/product.css" />
</head>


<body>

    <!-- Header Section -->
    <?php include '../php/header_home_vn.php' ?>

    <!-- Cart Section -->
    <?php include '../en/cart.php' ?>

    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="../en/index.php">Trang chủ</a></li>
            <li class="breadcrumb-item active">Sản phẩm</li>
            <!-- <li class="breadcrumb-item active" aria-current="page">Keeppley</li> -->
        </ol>
    </nav>

    <!-- Brands Section -->
    <section class="brands">
        <div class="brand-logo">
            <img src="../images/Products.png" alt="Product">
        </div>
    </section>

    <!-- Products Section -->
    <section class="products">
        <h2>Qman Products</h2>
        <div class="product-grid">

            <?php
            $sqlQman = "SELECT * FROM `Category` WHERE `provider` = 'Qman'";
            $result = mysqli_query($conn, $sqlQman);

            // Kiểm tra xem có kết quả trả về không
            if ($result->num_rows > 0)
                while ($category = $result->fetch_assoc()):

                    // Tách chuỗi hình ảnh thành mảng và loại bỏ khoảng trắng thừa
                    $product_images = array_map('trim', explode(',', $category["images"]));
                    ?>

                    <div class="product">
                        <img src="../images/5ce61d2ed281b.jpg" alt="Pokémon Keeppley">
                        <p>Pokémon</p>
                    </div>
                    <?php

                endwhile;
            ?>

        </div>
        <a href="Qman-Products.php">
            <h4>View More > </h4>
        </a>

        <h2>Keeppley Products</h2>
        <div class="product-grid">


            <?php
            $sqlQman = "SELECT * FROM `Category` WHERE `provider` = 'Keeppley'";
            $result = mysqli_query($conn, $sqlQman);

            // Kiểm tra xem có kết quả trả về không
            if ($result->num_rows > 0)
                while ($category = $result->fetch_assoc()):

                    // Tách chuỗi hình ảnh thành mảng và loại bỏ khoảng trắng thừa
                    $product_images = array_map('trim', explode(',', $category["images"]));
                    ?>

                    <div class="product">
                        <a href="../en/Category_Product.php?id=<?php echo $category['id']; ?>">
                            <img src="../images/<?php echo $product_images[0]; ?>" alt="Pokémon Keeppley">
                            <p><?php echo $category['name_en'] ?></p>
                        </a>
                    </div>
                    <?php

                endwhile;
            ?>


        </div>
        <a href="Keeppley-Products.php">
            <h4>View More > </h4>
        </a>

        <h2>LEGO Products</h2>
        <div class="product-grid">


            <?php
            $sqlQman = "SELECT * FROM `Category` WHERE `provider` = 'LEGO'";
            $result = mysqli_query($conn, $sqlQman);

            // Kiểm tra xem có kết quả trả về không
            if ($result->num_rows > 0)
                while ($category = $result->fetch_assoc()):

                    // Tách chuỗi hình ảnh thành mảng và loại bỏ khoảng trắng thừa
                    $product_images = array_map('trim', explode(',', $category["images"]));
                    ?>

                    <div class="product">
                        <img src="../images/5ce61d2ed281b.jpg" alt="Pokémon Keeppley">
                        <p>Pokémon</p>
                    </div>
                    <?php

                endwhile;
            ?>


        </div>
        <a href="LEGO-Products.php">
            <h4>View More > </h4>
        </a>
    </section>

    <!-- Footer Section -->
    <?php include '../vn/footer.php' ?>

</body>

</html>