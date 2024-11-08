<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    .img-user {
        border-radius: 50%;
        object-fit: cover;
    }

    /* Container for the header */
    .header {
        padding-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: white;
    }

    /* Logo */
    .logo img {
        padding-left: 100px;
        height: 50px;
    }

    /* Navigation links */
    .navbar {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .navbar a {
        text-decoration: none;
        color: black;
        font-size: 18px;
        padding: 5px;
        position: relative;
        font-weight: 700;
    }

    /* Underline effect */
    .navbar a:hover::after,
    .navbar a.active::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background: black;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    /* Language selection */
    .language {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .language a {
        text-decoration: none;
        color: black;
        font-size: 18px;
    }

    .language a:hover::after,
    .language a.active::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background: black;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    /* Sign up and login buttons */
    .buttons {
        display: flex;
        gap: 10px;
        font-weight: 700;
    }

    .sign-up,
    .login {
        padding: 10px 20px;
        font-size: 18px;
        text-decoration: none;
        border-radius: 20px;
    }

    .sign-up {
        background-color: #e0f7ff;
        color: black;
    }

    .login {
        background-color: black;
        color: white;
    }
</style>
<div class="header">
    <!-- Logo -->
    <div class="logo">
        <img src="../images/logo.png" alt="Brick Shop Logo">
    </div>

    <!-- Navigation -->
    <nav class="navbar">
        <a href="../en/index.php">Home</a>
        <a href="../en/product.php" class="active">Products</a>
        <a href="../en/">Contact Us</a>
    </nav>

    <!-- Language selection -->
    <div class="language">
        <a href="../en/">EN</a>
        <a href="../vn/">VN</a>
    </div>

    <!-- Show Icon cart and Profile Avatar -->
    <?php if ($userLogin['userName']): ?>

        <!-- <li><a href="#">Welcome, Doraemon và những người bạn tuyệt vời</a></li> -->

        <!-- Show Icon cart  -->
        <!-- <button >Giỏ hàng</button> -->
        <div class="buttons">
            <a id="cartButton" class="fa-solid fa-cart-shopping fa-2xl btn-cart" style="color: #000000; padding-top:25px"></a>
            <label style="padding-right: 10px; padding-top:20px">Hi, Duy</label>
        

        

        <!-- Show Profile Avatar -->
        <?php if (!$userLogin['image']): ?>
            <a href="../en/General.php"><img class="img-user" src="../user/male.png" width="50" height="50"></a>
            </div>
        <?php else: ?>
            <a href="../en/General.php"><img class="img-user" src="../user/<?php echo $userLogin['image'] ?>" width="50" height="50"></a>
            </div>
        <?php endif ?>

    <?php else: ?>
        <!-- Sign up and login buttons -->
        <div class="buttons">
            <a href="../php/Signup_en.php" class="sign-up">Sign Up</a>
            <a href="../php/ChooseLogin_en.php" class="login">Login</a>
        </div>


    <?php endif; ?>
</div>