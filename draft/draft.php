<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Detail</title>
    <link rel="stylesheet" href="styles.css">
    <?php include '../php/head.php'; ?>
    <?php include '../php/login.php'; ?>
    <?php include '../php/getUser.php'; ?>
</head>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    .product-detail {
        display: flex;
        margin: 20px;
    }

    .product-images {
        flex: 1;
        margin-right: 20px;
    }

    .product-images .main-image img {
        width: 100%;
        height: auto;
    }

    .thumbnail-images {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    .thumbnail-images img {
        width: 32%;
        cursor: pointer;
    }

    .product-info {
        flex: 2;
    }

    .product-info h1 {
        font-size: 2em;
        margin-bottom: 10px;
    }

    .price {
        font-size: 1.5em;
        color: #333;
        margin-bottom: 10px;
    }

    .description {
        margin-bottom: 20px;
    }

    .size-options,
    .color-options,
    .quantity-selector {
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-right: 10px;
    }

    select,
    input[type="number"] {
        padding: 5px;
        font-size: 1em;
    }

    .quantity-selector {
        display: flex;
        align-items: center;
    }

    .quantity-selector button {
        padding: 5px 10px;
        font-size: 1em;
        border: 1px solid #ddd;
        background-color: #f7f7f7;
        cursor: pointer;
    }

    .quantity-selector input {
        text-align: center;
        border: 1px solid #ddd;
        width: 50px;
        margin: 0 5px;
    }

    .buttons {
        display: flex;
        gap: 10px;
    }

    .add-to-cart,
    .buy-now {
        padding: 10px 20px;
        font-size: 1em;
        border: none;
        cursor: pointer;
    }

    .add-to-cart {
        background-color: #ff4081;
        color: #fff;
    }

    .buy-now {
        background-color: #333;
        color: #fff;
    }
</style>

<body>
    <header>
    
    <div class="headDiv home">
        <?php include '../php/header_en.php'; ?>
        <div class="lan">
            <ul>
                <li><a href="#" class="cur">EN</a></li>
                <li><a href="../vn/product.php">VN</a></li>

                <?php include '../php/welcomeUser_en.php'; ?>
            </ul>
        </div>
    </div>
    </div>
    <!---->
    <div class="navLayer">
        <div class="bg">
            <div class="toptop">
                <a href="/en" class="logo"><img src="../images/20221010151821394.png" alt="Qman Toys"></a>
                <div class="txt">Home</div>
                <a href="javascript:;" class="closeBtn"><img src="/images/close.png"></a>
            </div>

            <div class="lan">
                <ul>
                    <li><a href="javascript:;" class="cur">EN</a></li>

                </ul>
            </div>
        </div>
    </div>
    <!---->
    </header>
    <main>
        <div class="product-detail">
            <div class="product-images">
                <div class="main-image">
                    <img src="path_to_main_image.jpg" alt="Product Image">
                </div>
                <div class="thumbnail-images">
                    <img src="path_to_thumbnail1.jpg" alt="Thumbnail 1">
                    <img src="path_to_thumbnail2.jpg" alt="Thumbnail 2">
                    <img src="path_to_thumbnail3.jpg" alt="Thumbnail 3">
                </div>
            </div>
            <div class="product-info">
                <h1>LEGO 70365 Axl</h1>
                <p class="price">$12.99</p>
                <p class="description">
                    Features a buildable battle suit with highly posable limbs and a minifigure cockpit...
                </p>
                <div class="size-options">
                    <label for="size">Size:</label>
                    <select id="size" name="size">
                        <option value="S">Size S</option>
                        <option value="M">Size M</option>
                        <option value="L">Size L</option>
                        <option value="XL">Size XL</option>
                    </select>
                </div>
                <div class="color-options">
                    <label for="color">Color:</label>
                    <select id="color" name="color">
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                    </select>
                </div>
                <div class="quantity-selector">
                    <button class="minus">-</button>
                    <input type="number" value="1" min="1">
                    <button class="plus">+</button>
                </div>
                <div class="buttons">
                    <button class="add-to-cart">Add to Cart</button>
                    <button class="buy-now">Buy It Now</button>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <!-- Add your footer content here -->
    </footer>
    <script src="../script/js.js"></script>
    <script>
        document.querySelector('.minus').addEventListener('click', function () {
            var qty = document.querySelector('input[type="number"]').value;
            if (qty > 1) {
                document.querySelector('input[type="number"]').value = parseInt(qty) - 1;
            }
        });

        document.querySelector('.plus').addEventListener('click', function () {
            var qty = document.querySelector('input[type="number"]').value;
            document.querySelector('input[type="number"]').value = parseInt(qty) + 1;
        });

    </script>
</body>

</html>