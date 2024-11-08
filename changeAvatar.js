const mysql = require('mysql');
const path = require('path');
const multer = require('multer');

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
            req.session.success_message = "Update Image Successfully";
            res.redirect('/Avatar');
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
            req.session.success_message = "Update Image Successfully";
            res.redirect('/Avatar');
        });
    } else {
        res.status(400).send("Không có ảnh được chọn.");
    }
};

module.exports = { upload, changeAvatar };
