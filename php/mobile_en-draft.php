<div class="navLayer">

    <div class="bg">
        <div class="toptop ">
            <a href="../en/product.php" class="logo"><img src="../images/logo.png" alt="Qman Toys"></a>

            <div class="txt">Home</div>
            <a style="padding-top: 20px;" href="javascript:;" class="closeBtn"><img src="../images/close.png" /></a>
        </div>
        <div class="sideNav">
            <div class="subNav"><a href="../en"><img src="../images/20220825135842913.png" alt="">Our Story</a></div>
            <div class="subNav"><a href="../en/product.php"><img src="../images/20220825135859657.png" alt="">Our
                    Products</a></div>

            <div class="subNav"><a href="../en/Contact/"><img src="../images/20220825135930547.png" alt="">Contact
                    Us</a></div>



            <!-- Show Icon cart and Profile Avatar -->
            <?php if ($userLogin['userName']): ?>

                <!-- <li><a href="#">Welcome, Doraemon và những người bạn tuyệt vời</a></li> -->

                <!-- Show Icon cart  -->
                <!-- <button >Giỏ hàng</button> -->
                <div class="subNav"><a href="../php/ChooseLogin_en.php"><img src="../images/cart.png" alt="">View Cart</a></div>

                <!-- Show Profile Avatar -->
                <?php if (!$userLogin['image']): ?>
                    <div class="subNav"><a href="../en/General.php"><img class="img-user" src="../images/user.png" alt=""
                                >Profile</a></div>

                <?php else: ?>
                    <div class="subNav"><a href="../en/General.php"><img class="img-user"
                                src="../images/user.png" alt="" >Profile</a></div>
                <?php endif ?>

            <?php else: ?>
                <!-- EN -->
                <div class="subNav"><a href="../php/Signup_en.php"><img src="../images/signup.png" alt="">Sign up</a></div>
                <div class="subNav"><a href="../php/ChooseLogin_en.php"><img src="../images/user.png" alt="">Login</a></div>
            <?php endif; ?>
        </div>
        <div class="lan">
            <ul>
                <li><a href="../en/<?php echo $website ?>" class="cur">EN</a></li>
                <li><a href="../vn/<?php echo $website ?>">VN</a></li>

            </ul>
        </div>
    </div>

</div>

<Style>
    .subNav {
        padding: 10px;
    }
</Style>

<script>
    document.querySelector('.hamburger-menu').addEventListener('click', function () {
        document.querySelector('.navLayer').classList.toggle('open');
    });

</script>