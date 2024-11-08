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
    <title>Brick Shop</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/index.css"> <!-- Đường dẫn tới tệp CSS -->

</head>


<body>
    <!-- Header Section -->
    <header>
        <?php include '../php/header_home_vn.php' ?>
    </header>
    <!-- Phần Qman -->
    <section style="padding-left: 80px;" class="qman-section">
        <div class="qman-text">
            <img style="padding-left: 30px;" src="../images/2022101014476761.png" alt="Sản phẩm Keeppley">
            <h1 style="margin-bottom: 30px; max-width: 700px;">Thương hiệu đồ chơi hàng đầu Trung Quốc, chuyên về gạch
                xây dựng từ năm 1994.</h1>
            <p style="margin-bottom: 30px; max-width: 700px;">Hành trình của Qman bắt đầu vào năm 1994, bắt nguồn từ
                việc ông Zhan Kehua nhận ra niềm đam mê của con mình với các khối xây dựng. Điều này đã truyền cảm hứng
                để ông tạo ra một thương hiệu Trung Quốc nguyên bản, tập trung vào các khối xây dựng.</p>
            <p class="p2" style="margin-bottom: 50px; max-width: 700px;">Ngày nay, Qman không chỉ là một thương hiệu đồ
                chơi trẻ em—nó là một thương hiệu quốc gia được yêu thích, đã phát triển cùng với nhiều thế hệ. Chúng
                tôi cam kết với triết lý thương hiệu rằng "<b>Qman blocks make dreams come true</b>", và cùng với khách
                hàng, chúng tôi sử dụng những mảnh ghép nhỏ để hiện thực hóa những giấc mơ.</p>
            <a href="#" class="btn">Xem sản phẩm</a>
        </div>
        <div class="qman-image">
            <!-- Phần hình ảnh -->
        </div>
    </section>

    <!-- Phần Keeppley -->
    <section style="padding-left: 100px;" class="keeppley-section">
        <div class="keeppley-text">
            <img style="padding-left: 30px;" src="../images/2022082419251955.png" alt="Sản phẩm Keeppley" height="40">
            <h1>Thương hiệu gạch xây dựng thế hệ mới, ra đời năm 2019.</h1>
            <p style="margin-bottom: 30px; max-width: 800px;">Keeppley là thương hiệu thế hệ mới thuộc Qman, một công ty
                đã chuyên sản xuất các mô hình khối xây dựng tương tự LEGO từ năm 1994. Keeppley tập trung cung cấp các
                sản phẩm chính hãng, chất lượng cao với giá cả hợp lý, giúp mọi người dễ dàng tiếp cận.</p>
            <p style="margin-bottom: 50px; max-width: 800px;">Dòng sản phẩm của Keeppley rất đa dạng, bao gồm các mô
                hình nhà cửa, cửa hàng sáng tạo, các công trình kiến trúc tráng lệ, cũng như các chủ đề đặc biệt như
                <b>Pokémon, Doraemon</b> và các series anime và manga khác.
            </p>
            <a href="#" class="btn">Xem sản phẩm</a>
        </div>
        <div class="keeppley-image">
            <!-- Phần hình ảnh -->
        </div>
    </section>

    <!-- Phần LEGO -->
    <section class="lego-section">
        <div class="lego-text">
            <div style="display: flex; justify-content: center;">
                <img src="../images/LEGO_logo.png" alt="Logo LEGO" height="100">
            </div>
            <p style="margin-bottom: 30px;">LEGO, thương hiệu đồ chơi mang tính biểu tượng toàn cầu, nổi tiếng với các
                viên gạch nhựa ghép nối kích thích sự sáng tạo và trí tưởng tượng. Được thành lập vào năm 1932 bởi Ole
                Kirk Christiansen tại Đan Mạch, LEGO bắt đầu là nhà sản xuất đồ chơi bằng gỗ trước khi chuyển sang hệ
                thống gạch nhựa mà chúng ta biết ngày nay vào năm 1958.</p>
            <p style="margin-bottom: 30px;">Các bộ LEGO có nhiều chủ đề, bao gồm <b> LEGO City, Ninjago, Nexo Knight,
                    Chima</b>
                và các loạt phim được cấp phép như <b>Harry Potter, Despicable Me 4.</b> Ngoài đồ chơi vật lý, LEGO còn
                mở
                rộng sang trò chơi điện tử, phim ảnh (The LEGO Movie), và các ứng dụng kỹ thuật số, mang lại những cơ
                hội sáng tạo vô tận cho cả trẻ em và người lớn.</p>
            <p style="margin-bottom: 30px;">Trọng tâm của sứ mệnh LEGO là sáu giá trị cốt lõi: <b>trí tưởng tượng, sự
                    sáng
                    tạo, niềm vui, học hỏi, quan tâm và chất lượng.</b> Những giá trị này giúp trẻ em và gia đình khám
                phá tiềm
                năng của mình trong khi đảm bảo chất lượng sản phẩm hàng đầu và những trải nghiệm vui vẻ.</p>
        </div>
        <div class="img-container">
            <a href="#"><img class="img-lego" src="../images/LegoChima.jfif" alt="" height="150" width="275"></a>
            <a href="#"><img class="img-lego" src="../images/LegoNexoKnights.jfif" alt="" height="150" width="275"></a>
            <a href="#"><img class="img-lego" src="../images/LEGO-City-logo.jpg" alt="" height="150" width="275"></a>
            <a href="#"><img class="img-lego" src="../images/LegoNinjago.jfif" alt="" height="150" width="275"></a>
        </div>
    </section>

        <!-- Footer Section -->
        <footer id="footer-section">
        <?php include '../vn/footer.php'; ?>
    </footer>

</body>
<script>
    function toggleMenu() {
        var navLayer = document.getElementById("nav-menu");
        navLayer.classList.toggle("active");
    }
</script>

</html>