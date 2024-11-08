// Import kết nối cơ sở dữ liệu
const conn = require('./connectDB');

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
      'SELECT * FROM `user` WHERE username = ? AND loginpassword = ?',
      [username, password],
      (err, results) => {
        if (err) {
          console.error("Query Error: " + err);
          return res.redirect('/login_again_en');
        }

        if (results.length === 0) {
          req.session.error0 = 'Invalid username or password';
          return res.redirect('/login_again_en');
        } else {
          // Lưu thông tin user vào session
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
          console.log(req.session.userID)
          return res.redirect('/');
        }
      }
    );
  }
};

// Export hàm để sử dụng ở file khác
module.exports = loginHandler;
