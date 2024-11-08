<style>
    .img-user {
        margin-top: 15px;
        border-radius: 50%;
        object-fit: cover;
    }
</style>


<!-- Show Icon cart and Profile Avatar -->
<?php if ($userLogin['userName']): ?>

    <!-- <li><a href="#">Welcome, Doraemon và những người bạn tuyệt vời</a></li> -->

    <!-- Show Icon cart  -->
    <li><a href="../en/doraemon.php" class="fa-solid fa-cart-shopping btn-cart" style="color: #000000;"></a> </li>

    <!-- Show Profile Avatar -->
    <?php if (!$userLogin['image']): ?>
        <li><a href="#"><img class="img-user" src="../user/male.png" width="50" height="50"></a></li>

    <?php else: ?>
        <li><a href="#"><img class="img-user" src="../user/<?php echo $userLogin['image'] ?>" width="50" height="50"></a></li>
    <?php endif ?>

<?php else: ?>

    <!-- VN -->
    <li><a href="../php/Signup_vn.php">Đăng kí</a></li>
    <li><a href="../php/ChooseLogin_vn.php">Đăng nhập</a></li>
<?php endif; ?>