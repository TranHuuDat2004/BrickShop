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

function auth_user(req, res, next) {
  // Kiểm tra nếu userLogin có tồn tại trong session, nếu không thì gán userID = -1
  res.locals.userLogin = req.session.userLogin ? req.session.userLogin : { userID: -1 };
  res.locals.success_message = req.session.success_message || null; // Gắn thông báo thành công vào res.locals nếu có

  next();
}


// Middleware lấy giỏ hàng của người dùng
const cartMiddleware = async (req, res, next) => {
  const user_id = res.locals.userLogin?.userID || -1;  // Lấy user_id từ session nếu người dùng đã đăng nhập
  let cartItems = [];
  let totalAmount = 0;

  if (user_id) {
    const sqlCart = `
      SELECT c.p_id, c.p_image, c.p_name, c.p_type, c.p_price, c.quantity, 
             (c.p_price * c.quantity) AS total_price
      FROM cart c
      WHERE c.user_id = ?
    `;

    try {
      // Lấy dữ liệu giỏ hàng từ cơ sở dữ liệu
      const results = await new Promise((resolve, reject) => {
        conn.query(sqlCart, [user_id], (err, results) => {
          if (err) reject(err);
          resolve(results);
        });
      });

      // Nếu có sản phẩm trong giỏ hàng
      if (results.length > 0) {
        cartItems = results.map(item => {
          totalAmount += item.total_price;
          return {
            p_id: item.p_id,
            p_name: item.p_name,
            p_image: item.p_image,
            p_type: item.p_type,
            p_price: item.p_price,
            quantity: item.quantity,
            total_price: item.total_price
          };
        });
      }
    } catch (err) {
      console.error("Error fetching cart data: " + err.stack);
    }
  }

  // Lưu trữ giỏ hàng và tổng tiền vào biến `res.locals` để sử dụng trong view
  res.locals.cartItems = cartItems;
  res.locals.totalAmount = totalAmount;

  // Chuyển sang middleware tiếp theo
  next();
};

// Sử dụng middleware cho các route cần giỏ hàng
app.use(cartMiddleware);  // Tất cả các route sẽ được thêm giỏ hàng vào `res.locals`



// Định nghĩa route với middleware auth_user
app.get('/', auth_user, cartMiddleware, cartMiddleware, (req, res) => {
  const website = 'index.ejs'; // Lấy tên file từ URL
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  console.log(userLogin)
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
        })).slice(0, 4)); // Lấy 4 mục đầu tiên
      });
    }),
    new Promise((resolve, reject) => {
      conn.query(sqlKeeppley, (err, results) => {
        if (err) reject("Error querying Keeppley: " + err.stack);
        else resolve(results.map(category => ({
          id: category.id,
          name: category.name_en,
          images: category.images ? category.images.split(',').map(img => img.trim()) : []
        })).slice(0, 4)); // Lấy 4 mục đầu tiên
      });
    }),
    new Promise((resolve, reject) => {
      conn.query(sqlLEGO, (err, results) => {
        if (err) reject("Error querying LEGO: " + err.stack);
        else resolve(results.map(category => ({
          id: category.id,
          name: category.name_en,
          images: category.images ? category.images.split(',').map(img => img.trim()) : []
        })).slice(0, 4)); // Lấy 4 mục đầu tiên
      });
    })
  ])
    .then(([qmanCategories, keeppleyCategories, legoCategories]) => {
      // Render view và truyền dữ liệu categories vào EJS
      res.render('index', { website, userLogin, cartItems, qmanCategories, keeppleyCategories, legoCategories });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Database query error");
    });
});

