// changeGeneral.js
const multer = require('multer');
const mysql = require('mysql');
const path = require('path');

// Cấu hình thư mục upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../user/'));
    },
    filename: (req, file, cb) => {
        cb(null, path.basename(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Kết nối MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'keeppley-shop'
});

db.connect((err) => {
    if (err) {
        console.error('Kết nối thất bại: ', err.message);
        return;
    }
    console.log('Kết nối MySQL thành công!');
});

// Hàm xử lý yêu cầu cập nhật thông tin người dùng
const changeGeneral = (req, res) => {
    const { userID, userName: newUserName, email: newEmail, defaultImage } = req.body;

    if (!userID) {
        return res.status(400).send('User ID không được cung cấp.');
    }

    // Cập nhật ảnh mặc định hoặc ảnh mới nếu có
    if (defaultImage) {
        const defaultImagePath = path.basename(defaultImage);
        const sqlUpdateImage = `UPDATE user SET image = ? WHERE userID = ?`;

        db.query(sqlUpdateImage, [defaultImagePath, userID], (err) => {
            if (err) {
                console.error('Lỗi:', err.message);
                return res.status(500).send('Có lỗi xảy ra.');
            }
        });
    } else if (req.file) {
        const imagePath = req.file.filename;
        const sqlUpdateImage = `UPDATE user SET image = ? WHERE userID = ?`;

        db.query(sqlUpdateImage, [imagePath, userID], (err) => {
            if (err) {
                console.error('Lỗi:', err.message);
                return res.status(500).send('Có lỗi xảy ra.');
            }
        });
    }

    // Cập nhật thông tin user
    const sqlUpdateUser = `UPDATE user SET userName = ?, email = ? WHERE userID = ?`;

    db.query(sqlUpdateUser, [newUserName, newEmail, userID], (err) => {
        if (err) {
            console.error('Lỗi:', err.message);
            return res.status(500).send('Có lỗi xảy ra.');
        }

        // Lấy thông tin mới nhất của người dùng từ cơ sở dữ liệu
        const sqlSelectUser = `SELECT * FROM user WHERE userID = ?`;
        db.query(sqlSelectUser, [userID], (err, result) => {
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
                birthday: result[0].birthday,
                bio: result[0].bio,
                country: result[0].country,
                phone: result[0].phone
            };

            // Truyền thông tin người dùng vào `res.render`
            const success_message = 'Update Information Successfully';
            const website = 'General.ejs';
            res.render('General', { userLogin: req.session.userLogin, website, success_message });
        });
    });
};

module.exports = { upload, changeGeneral };
