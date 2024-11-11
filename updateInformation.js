const express = require('express');
const router = express.Router();
const conn = require('./connectDB');
const countryList = require('./countryList'); // Đường dẫn đến file countryList.js

router.post('/update-information', (req, res) => {
    const { userID, bio, birthday, country, phone } = req.body;

    const sql = "UPDATE User SET bio = ?, birthday = ?, country = ?, phone = ? WHERE userID = ?";
    conn.query(sql, [bio, birthday, country, phone, userID], (err) => {
        if (err) {
            console.log(err)
            console.error(err);
            return res.status(500).send("Error updating information.");
        }
        // Thông báo thành công
        error_message = ''
        success_message = "Cập nhật thông tin thành công!";
        // Cập nhật ảnh trong session
        const website = 'Password.ejs';
        res.render('Information', { userLogin: req.session.userLogin, countryList, error_message, success_message, website });
    });
});

module.exports = router;