app.get('/index', auth_user, cartMiddleware, (req, res) => {
  const website = 'index.ejs'; // Lấy tên file từ URL
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  console.log(userLogin)
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
        })).slice(0, 4)); // Lấy 4 mục đầu tiên
      });
    }),
    new Promise((resolve, reject) => {
      conn.query(sqlKeeppley, (err, results) => {
        if (err) reject("Error querying Keeppley: " + err.stack);
        else resolve(results.map(category => ({
          id: category.id,
          name: category.name_en,
          images: category.images ? category.images.split(',').map(img => img.trim()) : []
        })).slice(0, 4)); // Lấy 4 mục đầu tiên
      });
    }),
    new Promise((resolve, reject) => {
      conn.query(sqlLEGO, (err, results) => {
        if (err) reject("Error querying LEGO: " + err.stack);
        else resolve(results.map(category => ({
          id: category.id,
          name: category.name_en,
          images: category.images ? category.images.split(',').map(img => img.trim()) : []
        })).slice(0, 4)); // Lấy 4 mục đầu tiên
      });
    })
  ])
    .then(([qmanCategories, keeppleyCategories, legoCategories]) => {
      // Render view và truyền dữ liệu categories vào EJS
      res.render('index', { website, userLogin, cartItems, qmanCategories, keeppleyCategories, legoCategories });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Database query error");
    });
});

app.get('/head', auth_user, cartMiddleware, (req, res) => {
  res.render('head');
});

app.get('/ChooseLogin_en', auth_user, cartMiddleware, (req, res) => {
  const website = 'ChooseLogin_en.ejs'; // Lấy tên file từ URL
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('ChooseLogin_en', { website, userLogin, cartItems });
});


app.get('/404', auth_user, cartMiddleware, (req, res) => {
  const website = '404.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('404', { website, userLogin, cartItems });
});

// Route xử lý '/Category_Product' với middleware auth_user
app.get('/Category_Product', auth_user, cartMiddleware, (req, res) => {
  const website = 'Category_Product.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng;
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


app.get('/Connections', auth_user, cartMiddleware, (req, res) => {
  const website = 'Connections.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Connections', { website, userLogin, cartItems });
});

app.get('/doraemon', auth_user, cartMiddleware, (req, res) => {
  const website = 'doraemon.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('doraemon', { website, userLogin, cartItems });
});

app.get('/footer', auth_user, cartMiddleware, (req, res) => {
  const website = 'footer.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('footer', { website, userLogin, cartItems });
});

app.get('/footer_dark', auth_user, cartMiddleware, (req, res) => {
  const website = 'footer_dark.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('footer_dark', { website, userLogin, cartItems });
});

app.get('/form_login_en', auth_user, cartMiddleware, (req, res) => {
  const website = 'form_login_en.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  const successMessage = ''
  const errorMessage = ''
  res.render('form_login_en', { website, userLogin, cartItems, successMessage, errorMessage });
});

// --------------------------------------------------------------------------- //

const { upload, changeGeneral } = require('./changeGeneral');

// Sử dụng middleware để xử lý yêu cầu cập nhật thông tin người dùng
app.post('/changeGeneral', upload.single('profileImage'), changeGeneral);


app.get('/General', auth_user, cartMiddleware, (req, res) => {
  const website = 'General.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('General', { website, userLogin, cartItems });
});

app.get('/Avatar', auth_user, cartMiddleware, (req, res) => {
  const website = '/Avatar.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Avatar', { website, userLogin, cartItems });
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
app.get('/Information', auth_user, cartMiddleware, (req, res) => {
  const website = 'Information.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng;
  const error_message = '';
  const success_message = '';


  res.render('Information', { website, userLogin, cartItems, error_message, success_message, countryList });
});


const informationRouter = require('./updateInformation');
app.use('/', informationRouter);


app.get('/Languages', auth_user, cartMiddleware, (req, res) => {
  const website = 'Languages.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Languages', { website, userLogin, cartItems });
});

// Route để lấy danh sách sản phẩm và render ra trang
app.get('/LEGO_Products', auth_user, cartMiddleware, (req, res) => {
  const website = 'LEGO_Products.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng

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
    res.render('LEGO_Products', { website, userLogin, cartItems, categories });
  });
});

app.get('/Password', auth_user, cartMiddleware, (req, res) => {
  const website = 'Password.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  const error_message = ''
  const success_message = ''
  res.render('Password', { website, userLogin, cartItems, error_message, success_message });
});

app.get('/Notifications', auth_user, cartMiddleware, (req, res) => {
  const website = 'Notifications.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Notifications', { website, userLogin, cartItems });
});

app.get('/Signup_en', auth_user, cartMiddleware, (req, res) => {
  const website = 'Signup_en.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Signup_en', { website, userLogin, cartItems });
});

