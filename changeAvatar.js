const mysql = require('mysql');
const path = require('path');
const multer = require('multer');

// Cấu hình thư mục upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public/user')); // Sử dụng thư mục /public/user
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
    // console.log('Kết nối MySQL thành công!');
});

const changeAvatar = (req, res) => {
    const userID = req.body.userID;
    let sql;

    // Kiểm tra nếu người dùng chọn ảnh mặc định
    if (req.body.defaultImage) {
        const defaultImage = path.basename(req.body.defaultImage);
        sql = `UPDATE user SET image = ? WHERE userID = ?`;
        db.query(sql, [defaultImage, userID], (err) => {
            if (err) {
                console.error('Lỗi:', err.message);
                return res.status(500).send('Có lỗi xảy ra.');
            }
            // Cập nhật ảnh trong session
            req.session.userLogin.image = defaultImage;
            req.session.success_message = "Update Image Successfully";
            const website = 'Avatar.ejs';
            res.render('Avatar', { userLogin: req.session.userLogin, success_message: req.session.success_message, website });
        });
    } 
    // Kiểm tra xem có ảnh mới nào được tải lên không
    else if (req.file) {
        const imagePath = req.file.filename;
        sql = `UPDATE user SET image = ? WHERE userID = ?`;
        db.query(sql, [imagePath, userID], (err) => {
            if (err) {
                console.error('Lỗi:', err.message);
                return res.status(500).send('Có lỗi xảy ra.');
            }
            // Cập nhật ảnh trong session
            req.session.userLogin.image = imagePath;
            console.log(req.session.userLogin.image)
            req.session.success_message = "Update Image Successfully";
            const website = 'Avatar.ejs';
            res.render('Avatar', { userLogin: req.session.userLogin, success_message: req.session.success_message, website });
        });
    } else {
        res.status(400).send("Không có ảnh được chọn.");
    }
};

module.exports = { upload, changeAvatar };
