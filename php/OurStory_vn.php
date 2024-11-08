<style>
    /* Global Styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        line-height: 1.6;
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
        font-size: 18px;
    }

    .navbar.desktop ul li .active {
        font-weight: 800;
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

    .btn {
        padding: 10px 20px;
        background-color: #ff5c5c;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
    }

    .btn-login {
        padding: 10px 20px;
        background-color: #f5f5f5;
        color: #ff5c5c;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
    }

    .logo img {
        max-width: 200px;
    }

    .img-user {
        border-radius: 50%;
        object-fit: cover;
    }

    .buttons a{
        margin: 0px 10px;
    }
</style>

<!-- Desktop Navbar -->
<div class="navbar desktop">
    <div class="logo">
        <img src="../images/logo.png" alt="Brick Shop Logo">
    </div>
    <ul>
        <li><a class="active" href="../en">Home</a></li>
        <li><a  href="../en/product.php">Products</a></li>
        <li><a href="../en/">Contact Us</a></li>
    </ul>

    <!-- Show Icon cart and Profile Avatar -->
    <?php if ($userLogin['userName']): ?>

        <!-- <li><a href="#">Welcome, Doraemon và những người bạn tuyệt vời</a></li> -->

        <!-- Show Icon cart  -->
        <!-- <button >Giỏ hàng</button> -->
        <div class="buttons">
            <a id="cartButton" class="fa-solid fa-cart-shopping fa-2xl btn-cart" style="color: #000000; padding-top:25px"></a>
            <!-- <label style="padding-right: 10px; padding-top:20px">Hi, Duy</label> -->

            <!-- Show Profile Avatar -->
            <?php if (!$userLogin['image']): ?>
                <a href="../en/General.php"><img class="img-user" src="../user/male.png" width="50" height="50"></a>
        </div>
    <?php else: ?>
        <a href="../en/General.php"><img class="img-user" src="../user/<?php echo $userLogin['image'] ?>" width="50" height="50"></a>
</div>
<?php endif ?>

<?php else: ?>

    <ul>
        <a href="../php/Signup_en.php" class="btn">Sign Up</a>
        <a href="../php/ChooseLogin_en.php" class="btn">Login</a>
    </ul>
    <!-- Show Profile Avatar -->

<?php endif; ?>
</div>