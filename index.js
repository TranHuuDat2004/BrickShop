// Import các thư viện cần thiết
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); // Import express-session
const bcrypt = require('bcrypt');

const conn = require('./connectDB');

// Khởi tạo ứng dụng Express
const app = express();

// Cấu hình view engine là EJS
app.set('view engine', 'ejs');

// Cấu hình thư mục views và engine
app.set('views', path.join(__dirname, 'views'));


// Lấy thư mục ảnh
app.use(express.static(path.join(__dirname, 'public')));

// Hàm để phục vụ tệp hình ảnh
const getImage = (res, imagePath) => {
  // Xác định kiểu nội dung dựa trên phần mở rộng tệp
  const extname = String(path.extname(imagePath)).toLowerCase();
  const mimeTypes = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    // Thêm các kiểu MIME khác nếu cần
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(getMessageHTML('Hình ảnh không tồn tại!', true));
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true
}));

// --------------------------------------------------------------------------- //

const loginHandler = require('./login'); // Import loginHandler từ login.js

// Sử dụng loginHandler cho route /login
app.post('/login', loginHandler);

const changePasswordRouter = require('./changePassword'); // Đảm bảo đường dẫn chính xác

// Sử dụng route mới
app.use('/', changePasswordRouter);

const userRoutes = require('./user'); // Nhập file user.js
// Sử dụng các route từ user.js
app.use(userRoutes);

// Middleware auth_user, duy trì đăng nhập
function auth_user(req, res, next) {
  res.locals.userLogin = req.session.userLogin || null; // Gắn `userLogin` vào `res.locals`
  res.locals.success_message = req.session.success_message || null; // Gắn `userLogin` vào `res.locals`
  next();
}

// Định nghĩa route với middleware auth_user
app.get('/', auth_user, (req, res) => {
  const website = 'index.ejs'; // Lấy tên file từ URL
  const userLogin = res.locals.userLogin
  console.log(userLogin)
  res.render('index', { website, userLogin });
});

app.get('/index', auth_user, (req, res) => {
  const website = 'index.ejs'; // Lấy tên file từ URL
  const userLogin = res.locals.userLogin
  console.log(userLogin)
  res.render('index', { website, userLogin });
});

app.get('/head', auth_user, (req, res) => {
  res.render('head');
});

app.get('/ChooseLogin_en', auth_user, (req, res) => {
  const website = 'ChooseLogin_en.ejs'; // Lấy tên file từ URL
  const userLogin = res.locals.userLogin
  res.render('ChooseLogin_en', { website, userLogin });
});


app.get('/404', auth_user, (req, res) => {
  const website = '404.ejs';
  const userLogin = res.locals.userLogin
  res.render('404', { website, userLogin });
});

