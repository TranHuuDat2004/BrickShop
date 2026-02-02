const mysql = require('mysql2');
const fs = require('fs');

// Tạo kết nối cơ sở dữ liệu
const conn = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'keeppley-shop',
  port: process.env.DB_PORT || 3306,
  ssl: process.env.DB_SSL === 'true'
    ? (process.env.DB_SSL_CA_PATH ? { ca: fs.readFileSync(process.env.DB_SSL_CA_PATH) } : { rejectUnauthorized: false })
    : undefined,
  connectTimeout: 10000
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
