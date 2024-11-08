// user.js
const express = require('express');
const router = express.Router();
const conn = require('./connectDB'); // Đảm bảo bạn đã kết nối với cơ sở dữ liệu

// Route lấy thông tin người dùng
router.get('/profile', (req, res) => {
    if (req.session.userID) {
        const userID = req.session.userID;
        const sqlLogin = "SELECT * FROM `user` WHERE userID = ?";
        
        conn.query(sqlLogin, [userID], (err, results) => {
            if (err) {
                console.error("Query Error: " + err);
                return res.status(500).json({ error: "Database query error" });
            }

            if (results.length > 0) {
                const row = results[0];
                const userLogin = {
                    userID: row.userID,
                    userName: row.userName,
                    email: row.email,
                    image: row.image,
                    loginpassword: row.loginpassword,
                    birthday: row.birthday,
                    bio: row.bio,
                    country: row.country,
                    phone: row.phone
                };

                res.json(userLogin);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        });
    } else {
        res.status(403).json({ error: "Not logged in" });
    }
});

module.exports = router;
