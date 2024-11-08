<!-- You can add this CSS for better styling -->
<style>
    footer a {
        color: #000;
        text-decoration: none;
        font-size: 14px;
        padding-bottom: 30px
    }

    footer p {
        color: #000;
        text-decoration: none;
        font-size: 14px;
        padding-bottom: 30px;
        padding-top: 18px
    }

    footer a:hover {
        text-decoration: underline;
        padding-bottom: 30px
    }

    footer i {
        margin: 0 5px;
        font-size: 14px;
    }

    footer input[type="email"] {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding-bottom: 30px
    }

    footer button {
        border-radius: 4px;
        padding-bottom: 30px
    }

    .label-footer {
        font-weight: bold;
        font-size: 18px;
    }

    .footer-column {
        flex: 1 1 200px;
        max-width: 15%;
        background-color: #f5f5f5;
    }

    @media only screen and (max-width: 600px) {
        .footer-column {
            flex: 1 1 100px;
            /* Giảm xuống còn 100px cho màn hình nhỏ */
            max-width: 100%;
            /* Chiếm 100% chiều rộng của màn hình */
        }

        footer p {
            color: #000;
            text-decoration: none;
            font-size: 12px;
            padding-bottom: 30px;
            padding-top: 18px;
        }

        footer i {
            margin: 0 5px;
            font-size: 12px;
        }

        .label-footer {
            font-weight: bold;
            font-size: 12px;
        }

        .f-cute {
            width: 75%;
        }

        footer input[type="email"] {
            border: 1px solid #ccc;
            border-radius: 4px;
            padding-bottom: 30px;
            width: 250px;
        }
    }
</style>

<footer style="padding: 20px 0; font-family: Arial, sans-serif; font-size:20px ">
        <div style="display: flex; justify-content: center; align-items: center;">
            <img src="../images/17.png" alt="" class="f-cute">
        </div>
        <div
            style="background-color: #f5f5f5; display: flex; justify-content: space-around; flex-wrap: wrap; padding-left:30px">
            <!-- PHÁP LÝ -->
            <div class="footer-column">
                <p class="label-footer">PHÁP LÝ</p>
                <ul style="list-style: none; padding-left: 0;">
                    <li><a href="#">Câu hỏi thường gặp</a></li>
                    <li><a href="#">Nhà bán lẻ</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                    <li><a href="#">Cookie</a></li>
                </ul>
            </div>

            <!-- DỊCH VỤ -->
            <div class="footer-column">
                <p class="label-footer">DỊCH VỤ</p>
                <ul style="list-style: none; padding-left: 0;">
                    <li><a href="#">Theo dõi đơn hàng</a></li>
                    <li><a href="#">Trả hàng</a></li>
                    <li><a href="#">Giao hàng</a></li>
                    <li><a href="#">Câu hỏi thường gặp</a></li>
                </ul>
            </div>

            <!-- LIÊN HỆ -->
            <div class="footer-column">
                <p class="label-footer">LIÊN HỆ</p>
                <p>Bất kỳ câu hỏi nào? Hãy cho chúng tôi biết tại cửa hàng tại tầng 8, 379 Hudson St, New York, NY 10018
                    <br> hoặc gọi chúng tôi theo số (+1) 96 716 6879
                </p>
                <div>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>

            <!-- ĐĂNG KÝ NHẬN TIN -->
            <div class="footer-column">
                <p class="label-footer">ĐĂNG KÝ NHẬN TIN</p>
                <input type="email" placeholder="email@example.com"
                    style="width: 150px; padding: 10px; margin-bottom: 10px;">
                <button
                    style="background-color: #ff4081; color: white; padding: 10px 20px; border: none; cursor: pointer;">ĐĂNG
                    KÝ</button>
            </div>
        </div>

        <div style="text-align: center; background-color: #f5f5f5;">
            <img src="../icons/icon-pay-01.png" alt="Phương thức thanh toán" style="margin-top: 10px;">
            <img src="../icons/icon-pay-02.png" alt="Phương thức thanh toán" style="margin-top: 10px;">
            <img src="../icons/icon-pay-03.png" alt="Phương thức thanh toán" style="margin-top: 10px;">
            <img src="../icons/icon-pay-04.png" alt="Phương thức thanh toán" style="margin-top: 10px;">
            <img src="../icons/icon-pay-05.png" alt="Phương thức thanh toán" style="margin-top: 10px;">
            <p>&copy; 2024 Bản quyền thuộc về Group 5 | Tạo bởi <i class="fas fa-heart"></i> Group 5</p>
        </div>
    </footer>