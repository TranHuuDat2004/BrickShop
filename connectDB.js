const mysql = require('mysql');

// Tạo kết nối cơ sở dữ liệu
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'keeppley-shop'
});

// Kết nối với cơ sở dữ liệu
conn.connect((err) => {
  if (err) {
    console.error("Connection Failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

// Export kết nối để có thể sử dụng trong các file khác
module.exports = conn;