// Xử lý đăng ký
app.post('/register', (req, res) => {
  const { userName, email, password } = req.body;
  const website = 'Index.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng;

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
      return res.render('form_login_en', { website, userLogin, cartItems, errorMessage: "Username is already taken.", successMessage });
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
        res.render('form_login_en', { website, userLogin, cartItems, errorMessage, successMessage: "User registered successfully." });
      });
    });
  })
})


// Route để lấy danh sách sản phẩm và render ra trang
app.get('/product', auth_user, cartMiddleware, (req, res) => {
  const website = 'product.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng;

  // Lấy số trang từ query và thiết lập số lượng sản phẩm mỗi trang
  const page = parseInt(req.query.page) || 1; // Mặc định là trang 1 nếu không có query
  const limit = 20; // Số sản phẩm mỗi trang
  const offset = (page - 1) * limit; // Tính vị trí bắt đầu của sản phẩm

  // Tổng số sản phẩm (để tính tổng số trang)
  const sqlCount = 'SELECT COUNT(*) AS total FROM product';

  conn.query(sqlCount, (err, resultCount) => {
    if (err) {
      console.error("Error counting products: " + err.stack);
      return res.status(500).send("Database query error");
    }

    const totalProducts = resultCount[0].total;
    const totalPages = Math.ceil(totalProducts / limit);

    // Truy vấn sản phẩm theo giới hạn và phân trang
    const sqlProducts = `SELECT * FROM product LIMIT ${limit} OFFSET ${offset}`;
    conn.query(sqlProducts, (err, resultProducts) => {
      if (err) {
        console.error("Error querying products: " + err.stack);
        return res.status(500).send("Database query error");
      }

      res.render('product', {
        website,
        userLogin,
        products: resultProducts,
        currentPage: page,
        totalPages
      });
    });
  });
});


