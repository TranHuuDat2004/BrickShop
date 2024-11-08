<header>
    <!-- Top Header with Logo, Search, and User Actions -->
    <div class="top-header">
        <div class="logo">
            <a href="../en/index.php">
                <img src="../images/logo.png" width="200" alt="Brick Shop Logo">
            </a>
        </div>

        <div class="search-bar">
            <input type="text" placeholder="Tìm kiếm sản phẩm">
            <button class="btn-search"><i class="fa fa-search"></i></button>
        </div>

        <div class="user-actions">
            <?php if ($userLogin['userName']): ?>
                <a href="../en/General.php"><img class="img-user" src="../user/<?php echo $userLogin['image'] ?>" width="50" height="50" alt="User Profile"></a>
                <a href="../en/cart.php" class="btn-cart"><i class="fa fa-shopping-cart"></i></a>
            <?php else: ?>
                <a href="../php/Signup_en.php" class="btn btn-sign-up">Sign Up</a>
                <a href="../php/ChooseLogin_en.php" class="btn btn-login">Login</a>
            <?php endif; ?>
        </div>
    </div>

    <!-- Bottom Header with Navigation Links -->
    <div class="bottom-header">
        <ul>
            <?php if ($website == 'index.php'): ?>
                <li><a class="active" href="../en/index.php">Trang chủ</a></li>
                <li><a href="../en/product.php">Sản phẩm</a></li>
                <li><a href="#">Liên hệ</a></li>
            <?php elseif ($website == 'contact.php'): ?>
                <li><a href="../en/index.php">Trang chủ</a></li>
                <li><a href="../en/product.php">Sản phẩm</a></li>
                <li><a class="active" href="#">Liên hệ</a></li>
            <?php else: ?>
                <li><a href="../en/index.php">Trang chủ</a></li>
                <li><a class="active" href="../en/product.php">Sản phẩm</a></li>
                <li><a href="#">Liên hệ</a></li>
            <?php endif; ?>
        </ul>
    </div>
</header>
<style>
  /* Global Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* General Body Styles */
body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
}

/* Top Header */
.top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.logo img {
    max-width: 200px;
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
}

.search-bar .btn-search {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

.user-actions {
    display: flex;
    align-items: center;
}

.user-actions .btn-sign-up,
.user-actions .btn-login {
    background-color: #ff5c5c;
    color: white;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    text-decoration: none;
}

.user-actions .btn-login {
    background-color: white;
    color: #ff5c5c;
    border: 1px solid #ff5c5c;
}

.user-actions .img-user {
    border-radius: 50%;
    margin-right: 10px;
}

.user-actions .btn-cart {
    background: none;
    border: none;
    font-size: 24px;
    color: #ff5c5c;
    margin-left: 20px;
}

/* Bottom Header - Navigation */
.bottom-header {
    background-color: black;
    text-align: center;
    padding: 10px 0;
}

.bottom-header ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

.bottom-header ul li {
    margin: 0 15px;
}

.bottom-header ul li a {
    color: white;
    font-size: 16px;
    text-decoration: none;
}

.bottom-header ul li a:hover,
.bottom-header ul li a.active {
    text-decoration: underline;
    font-weight: bold;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .top-header {
        flex-direction: column;
        text-align: center;
    }

    .user-actions {
        margin-top: 15px;
    }

    .bottom-header ul {
        flex-direction: column;
    }
}

</style>