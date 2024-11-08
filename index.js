// Import các thư viện cần thiết
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); // Import express-session
const conn = require('./connectDB');

// Khởi tạo ứng dụng Express
const app = express();

// Cấu hình view engine là EJS
app.set('view engine', 'ejs');

// Middleware để chọn thư mục views dựa trên ngôn ngữ
app.use((req, res, next) => {
  const lang = req.query.lang || 'en'; // Giả sử truyền ngôn ngữ qua query parameter 'lang'
  const viewsDir = lang === 'vn' ? 'vn' : 'en';
  app.set('views', path.join(__dirname, viewsDir));
  next();
});


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
  res.render('form_login_en', { website, userLogin });
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

// const { upload, changeAvatar } = require('changeAvatar.js');

// // Định tuyến đến trang avatar và cập nhật ảnh
// app.post('/changeAvatar', upload.single('profileImage'), changeAvatar);

app.get('/Information', auth_user, (req, res) => {
  const website = 'Information.ejs';
  const userLogin = res.locals.userLogin
  res.render('Information', { website, userLogin });
});


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
  res.render('Password', { website, userLogin });
});

app.get('/Notification', auth_user, (req, res) => {
  const website = 'Notification.ejs';
  const userLogin = res.locals.userLogin
  res.render('Notification', { website, userLogin });
});

app.get('/product', auth_user, (req, res) => {
  const website = 'product.ejs';
  const userLogin = res.locals.userLogin
  console.log(userLogin)
  res.render('product', { website, userLogin });
});

app.get('/product_detail', auth_user, (req, res) => {
  const website = 'product_detail.ejs';
  const userLogin = res.locals.userLogin
  res.render('product_detail', { website, userLogin });
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





// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });

// app.get('/Category_Product', auth_user, (req, res) => {
//   const website = 'Category_Product.ejs';
//   const userLogin = res.locals.userLogin
//   res.render('Category_Product', { website, userLogin });
// });
// Cấu hình cổng để server lắng nghe
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3001");
});