app.get('/Product_Detail', auth_user, cartMiddleware, async (req, res) => {
  const website = 'Product_Detail.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems; // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount; // Tổng số tiền giỏ hàng;
  const p_id = req.query.id; // Lấy p_id từ query string

  // Câu truy vấn lấy thông tin sản phẩm
  const sqlProduct = `SELECT * FROM product WHERE p_id = ?`;

  // Câu truy vấn lấy group_id và các sản phẩm liên quan
  const sqlGroupProduct = `
    SELECT gp.group_id, gp.product_id, p.p_name_en, p.p_image
    FROM group_product gp
    JOIN product p ON gp.product_id = p.p_id
    WHERE gp.group_id = (
        SELECT group_id
        FROM group_product
        WHERE product_id = ?
    );
  `;

  try {
    // Truy vấn lấy thông tin sản phẩm
    const resultProduct = await new Promise((resolve, reject) => {
      conn.query(sqlProduct, [p_id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });

    if (resultProduct.length === 0) {
      return res.status(404).send("Product not found");
    }

    // Định nghĩa sản phẩm hiện tại
    const product = resultProduct[0];
    const productImages = product.p_image.split(',').map(img => img.trim());

    // Kiểm tra và gán lại giá trị nếu ảnh thứ 2 và thứ 3 trống
    if (!productImages[1]) productImages[1] = productImages[0];
    if (!productImages[2]) productImages[2] = productImages[0];

    // Truy vấn lấy group_id và tất cả sản phẩm liên quan
    const groupProducts = await new Promise((resolve, reject) => {
      conn.query(sqlGroupProduct, [p_id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });

    // Truy vấn thêm thông tin category
    const sqlCategory = `SELECT * FROM category WHERE name_en = ?`;
    const resultCategory = await new Promise((resolve, reject) => {
      conn.query(sqlCategory, [product.p_category], (err, resultCategory) => {
        if (err) reject(err);
        resolve(resultCategory);
      });
    });

    const provider = resultCategory[0]?.provider;

    // Xử lý kết quả groupProducts
    const group = groupProducts.length > 0 ? groupProducts : [{ group_id: 0, p_name_en: "Default" }];

    // Render trang chi tiết sản phẩm
    res.render('Product_Detail', {
      website,
      userLogin,
      cartItems,
      totalAmount,
      product,
      provider,
      productImages,
      group,
    });
  } catch (err) {
    console.error("Database query error: " + err.stack);
    res.status(500).send("Database query error");
  }
});


// Thêm giỏ hàng
app.post('/add-to-cart', auth_user, cartMiddleware, (req, res) => {
  const { p_id, p_name, p_type, quantity, p_price, p_image } = req.body; // Nhận giá trị từ frontend
  const user_id = res.locals.userLogin.userID || -1; // ID người dùng từ session

  const sqlCheckCart = `
    SELECT quantity 
    FROM cart 
    WHERE user_id = ? AND p_id = ?
  `;

  conn.query(sqlCheckCart, [user_id, p_id], (err, result) => {
    if (err) {
      console.error("Error checking cart: " + err.stack);
      return res.status(500).send("Database error");
    }

    if (result.length > 0) {
      // Nếu sản phẩm đã tồn tại, cộng dồn quantity
      const newQuantity = result[0].quantity + parseInt(quantity);

      const sqlUpdateCart = `
        UPDATE cart 
        SET quantity = ? 
        WHERE user_id = ? AND p_id = ?
      `;
      conn.query(sqlUpdateCart, [newQuantity, user_id, p_id], (err) => {
        if (err) {
          console.error("Error updating cart: " + err.stack);
          return res.status(500).send(`
            <script>
              alert("An error occurred while updating the cart. Please try again later.");
              window.location.href = "/Product_Detail?id=${p_id}";
            </script>
          `);
        }

        // Trả về thông báo thành công
        return res.send(`
          <script>
            alert("Product quantity updated in cart successfully");
            window.location.href = "/Product_Detail?id=${p_id}";
          </script>
        `);
      });
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
      const sqlInsertCart = `
        INSERT INTO cart (user_id, p_id, p_name, p_price, p_image, p_type, quantity)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      conn.query(sqlInsertCart, [user_id, p_id, p_name, p_price, p_image, p_type, quantity], (err) => {
        if (err) {
          console.error("Error adding to cart: " + err.stack);
          return res.status(500).send(`
            <script>
              alert("An error occurred while adding the product to the cart. Please try again later.");
              window.location.href = "/Product_Detail?id=${p_id}";
            </script>
          `);
        }

        // Trả về thông báo thành công
        res.send(`
          <script>
            alert("Product added to cart successfully");
            window.location.href = "/Product_Detail?id=${p_id}";
          </script>
        `);
      });
    }
  });
});


// Xóa giỏ hàng
app.post('/delete-cart', auth_user, async (req, res) => {
  const { p_id } = req.body; // Lấy userID và p_id từ body request
  const user_id = res.locals.userLogin.userID || -1; // ID người dùng từ session

  // Kiểm tra dữ liệu hợp lệ
  if (!p_id || user_id === undefined) {
    return res.status(400).json({ success: false, message: 'Invalid data provided' });
  }

  // Câu SQL để xóa sản phẩm từ bảng `cart`
  const sqlDeleteCart = `DELETE FROM cart WHERE user_id = ? AND p_id = ?`;

  try {
    await new Promise((resolve, reject) => {
      conn.query(sqlDeleteCart, [user_id, p_id], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
// xóa thành công
    res.send(`
      <script>
        alert("Product on cart deleted successfully");
        window.location.href = "/";
      </script>
    `);

  } catch (err) {
    console.error('Error deleting cart item:', err);
    res.status(500).send(`
      <script>
        alert("An error occurred while deleting the product to the cart. Please try again later.");
       window.location.href = "/";
      </script>
    `);
  }
});


// Endpoint để lấy giỏ hàng của người dùng
app.get('/get-cart', auth_user, cartMiddleware, (req, res) => {
  const user_id = res.locals.userLogin.userID;  // Lấy user_id từ session hoặc token
  const sqlCart = `
    SELECT c.p_id, c.p_image, c.p_type, c.p_price, c.quantity, 
           (c.p_price * c.quantity) AS total_price
    FROM cart c
    WHERE c.user_id = ?;
  `;

  conn.query(sqlCart, [user_id], (err, results) => {
    if (err) {
      console.error("Error fetching cart data: " + err.stack);
      return res.status(500).send("Database error");
    }

    if (results.length > 0) {
      let totalAmount = 0;
      const cartItems = results.map(item => {
        totalAmount += item.total_price;
        return {
          p_id: item.p_id,
          p_image: item.p_image,
          p_type: item.p_type,
          p_price: item.p_price,
          quantity: item.quantity,
          total_price: item.total_price
        };
      });

      // Render page with cart items
      res.render('cart_sidebar', { cartItems, totalAmount });
    } else {
      res.render('cart_sidebar', { cartItems: [], totalAmount: 0 });
    }
  });
});



// Route để lấy danh sách sản phẩm và render ra trang
app.get('/Qman_Products', auth_user, cartMiddleware, (req, res) => {
  const website = 'Qman_Products.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng

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
    res.render('Qman_Products', { website, userLogin, cartItems, categories });
  });
});

// Route để lấy danh sách sản phẩm và render ra trang
app.get('/Keeppley_Products', auth_user, cartMiddleware, (req, res) => {
  const website = 'Keeppley_Products.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng

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
    res.render('Keeppley_Products', { website, userLogin, cartItems, categories });
  });
});

app.get('/sario', auth_user, cartMiddleware, (req, res) => {
  const website = 'sario.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('sario', { website, userLogin, cartItems });
});

app.get('/Sidebar', auth_user, cartMiddleware, (req, res) => {
  const website = 'Sidebar.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Sidebar', { website, userLogin, cartItems });
});

app.get('/SocialLinks', auth_user, cartMiddleware, (req, res) => {
  const website = 'SocialLinks.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('SocialLinks', { website, userLogin, cartItems });
});

app.get('/login_again_en', auth_user, cartMiddleware, (req, res) => {
  const website = 'login_again_en.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('login_again_en', { website, userLogin, cartItems });
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
app.get('/Admin/index', auth_user, cartMiddleware, (req, res) => {
  const website = 'index.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Admin/index', { website, userLogin, cartItems });
});

app.get('/Admin/addProduct', auth_user, cartMiddleware, (req, res) => {
  const website = 'addProduct.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Admin/addProduct', { website, userLogin, cartItems });
});

app.get('/Admin/addCategory', auth_user, cartMiddleware, (req, res) => {
  const website = 'addCategory.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Admin/addCategory', { website, userLogin, cartItems });
});

app.get('/Admin/manageUser', auth_user, cartMiddleware, (req, res) => {
  const sql = "SELECT * FROM user";
  const website = 'manageUser.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  conn.query(sql, (error, results) => {
    if (error) throw error;

    const users = results.map(user => ({
      id: user.userID,
      name: user.userName,
      email: user.email,
      image: user.image
    }));

    res.render('Admin/manageUser', { website, userLogin, cartItems, users });
  });
});

app.get('/Admin/manageProduct', auth_user, cartMiddleware, (req, res) => {
  const sql = "SELECT * FROM product";
  const website = 'manageProduct.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  conn.query(sql, (error, results) => {
    if (error) throw error;

    const products = results.map(product => ({
      ...product,
      p_image: product.p_image.split(',').map(img => img.trim())
    }));

    res.render('Admin/manageProduct', { website, userLogin, cartItems, products });
  });
});


app.get('/Admin/comment', auth_user, cartMiddleware, (req, res) => {
  const website = 'comment.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Admin/comment', { website, userLogin, cartItems });
});

app.get('/Admin/ManageOrder', auth_user, cartMiddleware, (req, res) => {
  const website = 'ManageOrder.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Admin/ManageOrder', { website, userLogin, cartItems });
});

app.get('/Admin/ManageDiscount', auth_user, cartMiddleware, (req, res) => {
  const website = 'ManageDiscount.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Admin/ManageDiscount', { website, userLogin, cartItems });
});

app.get('/Admin/ManageReview', auth_user, cartMiddleware, (req, res) => {
  const website = 'ManageReview.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('Admin/ManageReview', { website, userLogin, cartItems });
});

app.get('/contact', auth_user, cartMiddleware, (req, res) => {
  const website = 'contact.ejs';
  const userLogin = res.locals.userLogin;
  const cartItems = res.locals.cartItems;  // Giỏ hàng đã được truyền vào từ middleware
  const totalAmount = res.locals.totalAmount;  // Tổng số tiền giỏ hàng
  res.render('contact', { website, userLogin, cartItems });
});

// Cấu hình cổng để server lắng nghe
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3001");
});
