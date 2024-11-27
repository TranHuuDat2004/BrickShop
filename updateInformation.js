const express = require('express');
const router = express.Router();
const conn = require('./connectDB'); // Đảm bảo bạn đã kết nối với cơ sở dữ liệu
const countryList = require('./countryList'); // Đường dẫn đến file countryList.js

router.post('/update-information', (req, res) => {
    const { userID, bio, address, country, phone } = req.body;

    const sql = "UPDATE User SET bio = ?, address = ?, country = ?, phone = ? WHERE userID = ?";
    conn.query(sql, [bio, address, country, phone, userID], (err) => {
        if (err) {
            console.log(err)
            console.error(err);
            return res.status(500).send("Error updating information.");
        }
        // Thông báo thành công
        error_message = ''
        success_message = "Cập nhật thông tin thành công!";

        // Lấy thông tin mới nhất của người dùng từ cơ sở dữ liệu
        const sqlSelectUser = `SELECT * FROM user WHERE userID = ?`;
        conn.query(sqlSelectUser, [userID], (err, result) => {
            if (err) {
                console.error('Lỗi:', err.message);
                return res.status(500).send('Có lỗi xảy ra.');
            }

            // Gán lại tất cả thông tin của userLogin vào session
            req.session.userLogin = {
                userID: result[0].userID,
                userName: result[0].userName,
                email: result[0].email,
                image: result[0].image,
                loginpassword: result[0].loginpassword,
                address: result[0].address,
                bio: result[0].bio,
                country: result[0].country,
                phone: result[0].phone
            };

            // Truyền thông tin người dùng vào `res.render`
            const success_message = 'Update Information Successfully';
            const website = 'Information.ejs';
            res.render('Information', { userLogin: req.session.userLogin, website, success_message, countryList });
        });
    });
});

module.exports = router;