// Route xử lý '/Category_Product' với middleware auth_user
app.get('/Category_Product', auth_user, (req, res) => {
  const website = 'Category_Product.ejs';
  const userLogin = res.locals.userLogin;
  const id = req.query.id; // Lấy `id` từ query parameter

  // Truy vấn chi tiết danh mục dựa trên `id`
  const sqlCategory = "SELECT * FROM `category` WHERE `id` = ?";
  conn.query(sqlCategory, [id], (err, resultCategory) => {
    if (err) {
      console.error("Error querying database: " + err.stack);
      return res.status(500).send("Database query error");
    }

    if (resultCategory.length > 0) {
      const category = resultCategory[0];
      const categoryNameEn = category.name_en;
      const categoryImages = category.images.split(',').map(img => img.trim());

      // Truy vấn chi tiết sản phẩm dựa trên `p_category`
      const sqlProduct = "SELECT * FROM `product` WHERE `p_category` = ?";
      conn.query(sqlProduct, [categoryNameEn], (err, resultProduct) => {
        if (err) {
          console.error("Error querying products: " + err.stack);
          return res.status(500).send("Database query error");
        }

        // Gán kết quả vào mảng `products`
        const products = resultProduct.map(row => ({
          id: row.p_id,
          number: row.p_number,
          image: row.p_image,
          nameEn: row.p_name_en,
          nameVn: row.p_name_vn,
          priceEn: row.p_price_en,
          priceVn: row.p_price_vn,
          tutorial: row.p_tutorial,
          category: row.p_category,
          description: row.p_description,
          images: row.p_image ? row.p_image.split(',').map(img => img.trim()) : []
        }));

        // Truy vấn để xác định nhà cung cấp
        const sqlProvider = "SELECT * FROM `category` WHERE `name_en` = ?";
        conn.query(sqlProvider, [categoryNameEn], (err, resultProvider) => {
          if (err) {
            console.error("Error querying provider: " + err.stack);
            return res.status(500).send("Database query error");
          }

          let categoryWebsite = '';
          if (resultProvider.length > 0) {
            const provider = resultProvider[0].provider;
            if (provider === 'Keeppley') {
              categoryWebsite = 'Keeppley-Products.php';
            } else if (provider === 'Qman') {
              categoryWebsite = 'Qman-Products.php';
            } else if (provider === 'LEGO') {
              categoryWebsite = 'LEGO-Products.php';
            }
          }

          // Render view và truyền dữ liệu vào EJS
          res.render('Category_Product', {
            website,
            userLogin,
            category,
            categoryImages,
            products,
            categoryWebsite
          });
        });
      });
    } else {
      // Không tìm thấy danh mục với `id` được cung cấp
      res.status(404).send("Không tìm thấy danh mục với id là " + id);
    }
  });
});


app.get('/Connections', auth_user, (req, res) => {
  const website = 'Connections.ejs';
  const userLogin = res.locals.userLogin
  res.render('Connections', { website, userLogin });
});

app.get('/doraemon', auth_user, (req, res) => {
  const website = 'doraemon.ejs';
  const userLogin = res.locals.userLogin
  res.render('doraemon', { website, userLogin });
});

app.get('/footer', auth_user, (req, res) => {
  const website = 'footer.ejs';
  const userLogin = res.locals.userLogin
  res.render('footer', { website, userLogin });
});

app.get('/footer_dark', auth_user, (req, res) => {
  const website = 'footer_dark.ejs';
  const userLogin = res.locals.userLogin
  res.render('footer_dark', { website, userLogin });
});

app.get('/form_login_en', auth_user, (req, res) => {
  const website = 'form_login_en.ejs';
  const userLogin = res.locals.userLogin
  const successMessage = ''
  const errorMessage = ''
  res.render('form_login_en', { website, userLogin, successMessage, errorMessage });
});

// --------------------------------------------------------------------------- //

const { upload, changeGeneral } = require('./changeGeneral');

// Sử dụng middleware để xử lý yêu cầu cập nhật thông tin người dùng
app.post('/changeGeneral', upload.single('profileImage'), changeGeneral);


app.get('/General', auth_user, (req, res) => {
  const website = 'General.ejs';
  const userLogin = res.locals.userLogin
  res.render('General', { website, userLogin });
});

app.get('/Avatar', auth_user, (req, res) => {
  const website = '/Avatar.ejs';
  const userLogin = res.locals.userLogin
  res.render('Avatar', { website, userLogin });
});

const { upload: avatarUpload, changeAvatar } = require('./changeAvatar');


// Định tuyến đến trang avatar và cập nhật ảnh
app.post('/changeAvatar', avatarUpload.single('profileImage'), (req, res) => {
  changeAvatar(req, res);
});


const countryList = require('./countryList'); // Đường dẫn đến file countryList.js

// Trong tệp router hoặc controller
function formatDateForInput(dateStr) {
  if (!dateStr) return '';
  const [day, month, year] = dateStr.split('/');
  return `${year}-${month}-${day}`;
}

// Sử dụng trong route
app.get('/Information', auth_user, (req, res) => {
  const website = 'Information.ejs';
  const userLogin = res.locals.userLogin;
  const error_message = '';
  const success_message = '';

  // Định dạng lại ngày trước khi render
  userLogin.formattedBirthday = formatDateForInput(userLogin.birthday);

  res.render('Information', { website, userLogin, error_message, success_message, countryList });
});


