<style>
    /* Global Styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        /* Bỏ gạch chân dưới liên kết */
    }

    body {
        font-family: 'Inter', sans-serif;
        line-height: 1.6;
    }

    header{
        background-color: #f5f5f5;
    }

    /* Desktop Navbar */
    .navbar.desktop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #fff;
    }

    .navbar.desktop ul {
        display: flex;
        list-style: none;
    }

    .navbar.desktop ul li {
        margin-left: 20px;
    }

    .navbar.desktop ul li .active {
        font-weight: 700;
    }


    .navbar.desktop ul li a {
        text-decoration: none;
        color: black;
        font-weight: 500;
    }

    .navbar.desktop .btn,
    .navbar.desktop .btn-login {
        margin: 10px;
        /* Điều chỉnh khoảng cách giữa hai nút */
    }

    .navbar.mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .logo img {
        max-width: 200px;
        float: left;
    }

    .hamburger-menu {
        padding: 15px 15px;
        background-color: #ff5c5c;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 24px;
    }

    /* Mobile Menu Layer */
    .navLayer {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 9999;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
    }

    .navLayer.active {
        display: flex;
    }

    .navbar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .closeBtn {
        font-size: 30px;
        cursor: pointer;
    }

    .nav-items {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .nav-items li {
        margin: 20px 0;
    }

    .nav-items li a {
        display: block;
        padding: 10px 20px;
        border-radius: 10px;
        background-color: #fff;
        color: #ff5c5c;
        font-weight: bold;
        text-decoration: none;
        font-size: 16px;
        text-align: center;
        border: 1px solid #ff5c5c;
        transition: background-color 0.3s ease;
    }

    .nav-items .active {
        background-color: #ff5c5c;
        color: white;
    }

    /* Language Switch */
    .lang-switch {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    .lang-btn {
        background-color: #fff;
        color: #ff5c5c;
        border: 1px solid #ff5c5c;
        padding: 10px 20px;
        border-radius: 50px;
        margin: 0 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .lang-btn.active,
    .lang-btn:hover {
        background-color: #ff5c5c;
        color: white;
    }

    .navbar.desktop {
        display: flex;
    }

    .navbar.mobile {
        display: none;
    }

    /* Responsive Styles Header */
    @media (max-width: 768px) {
        .navbar.desktop {
            display: none;
        }

        .navbar.mobile {
            display: flex;
        }
    }

    /* Utility classes */
    .text-center {
        text-align: center;
    }


    .hamburger-menu {
        padding: 10px 10px;
        background-color: #ff5c5c;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .btn-sign-up {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #ff5c5c;
        color: white;
        border: none;
        border-radius: 16px;
        cursor: pointer;
    }

    .btn-login {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #ffffff;
        /* Màu nền trắng */
        color: #ff5c5c;
        /* Màu chữ */
        border: 1px solid #ff5c5c;
        /* Viền với màu #ff5c5c */
        border-radius: 16px;
        /* Độ bo tròn viền */
        cursor: pointer;
    }

    .btn-cart {
        padding: 0px 0px;
        background-color: #fff;
        border: none;
        border-radius: 16px;
        cursor: pointer;
        margin: 0px 15px;
    }

    /* Responsive Styles Header */
    @media (max-width: 768px) {
        .btn-cart {
            padding: 5px 10px;
            background-color: #fff;
            border: none;
            border-radius: 16px;
            cursor: pointer;
            margin: 5px 20px;
        }

    }

    .img-user {
        border-radius: 50%;
        object-fit: cover;
    }

    .buttons {
        padding: 10px 20px;
        color: white;
        border: none;
        border-radius: 16px;
        cursor: pointer;
    }

    /* Language switcher container */
    .language-switcher {
        position: relative;
        display: inline-block;
        margin-right: 20px;
    }

    /* Current language flag icon */
    .current-lang img {
        padding-top: 5px;
        width: 48px;
        cursor: pointer;
    }

    /* Dropdown styling */
    .dropdown-content {
        display: none;
        position: absolute;
        right: 0;
        background-color: white;
        width: 150px;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
        z-index: 1;
        border-radius: 5px;
        overflow: hidden;
    }

    .dropdown-content a {
        display: flex;
        align-items: center;
        padding: 10px;
        text-decoration: none;
        color: black;
        font-size: 14px;
    }

    .dropdown-content a:hover {
        background-color: #f1f1f1;
    }

    /* Language option flag icons */
    .lang-option img {
        width: 18px;
        margin-right: 8px;
    }

    /* Show dropdown when hovering */
    .language-switcher:hover .dropdown-content {
        display: block;
    }

    .search-bar {
        display: flex;
        align-items: center;
        background-color: white;
        padding: 5px;
        border-radius: 5px;
    }

    .search-bar input {
        border: none;
        padding: 5px;
        width: 200px;
        /* background-color: #f5f5f5; */
    }

    .search-bar .btn-search {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }

    .btn-search{
        margin-left: 15px;
    }
</style>
<!-- Header Section -->
<header>

    <!-- Desktop Navbar -->
    <div class="navbar desktop">
        <a href="../vn/index.php">
            <div class="logo">
                <img src="../images/logo.png" width="200" alt="Brick Shop Logo">
            </div>
        </a>

        <ul>
            <?php if ($website == 'index.php'): ?>
                <li><a class="active" href="../vn/index.php">Trang chủ</a></li>
                <li><a href="../vn/product.php">Sản phẩm</a></li>
                <li><a href="#">Liên hệ</a></li>

            <?php elseif ($website == 'contact.php'): ?>
                <li><a href="../vn/index.php">Trang chủ</a></li>
                <li><a href="../vn/product.php">Sản phẩm</a></li>
                <li><a class="active" href="#">Liên hệ</a></li>

            <?php else: ?>
                <li><a href="../vn/index.php">Trang chủ</a></li>
                <li><a class="active" href="../vn/product.php">Sản phẩm</a></li>
                <li><a href="#">Liên hệ</a></li>
            <?php endif ?>
        </ul>
        <div class="search-bar">
            <input type="text" placeholder="Tìm kiếm sản phẩm">
            <button class="btn-cart"><a class="fa-duotone fa-solid fa-magnifying-glass fa-xl" style="color: #ff5c5c; "></a></button>
        </div>
        <ul>
            <div class="language-switcher">
                <div class="current-lang">
                    <img src="../images/flags/vn.png" alt="Vietnam Flag">
                </div>
                <div class="dropdown-content">
                    <a href="../en/<?php echo $website ?>" class="lang-option">
                        <img src="../images/flags/en.png" alt="UK Flag"> English
                    </a>
                    <a href="../vn/<?php echo $website ?>" class="lang-option">
                        <img src="../images/flags/vn.png" alt="Vietnam Flag"> Tiếng Việt
                    </a>
                </div>

            </div>


            <!-- Show Icon cart and Profile Avatar -->
            <?php if ($userLogin['userName']): ?>

                <!-- <li><a href="#">Welcome, Doraemon và những người bạn tuyệt vời</a></li> -->

                <!-- Show Icon cart  -->
                <!-- fa-bounce -->                
                <button class="btn-cart"><a id="cartButton" class="fa-duotone fa-solid fa-cart-shopping fa-2xl" style="color: #ff5c5c; padding-right:10px"></a></button>


                <div class="language-switcher">

                    <!-- <label style="padding-right: 10px; padding-top:0px">Hi, Duy</label> -->




                    <!-- Show Profile Avatar -->
                    <?php if (!$userLogin['image']): ?>
                        <a href="../vn/General.php"><img class="img-user" src="../user/male.png" width="50" height="50"></a>
                </div>
            <?php else: ?>
                <a href="../vn/General.php"><img class="img-user" src="../user/<?php echo $userLogin['image'] ?>" width="50"
                        height="50"></a>
    </div>
<?php endif ?>

<?php else: ?>
    <!-- Sign up and login buttons -->
    <div class="buttons">
        <a style="margin-top: 20px;" href="../php/Signup_vn.php" class="btn btn-sign-up">Đăng kí</a>
        <a style="margin-top: 20px;" href="../php/ChooseLogin_vn.php" class="btn btn-login">Đăng nhập</a>
    </div>


<?php endif; ?>
</ul>
</div>

<!-- Mobile Navbar -->
<div class="navbar mobile">
    <div class="menu-icon navA" onclick="toggleMenu()">
        <button class="hamburger-menu" id="btn-hamburger">☰</button>
    </div>
    <div class="logo">
        <img src="../images/logo.png" width="200" alt="Brick Shop Logo">
        <button class="btn-cart"><a class="fa-duotone fa-solid fa-magnifying-glass fa-2xl" style="color: #ff5c5c;"></a></button>

        <!-- <a href="#" class="btn">Đăng nhập</a>
        <a href="#" class="btn">Đăng kí</a> -->
    </div>
</div>

<!-- Mobile Menu Layer -->
<div class="navLayer" id="nav-menu">
    <div class="navbar-header">
        <img src="../images/logo.png" width="200" alt="Brick Shop Logo">
        <span class="closeBtn" onclick="toggleMenu()">X</span>
    </div>
    <ul class="nav-items">
        <?php if ($website == 'index.php'): ?>
            <li><a class="active" href="../vn/index.php">Trang chủ</a></li>
            <li><a href="../vn/product.php">Sản phẩm</a></li>
            <li><a href="#">Liên hệ</a></li>

        <?php elseif ($website == 'contact.php'): ?>
            <li><a href="../vn/index.php">Trang chủ</a></li>
            <li><a href="../vn/product.php">Sản phẩm</a></li>
            <li><a class="active" href="#">Liên hệ</a></li>

        <?php else: ?>
            <li><a href="../vn/index.php">Trang chủ</a></li>
            <li><a class="active" href="../vn/product.php">Sản phẩm</a></li>
            <li><a href="#">Liên hệ</a></li>
        <?php endif ?>

        <!-- Show Icon cart and Profile Avatar -->
        <?php if ($userLogin['userName']): ?>
            <li><a href="../vn/General.php">Xem giỏ hàng</a></li>
            <li><a href="../vn/General.php">Thông tin tài khoản</a></li>
    </ul>
<?php else: ?>
    <li><a href="../php/Signup_vn.php">Đăng kí</a></li>
    <li><a href="../php/ChooseLogin_vn.php">Đăng nhập</a></li>
    </ul>
<?php endif; ?>

<!-- Language Switch -->
<div class="lang-switch">
    <a href="../en/<?php echo $website ?>"><button class="lang-btn ">EN</button></a>
    <a href="../vn/<?php echo $website ?>"><button class="lang-btn active">VN</button></a>
</div>
</div>

<script>
    function toggleMenu() {
        var navLayer = document.getElementById("nav-menu");
        navLayer.classList.toggle("active");
    }
</script>

</header>