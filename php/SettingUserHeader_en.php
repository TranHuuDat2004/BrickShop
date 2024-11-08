<style>
    .img-user {
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
        <li><a href="../en/General.php"><img class="img-user" src="../user/male.png" width="50" height="50"></a></li>

    <?php else: ?>
        <li><a href="../en/General.php"><img class="img-user" src="../user/<?php echo $userLogin['image'] ?>" width="50" height="50"></a></li>
    <?php endif ?>

<?php else: ?>
    <!-- EN -->
    <li><a href="../php/Signup_en.php">Sign Up</a></li>
    <li><a href="../php/form_login_en.php">Login</a></li>
<?php endif; ?>