const informationRouter = require('./updateInformation');
app.use('/', informationRouter);


app.get('/Languages', auth_user, (req, res) => {
  const website = 'Languages.ejs';
  const userLogin = res.locals.userLogin
  res.render('Languages', { website, userLogin });
});

// Route để lấy danh sách sản phẩm và render ra trang
app.get('/LEGO_Products', auth_user, (req, res) => {
  const website = 'LEGO_Products.ejs';
  const userLogin = res.locals.userLogin

  const sqlLEGO = "SELECT * FROM `category` WHERE `provider` = 'LEGO'";

  conn.query(sqlLEGO, (err, results) => {
    if (err) {
      console.error("Error querying database: " + err.stack);
      return res.status(500).send("Database query error");
    }

    // Gán kết quả truy vấn vào mảng categories và render view
    const categories = results.map(category => {
      return {
        id: category.id,
        name: category.name_en,
        images: category.images.split(',').map(img => img.trim()) // Tách chuỗi hình ảnh thành mảng
      };
    });

    // Render view và truyền dữ liệu categories vào EJS
    res.render('LEGO_Products', { website, userLogin, categories });
  });
});

app.get('/Password', auth_user, (req, res) => {
  const website = 'Password.ejs';
  const userLogin = res.locals.userLogin
  const error_message = ''
  const success_message = ''
  res.render('Password', { website, userLogin, error_message, success_message });
});

app.get('/Notifications', auth_user, (req, res) => {
  const website = 'Notifications.ejs';
  const userLogin = res.locals.userLogin
  res.render('Notifications', { website, userLogin });
});

app.get('/Signup_en', auth_user, (req, res) => {
  const website = 'Signup_en.ejs';
  const userLogin = res.locals.userLogin
  res.render('Signup_en', { website, userLogin });
});

// Xử lý đăng ký
app.post('/register', (req, res) => {
  const { userName, email, password } = req.body;
  const website = 'Index.ejs';
  const userLogin = res.locals.userLogin;

  // Truy vấn để kiểm tra xem userName đã tồn tại hay chưa
  const checkQuery = "SELECT * FROM `user` WHERE `userName` = ?";
  conn.query(checkQuery, [userName], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Registration failed" });
    }

    // Nếu userName đã tồn tại, gửi thông báo lỗi
    if (results.length > 0) {
      const successMessage = '';
      return res.render('form_login_en', { website, userLogin, errorMessage: "Username is already taken.", successMessage });
    }

    // Hash mật khẩu trước khi lưu vào cơ sở dữ liệu
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Registration failed" });
      }

      // Nếu userName chưa tồn tại, tiếp tục đăng ký người dùng với mật khẩu đã được hash
      const query = "INSERT INTO `user` (`userName`, `email`, `loginpassword`) VALUES (?, ?, ?)";
      conn.query(query, [userName, email, hashedPassword], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Registration failed" });
        }

        const errorMessage = '';
        res.render('form_login_en', { website, userLogin, errorMessage, successMessage: "User registered successfully." });
      });
    });
  })
})


