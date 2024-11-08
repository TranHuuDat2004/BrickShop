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
    <link rel="stylesheet" href="../css/index.css"> <!-- Đường dẫn tới tệp CSS -->
</head>


<body>
    <!-- Header Section -->
    <header>
        <!-- Desktop Navbar -->
        <?php include '../php/header_home_en.php'; ?>

    </header>

    <!-- Qman Section -->
    <section style="padding-left: 80px;" class="qman-section">
        <div class="qman-text">
            <img style="padding-left: 30px;" src="../images/2022101014476761.png" alt="Qman Product">
            <h1 style="margin-bottom: 30px; max-width: 700px;">A leading Chinese toy brand, specializing in original
                building blocks since 1994.</h1>
            <p style="margin-bottom: 30px; max-width: 700px;">The journey of Qman began in 1994, sparked by Mr. Zhan
                Kehua's realization
                of his children's deep love for building blocks. This passion inspired the creation of an original
                Chinese brand focused on building blocks.</p>
            <p class="p2" style="margin-bottom: 50px; max-width: 700px;">Today, Qman has evolved into more than just a
                children's
                toy brand—it is a celebrated national brand that has grown alongside multiple generations. We are
                committed to the brand philosophy that "<b>Qman blocks make dreams come true</b>" and together with our
                customers, we use small building pieces to bring dreams to life.</p>
            <a href="#" class="btn">View Products</a>
        </div>
        <div class="qman-image">

        </div>
    </section>

    <!-- Keeppley Section -->
    <section style="padding-left: 100px;" class="keeppley-section">
        <div class="keeppley-text">
            <img style="padding-left: 30px;" src="../images/2022082419251955.png" alt="Keeppley Product" height="40">
            <h1>A new generation block brand, born in 2019.</h1>
            <p style="margin-bottom: 30px; ; max-width: 800px;">Keeppley is a new-generation brand under Qman, a company
                that has
                specialized in producing building block models similar to LEGO since 1994. Keeppley focuses on offering
                players high-quality, officially licensed products at affordable prices, making them accessible to
                anyone.</p>
            <p style="margin-bottom: 50px; ; max-width: 800px;">
                Keeppley's product range is incredibly diverse, spanning creative house and shop models,magnificent
                architectural structures, as well as unique themes like <b>Pokémon, Doraemon,</b> and other anime and
                manga
                series.
            </p>
            <a href="#" class="btn">View Products</a>
        </div>
        <div class="keeppley-image">

        </div>
    </section>

    <!-- LEGO Section -->
    <section class="lego-section">
        <div class="lego-text">
            <div style="display: flex; justify-content: center; margin-bottom: 30px;">
                <img src="../images/LEGO_logo.png" alt="LEGO Logo" height="100">
            </div>

            <p style="margin-bottom: 30px;">LEGO, a globally iconic toy brand, is celebrated for its interlocking
                plastic bricks that spark
                creativity and imagination. Founded in 1932 by Ole Kirk Christiansen in Denmark, LEGO began as a wooden
                toy manufacturer before evolving into the plastic brick system we know today in 1958.
            </p>
            <p style="margin-bottom: 30px;">
                LEGO sets come in various themes, including <b>LEGO City, Ninjago, Nexo Knight, Chima</b>, and licensed
                series
                like <b>Harry Potter, Despicable Me 4</b>. Beyond physical toys, LEGO has expanded into video games,
                movies
                (The LEGO Movie), and digital apps, offering endless creative opportunities for both children and
                adults.
            </p>
            <p style="margin-bottom: 30px;">
                At the heart of LEGO's mission are six core values: <b>imagination, creativity, fun, learning, caring,
                    and
                    quality.</b> Together, these values help children and families explore their potential while
                ensuring
                top-tier product quality and joyful experiences.
            </p>
        </div>
        <div class="img-container">
            <div class="img-lego" ><a href="#"><img src="../images/LegoNexoKnights.jfif" alt="" height="150" width="275"></a></div>
            <div class="img-lego" ><a href="#"><img src="../images/LegoChima.jfif" alt="" height="150" width="275"></a></div>
            <div class="img-lego" ><a href="#"><img src="../images/LEGO-City-logo.jpg" alt="" height="150" width="275"></a></div>
            <div class="img-lego" ><a href="#"><img src="../images/LegoNinjago.jfif" alt="" height="150" width="275"></a></div>
        </div>

        <!-- <div class="img-container">
            <a href="#"><img class="img-lego" src="../images/LegoNexoKnights.jfif" alt="" height="150" width="275"></a>
            <a href="#"><img class="img-lego" src="../images/LegoChima.jfif" alt="" height="150" width="275"></a>
            <a href="#"><img class="img-lego" src="../images/LEGO-City-logo.jpg" alt="" height="150" width="275"></a>
            <a href="#"><img class="img-lego" src="../images/LegoNinjago.jfif" alt="" height="150" width="275"></a>
        </div> -->
    </section>


    <!-- Footer Section -->
    <footer id="footer-section">
        <?php include '../en/footer.php'; ?>
    </footer>


    <!-- Cart Section -->
    <?php include '../en/cart.php' ?>
</body>
<script>
    function toggleMenu() {
        var navLayer = document.getElementById("nav-menu");
        navLayer.classList.toggle("active");
    }
</script>

</html>