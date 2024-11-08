<?php 
include 'login.php';

// Chưa đăng nhập 
if (isset($_SESSION["adminID"])){
    $adminID = $_SESSION["adminID"];
    // print_r($userName);
    $sqlLogin = "SELECT * FROM `Admin` WHERE adminID = '$adminID' ";
    $queryLogin = mysqli_query($conn, $sqlLogin);
    // print_r($queryLogin);
    // Kiểm tra kết quả truy vấn

    // Duyệt qua từng hàng dữ liệu từ kết quả truy vấn
    $row = $queryLogin->fetch_assoc();
    // Thêm thông tin từng hàng vào mảng $userLogin
    $userLogin = array(
        "adminID" => $row["adminID"],
        "userName" => $row["userName"],
        "email" => $row["email"],
        "image" => $row["image"],
        "loginpassword" => $row["loginpassword"],
        "birthday" => $row["birthday"],
        "bio" => $row["bio"],
        "country" => $row["country"],
        "phone" => $row["phone"]
    );
}

else {    
    // Chưa đăng nhập 
    header('Location: login_admin_en.php');
    exit();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Account Settings - Bootdey.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php include 'head_setting.php'; ?>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Offline -->
    <link href="../style/bootstrap_4.5.0.css" rel="stylesheet">
    <!-- Thêm favicon vào đây -->
    <link rel="icon" href="../images/keeppley_logo.webp" type="image/x-icon">

    <style type="text/css">
        body {
            background: #f5f5f5;
            margin-top: 20px;
        }

        .ui-w-80 {
            width: 80px !important;
            height: auto;
        }

        .btn-default {
            border-color: rgba(24, 28, 33, 0.1);
            background: rgba(0, 0, 0, 0);
            color: #4E5155;
        }

        label.btn {
            margin-bottom: 0;
        }

        .btn-outline-primary {
            border-color: #26B4FF;
            background: transparent;
            color: #26B4FF;
        }

        .btn {
            cursor: pointer;
        }

        .text-light {
            color: #babbbc !important;
        }

        .btn-facebook {
            border-color: rgba(0, 0, 0, 0);
            background: #3B5998;
            color: #fff;
        }

        .btn-instagram {
            border-color: rgba(0, 0, 0, 0);
            background: #000;
            color: #fff;
        }

        .card {
            background-clip: padding-box;
            box-shadow: 0 1px 4px rgba(24, 28, 33, 0.012);
        }

        .row-bordered {
            overflow: hidden;
        }

        .account-settings-fileinput {
            position: absolute;
            visibility: hidden;
            width: 1px;
            height: 1px;
            opacity: 0;
        }

        .account-settings-links .list-group-item.active {
            font-weight: bold !important;
        }

        html:not(.dark-style) .account-settings-links .list-group-item.active {
            background: transparent !important;
        }

        .account-settings-multiselect~.select2-container {
            width: 100% !important;
        }

        .light-style .account-settings-links .list-group-item {
            padding: 0.85rem 1.5rem;
            border-color: rgba(24, 28, 33, 0.03) !important;
        }

        .light-style .account-settings-links .list-group-item.active {
            color: #4e5155 !important;
        }

        .material-style .account-settings-links .list-group-item {
            padding: 0.85rem 1.5rem;
            border-color: rgba(24, 28, 33, 0.03) !important;
        }

        .material-style .account-settings-links .list-group-item.active {
            color: #4e5155 !important;
        }

        .dark-style .account-settings-links .list-group-item {
            padding: 0.85rem 1.5rem;
            border-color: rgba(255, 255, 255, 0.03) !important;
        }

        .dark-style .account-settings-links .list-group-item.active {
            color: #fff !important;
        }

        .light-style .account-settings-links .list-group-item.active {
            color: #4E5155 !important;
        }

        .light-style .account-settings-links .list-group-item {
            padding: 0.85rem 1.5rem;
            border-color: rgba(24, 28, 33, 0.03) !important;
        }

        .btn-cancel:hover {
            background-color: #f5f5f5;
        }
    </style>

    <script>
        function previewImage(event, previewId) {
            const file = event.target.files[0];
            const preview = document.getElementById(previewId);

            if (file) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                }

                reader.readAsDataURL(file);
            } else {
                preview.src = '#';
                preview.style.display = 'none';
            }
        }
    </script>
</head>