// Route để lấy danh sách sản phẩm và render ra trang
app.get('/product', auth_user, (req, res) => {
  const website = 'LEGO_Products.ejs';
  const userLogin = res.locals.userLogin;

  // Truy vấn danh sách sản phẩm của từng nhà cung cấp
  const sqlQman = "SELECT * FROM `category` WHERE `provider` = 'Qman'";
  const sqlKeeppley = "SELECT * FROM `category` WHERE `provider` = 'Keeppley'";
  const sqlLEGO = "SELECT * FROM `category` WHERE `provider` = 'LEGO'";

  // Dùng Promise để chạy các truy vấn đồng thời và đợi tất cả hoàn thành
  Promise.all([
    new Promise((resolve, reject) => {
      conn.query(sqlQman, (err, results) => {
        if (err) reject("Error querying Qman: " + err.stack);
        else resolve(results.map(category => ({
          id: category.id,
          name: category.name_en,
          images: category.images ? category.images.split(',').map(img => img.trim()) : [] // Tách chuỗi hình ảnh thành mảng
        })));
      });
    }),
    new Promise((resolve, reject) => {
      conn.query(sqlKeeppley, (err, results) => {
        if (err) reject("Error querying Keeppley: " + err.stack);
        else resolve(results.map(category => ({
          id: category.id,
          name: category.name_en,
          images: category.images ? category.images.split(',').map(img => img.trim()) : []
        })));
      });
    }),
    new Promise((resolve, reject) => {
      conn.query(sqlLEGO, (err, results) => {
        if (err) reject("Error querying LEGO: " + err.stack);
        else resolve(results.map(category => ({
          id: category.id,
          name: category.name_en,
          images: category.images ? category.images.split(',').map(img => img.trim()) : []
        })));
      });
    })
  ])
    .then(([qmanCategories, keeppleyCategories, legoCategories]) => {
      // Render view và truyền dữ liệu categories vào EJS
      res.render('product', { website, userLogin, qmanCategories, keeppleyCategories, legoCategories });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Database query error");
    });
});

app.get('/Product_Detail', auth_user, (req, res) => {
  const website = 'Product_Detail.ejs';
  const userLogin = res.locals.userLogin

  const p_id = req.query.id;
  const sqlProduct = `SELECT * FROM product WHERE p_id = '${p_id}'`;

  conn.query(sqlProduct, (err, resultProduct) => {
    if (err) {
      console.error("Database query error: " + err.stack);
      return res.status(500).send("Database query error");
    }

    if (resultProduct.length > 0) {
      const product = resultProduct[0];
      const productImages = product.p_image.split(',').map(img => img.trim());

      // Kiểm tra và gán lại giá trị nếu ảnh thứ 2 và thứ 3 trống
      if (!productImages[1]) productImages[1] = productImages[0];
      if (!productImages[2]) productImages[2] = productImages[0];

      const sqlCategory = `SELECT * FROM category WHERE name_en = '${product.p_category}'`;
      conn.query(sqlCategory, (err, resultCategory) => {
        if (err) {
          console.error("Database query error: " + err.stack);
          return res.status(500).send("Database query error");
        }

        const provider = resultCategory[0].provider;
        res.render('Product_Detail', { website, userLogin, product, productImages, provider });
      });
    } else {
      res.status(404).send("Product not found");
    }
  });
});


// Route để lấy danh sách sản phẩm và render ra trang
app.get('/Qman_Products', auth_user, (req, res) => {
  const website = 'Qman_Products.ejs';
  const userLogin = res.locals.userLogin

  const sqlQman = "SELECT * FROM `category` WHERE `provider` = 'Qman'";

  conn.query(sqlQman, (err, results) => {
    if (err) {
      console.error("Error querying database: " + err.stack);
      return res.status(500).send("Database query error");
    }

    // Gán kết quả truy vấn vào mảng categories và render view
    const categories = results.map(category => {
      return {
        id: category.id,
        name: category.name_en,
        images: category.images.split(',').map(img => img.trim()) // Tách chuỗi hình ảnh thành mảng
      };
    });

    // Render view và truyền dữ liệu categories vào EJS
    res.render('Qman_Products', { website, userLogin, categories });
  });
});

// Route để lấy danh sách sản phẩm và render ra trang
app.get('/Keeppley_Products', auth_user, (req, res) => {
  const website = 'Keeppley_Products.ejs';
  const userLogin = res.locals.userLogin

  const sqlKeeppley = "SELECT * FROM `category` WHERE `provider` = 'Keeppley'";

  conn.query(sqlKeeppley, (err, results) => {
    if (err) {
      console.error("Error querying database: " + err.stack);
      return res.status(500).send("Database query error");
    }

    // Gán kết quả truy vấn vào mảng categories và render view
    const categories = results.map(category => {
      return {
        id: category.id,
        name: category.name_en,
        images: category.images.split(',').map(img => img.trim()) // Tách chuỗi hình ảnh thành mảng
      };
    });

    // Render view và truyền dữ liệu categories vào EJS
    res.render('Keeppley_Products', { website, userLogin, categories });
  });
});

