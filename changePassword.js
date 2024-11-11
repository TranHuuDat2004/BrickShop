const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const conn = require('./connectDB'); // Đảm bảo bạn đã kết nối với cơ sở dữ liệu


router.post('/change-password', async (req, res) => {
    const { userID, current_password, new_password, repeat_new_password } = req.body;

    // Xóa thông báo trước đó
    req.session.success_message = null;
    req.session.error_pass0 = null;
    req.session.error_pass1 = null;

    try {
        // 1. Lấy mật khẩu hiện tại từ cơ sở dữ liệu
        const sql = "SELECT loginpassword FROM User WHERE userID = ?";
        conn.query(sql, [userID], async (err, results) => {
            if (err) {
                console.error("Lỗi truy vấn:", err);
                return res.status(500).send("Có lỗi xảy ra.");
            }

            if (results.length === 0) {
                req.session.error_pass0 = "Tài khoản không tồn tại.";
                return res.redirect('/change-password');
            }

            const hashedPassword = results[0].loginpassword;

            // 2. Kiểm tra mật khẩu hiện tại
            const isMatch = await bcrypt.compare(current_password, hashedPassword);
            if (!isMatch) {
                error_message = "Mật khẩu hiện tại không đúng.";
                success_message = ''
                const website = 'Password.ejs';
                res.render('Password', { userLogin: req.session.userLogin, error_message, success_message, website });
            }

            // 3. Kiểm tra mật khẩu mới và mật khẩu xác nhận
            if (new_password !== repeat_new_password) {
                error_message = "Mật khẩu mới không khớp.";
                success_message = ''
                const website = 'Password.ejs';
                res.render('Password', { userLogin: req.session.userLogin, error_message, success_message, website });

            }

            // 4. Mã hóa và cập nhật mật khẩu mới
            const newHashedPassword = await bcrypt.hash(new_password, 10);
            const updateSql = "UPDATE User SET loginpassword = ? WHERE userID = ?";
            conn.query(updateSql, [newHashedPassword, userID], (updateErr) => {
                if (updateErr) {
                    console.error("Lỗi cập nhật mật khẩu:", updateErr);
                    return res.status(500).send("Có lỗi xảy ra.");
                }

                // Thông báo thành công
                error_message = ''
                success_message = "Cập nhật mật khẩu thành công!";
                // Cập nhật ảnh trong session
                const website = 'Password.ejs';
                res.render('Password', { userLogin: req.session.userLogin, error_message, success_message, website });
            });
        });
    } catch (err) {
        console.error("Lỗi hệ thống:", err);
        res.status(500).send("Có lỗi xảy ra.");
    }
});

module.exports = router;