<body inmaintabuse="1">
    <div class="headD">
        <div class="headDiv home">
            <!-- Important -->
            <div class="wal">
                <a href="index.php" class="logo">
                    <img src="../images/20221010151814746.png" class="PC-Box" alt="Qman Toys">
                    <!-- <img src="../images/20221010151814746.png" class="Phone-Box" alt="Qman Toys"> -->
                </a>

                <div class="lan">
                    <ul>
                        <!-- Show Icon cart  -->
                        <!-- <li><a href="../en/product.php" class="fa-solid fa-house btn-cart" style="color: #000000;"></a> </li> -->

                        <li><a href="javascript:;" class="cur">EN</a></li>
                        <li><a href="../vn/product.php">VN</a></li>

                        <!-- Header Account Settings -->
                        <?php include 'SettingAdminHeader_en.php'; ?>

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
                <div class="sideNav">
                    <div class="subNav"><a href="/en"><img src="/../images/20220825135842913.png" alt="">Our Story</a>
                    </div>
                    <div class="subNav"><a href="/en/product/"><img src="/../images/20220825135859657.png" alt="">Our
                            Products</a></div>

                    <div class="subNav"><a href="/en/Contact/"><img src="/../images/20220825135930547.png"
                                alt="">Contact
                            Us</a></div>
                </div>
                <div class="lan">
                    <ul>
                        <li><a href="javascript:;" class="cur">EN</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!---->
    <div style="margin-top:80px" class="container light-style flex-grow-1 container-p-y">
        <h4 class="font-weight-bold py-3 mb-4">
            Admin settings
        </h4>
        <div class="card overflow-hidden">
            <div class="row no-gutters row-bordered row-border-light">
                <div class="col-md-3 pt-0">
                    <div class="list-group list-group-flush account-settings-links">
                        <a class="list-group-item list-group-item-action " href="general.php">General</a>
                        <a class="list-group-item list-group-item-action active" href="Password.php">Change
                            password</a>
                        <a class="list-group-item list-group-item-action" href="Information.php">Information</a>
                        <a class="list-group-item list-group-item-action" href="SocialLinks.php">Social links</a>
                        <a class="list-group-item list-group-item-action" href="Connections.php">Connections</a>
                        <a class="list-group-item list-group-item-action" href="Notifications.php">Notifications</a>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="tab-content">
                        <div class="tab-pane fade active show" id="account-change-password">
                            <div class="card-body pb-2">

                                <?php
                                if (isset($_SESSION['success_message'])) {
                                    echo '<div class="alert alert-success">' . $_SESSION['success_message'] . '</div>';
                                    unset($_SESSION['success_message']); // Xóa thông báo sau khi hiển thị
                                }
                                ?>

                                <form action="ChangePassword.php" method="POST" id="accountForm">
                                    <div class="form-group">
                                        <input type="hidden" name="AdminID" value="<?php echo $userLogin['adminID']; ?>">
                                        <label class="form-label">Current password</label>
                                        <div class="input-group">
                                            <input type="password" class="form-control" name="current_password"
                                                id="currentPassword" required>
                                        </div>
                                        <input type="checkbox" onclick="togglePasswordVisibility('currentPassword')">
                                        Show Password

                                        <!-- Kiểm tra mật khẩu -->
                                        <?php
                                        if (isset($_SESSION['error-pass0'])) {
                                            echo '<div style="color: red; font-size:14px">' . $_SESSION['error-pass0'] . '</div>';
                                            unset($_SESSION['error-pass0']); // Xóa thông báo sau khi hiển thị
                                        }
                                        ?>
                                    </div>



                                    <div class="form-group">
                                        <label class="form-label">New password</label>
                                        <div class="input-group">
                                            <input type="password" class="form-control" name="new_password"
                                                id="newPassword" required>
                                        </div>
                                        <input type="checkbox" onclick="togglePasswordVisibility('newPassword')"> Show
                                        Password

                                        <!-- Kiểm tra mật khẩu mới -->
                                        <?php
                                        if (isset($_SESSION['error-pass1'])) {
                                            echo '<div style="color: red; font-size:14px">' . $_SESSION['error-pass1'] . '</div>';
                                            unset($_SESSION['error-pass1']); // Xóa thông báo sau khi hiển thị
                                        }
                                        ?>
                                    </div>



                                    <div class="form-group">
                                        <label class="form-label">Repeat new password</label>
                                        <div class="input-group">
                                            <input type="password" class="form-control" name="repeat_new_password"
                                                id="repeatNewPassword" required>
                                        </div>
                                        <input type="checkbox" onclick="togglePasswordVisibility('repeatNewPassword')">
                                        Show Password
                                    </div>
                                    <div class="text-right mt-3">
                                    <button style="margin-bottom:30px; margin-right:30px" type="submit"
                                        class="btn btn-primary">Save changes</button>
                                    <button style="margin-bottom:30px; margin-right:30px" type="button"
                                        class="btn btn-default btn-cancel" id="cancelButton">Cancel</button>
                                    <!-- Nút Đăng Xuất -->
                                    <a style="margin-bottom:30px; margin-right:30px" href="logout.php"
                                        class="btn btn-danger">Logout</a>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        function togglePasswordVisibility(inputId) {
            var input = document.getElementById(inputId);
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
        }

        let isFormDirty = false;

        document.querySelectorAll('input').forEach((input) => {
            input.addEventListener('change', () => {
                isFormDirty = true;
            });
        });

        document.getElementById('accountForm').addEventListener('submit', function () {
            isFormDirty = false;
        });

        document.getElementById('cancelButton').addEventListener('click', function () {
            isFormDirty = false;
            location.reload();
        });

        window.addEventListener('beforeunload', function (e) {
            if (isFormDirty) {
                const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave this page?';
                e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
                return confirmationMessage; // Gecko, WebKit, Chrome <34
            }
        });
    </script>
</body>

</html>