app.get('/sario', auth_user, (req, res) => {
  const website = 'sario.ejs';
  const userLogin = res.locals.userLogin
  res.render('sario', { website, userLogin });
});

app.get('/Sidebar', auth_user, (req, res) => {
  const website = 'Sidebar.ejs';
  const userLogin = res.locals.userLogin
  res.render('Sidebar', { website, userLogin });
});

app.get('/SocialLinks', auth_user, (req, res) => {
  const website = 'SocialLinks.ejs';
  const userLogin = res.locals.userLogin
  res.render('SocialLinks', { website, userLogin });
});

app.get('/login_again_en', auth_user, (req, res) => {
  const website = 'login_again_en.ejs';
  const userLogin = res.locals.userLogin
  res.render('login_again_en', { website, userLogin });
});

app.get('/logout', (req, res) => {
  // Hủy session
  req.session.destroy((err) => {
    if (err) {
      console.error('Không thể hủy session:', err);
      return res.status(500).send('Có lỗi xảy ra khi logout.');
    }

    // Xóa cookie của session (tùy chọn)
    res.clearCookie('connect.sid'); // 'connect.sid' là tên mặc định của cookie session trong express-session

    // Redirect đến trang đăng nhập hoặc trang chủ sau khi logout
    res.redirect('/');
  });
});



// ----------------------- Admin -------------------------------- //
app.get('/Admin/index', auth_user, (req, res) => {
  const website = 'index.ejs';
  const userLogin = res.locals.userLogin
  res.render('Admin/index', { website, userLogin });
});

app.get('/Admin/addProduct', auth_user, (req, res) => {
  const website = 'addProduct.ejs';
  const userLogin = res.locals.userLogin
  res.render('Admin/addProduct', { website, userLogin });
});

app.get('/Admin/addCategory', auth_user, (req, res) => {
  const website = 'addCategory.ejs';
  const userLogin = res.locals.userLogin
  res.render('Admin/addCategory', { website, userLogin });
});

app.get('/Admin/manageUser', auth_user, (req, res) => {
  const sql = "SELECT * FROM user";
  const website = 'manageUser.ejs';
  const userLogin = res.locals.userLogin
  conn.query(sql, (error, results) => {
     if (error) throw error;

     const users = results.map(user => ({
        id: user.userID,
        name: user.userName,
        email: user.email,
        image: user.image
     }));

     res.render('Admin/manageUser', { website, userLogin, users }); 
  });
});

app.get('/Admin/manageProduct', auth_user, (req, res) => {
  const sql = "SELECT * FROM product";
  const website = 'manageProduct.ejs';
  const userLogin = res.locals.userLogin
  conn.query(sql, (error, results) => {
     if (error) throw error;

     const products = results.map(product => ({
        ...product,
        p_image: product.p_image.split(',').map(img => img.trim())
     }));

     res.render('Admin/manageProduct', { website, userLogin, products }); 
  });
});


app.get('/Admin/comment', auth_user, (req, res) => {
  const website = 'comment.ejs';
  const userLogin = res.locals.userLogin
  res.render('Admin/comment', { website, userLogin });
});

app.get('/Admin/ManageOrder', auth_user, (req, res) => {
  const website = 'ManageOrder.ejs';
  const userLogin = res.locals.userLogin
  res.render('Admin/ManageOrder', { website, userLogin });
});

app.get('/Admin/ManageDiscount', auth_user, (req, res) => {
  const website = 'ManageDiscount.ejs';
  const userLogin = res.locals.userLogin
  res.render('Admin/ManageDiscount', { website, userLogin });
});

app.get('/Admin/ManageReview', auth_user, (req, res) => {
  const website = 'ManageReview.ejs';
  const userLogin = res.locals.userLogin
  res.render('Admin/ManageReview', { website, userLogin });
});

// Cấu hình cổng để server lắng nghe
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3001");
});
