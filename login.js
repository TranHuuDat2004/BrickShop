// Import kết nối cơ sở dữ liệu và bcrypt
const conn = require('./connectDB');
const bcrypt = require('bcrypt');

// Hàm xử lý đăng nhập
const loginHandler = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.redirect('/login_again_en');
  }

  if (username === 'admin' && password === '1234') {
    req.session.username = 'admin.com';
    return res.redirect('/Admin/index');
  } else {
    conn.query(
      'SELECT * FROM `user` WHERE username = ?',
      [username],
      (err, results) => {
        if (err || results.length === 0) {
          const website = 'form_login_en.ejs';
          const userLogin = res.locals.userLogin;
          const successMessage = '';
          const errorMessage = 'Invalid username and password';
          return res.render('form_login_en', { website, userLogin, successMessage, errorMessage });
        }

        // Kiểm tra mật khẩu hash
        bcrypt.compare(password, results[0].loginpassword, (err, isMatch) => {
          if (err || !isMatch) {
            const website = 'form_login_en.ejs';
            const userLogin = res.locals.userLogin;
            const successMessage = '';
            const errorMessage = 'Invalid username and password';
            return res.render('form_login_en', { website, userLogin, successMessage, errorMessage });
          }

          // Lưu thông tin user vào session nếu mật khẩu khớp
          req.session.userLogin = {
            userID: results[0].userID,
            userName: results[0].userName,
            email: results[0].email,
            image: results[0].image,
            loginpassword: results[0].loginpassword,
            birthday: results[0].birthday,
            bio: results[0].bio,
            country: results[0].country,
            phone: results[0].phone
          };

          delete req.session.error0;
          return res.redirect('/');
        });
      }
    );
  }
};

// Export hàm để sử dụng ở file khác
module.exports = loginHandler;
