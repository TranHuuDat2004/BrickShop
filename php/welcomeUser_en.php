<style>
    .img-user {
        margin-top: 15px;
        border-radius: 50%;
        object-fit: cover;
    }

    .btn-sign-up {
        display: block;
        background-color: #e0f7fa;
        height: 40px;
        font-size: 16px;
        font-weight: 700;
        border-radius: 20px;
        padding: 0px 12px;
        position: relative;
        
    }

    .btn-sign-up:hover {
        background-color: #b2ebf2;
        text-decoration: none;

    }

    .txt-sign-up {
        top: 20%;
        left: 50%;
        transform: translate(-2%, -25%);
        margin-top: 0;
        padding-left: 12px;
        padding-right: 12px
    }

    .txt-sign-up:hover {
        color: #fff;
        text-decoration: none; /* Tắt gạch ngang */
    }

    .btn-login {
        background-color: #212121;
        display: block;
        height: 40px;
        font-size: 16px;
        font-weight: 700;
        border-radius: 20px;
        padding: 0px 12px;
        position: relative;
    }

    .btn-login:hover {
        background-color: #616161;
        text-decoration: none;

    }

    .txt-login {
        top: 20%;
        left: 50%;
        transform: translate(-2%, -25%);
        margin-top: 0;
        padding-left: 12px;
        padding-right: 12px;
        color: #fff
    }

    /* Container chứa hai nút */
div.container-buttons {
    display: flex;
    justify-content: center; /* Căn giữa theo chiều ngang */
    gap: 20px; /* Khoảng cách giữa hai nút */
}

.btn-sign-up, .btn-login {
    display: inline-block; /* Đặt inline-block để hai nút nằm ngang */
    margin-right: 20px; /* Khoảng cách giữa hai nút */
}

.txt-sign-up, .txt-login {
    padding-bottom: 10px; /* Tăng khoảng cách với border hoặc gạch ngang */
}

.txt-sign-up:hover, .txt-login:hover {
    text-decoration: none; /* Tắt gạch ngang nếu có */
    padding-bottom: 10px;  /* Hoặc thêm khoảng cách dưới chữ */
}

</style>

<li><a href="../en/<?php echo $website ?>" class="cur">EN</a></li>
<li><a href="../vn/<?php echo $website ?>">VN</a></li>

<!-- Show Icon cart and Profile Avatar -->
<?php if ($userLogin['userName']): ?>

    <!-- <li><a href="#">Welcome, Doraemon và những người bạn tuyệt vời</a></li> -->

    <!-- Show Icon cart  -->
    <!-- <button >Giỏ hàng</button> -->
    <li><a id="cartButton" class="fa-solid fa-cart-shopping btn-cart" style="color: #000000;"></a> </li>

    <!-- Show Profile Avatar -->
    <?php if (!$userLogin['image']): ?>
        <li><a href="../en/General.php"><img class="img-user" src="../user/male.png" width="50" height="50"></a></li>

    <?php else: ?>
        <li><a href="../en/General.php"><img class="img-user" src="../user/<?php echo $userLogin['image'] ?>" width="50" height="50"></a></li>
    <?php endif ?>

<?php else: ?>
    <div class="container-buttons">
    <div style="margin-top: 20px;">
        <a href="../php/ChooseLogin_en.php" class="btn-sign-up">
            <div class="txt-sign-up">
                Sign Up
            </div>
        </a>
    </div>

    <div style="margin-top: 20px;">
        <a class="btn-login" href="../php/ChooseLogin_en.php">
            <div class="txt-login">
                Login
            </div>
        </a>
    </div>
</div>


<?php endif; ?>