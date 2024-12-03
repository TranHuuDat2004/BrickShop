require('dotenv').config(); // Để đọc biến môi trường từ file .env
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const PORT = process.env.PORT || 3001;

// Cấu hình Passport với Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID, // App ID từ Facebook Developer
      clientSecret: process.env.FACEBOOK_APP_SECRET, // App Secret từ Facebook Developer
      callbackURL: `http://localhost${PORT}/auth/facebook/callback`,
      profileFields: ['id', 'displayName', 'email'], // Trường dữ liệu cần lấy từ Facebook
    },
    function (accessToken, refreshToken, profile, done) {
      // Xử lý logic xác thực và lấy thông tin user
      console.log('Facebook Profile:', profile);
      // Ví dụ: Lưu user vào database tại đây nếu cần
      const user = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails ? profile.emails[0].value : null,
      };
      return done(null, user); // Lưu thông tin user vào session
    }
  )
);

// Serialize user để lưu vào session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user từ session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Middleware đăng nhập Facebook
const loginFacebook = (app) => {
  // Khởi tạo session
  app.use(
    require('express-session')({
      secret: 'secret-key',
      resave: false,
      saveUninitialized: false,
    })
  );

  // Khởi tạo Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Định nghĩa routes liên quan đến Facebook Login
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/profile',
      failureRedirect: '/',
    })
  );

  // Route để hiển thị thông tin user
  app.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
      res.send(`
        <h1>Welcome, ${req.user.name}</h1>
        <p>Email: ${req.user.email || 'No email provided'}</p>
        <a href="/logout">Logout</a>
      `);
    } else {
      res.redirect('/');
    }
  });

  // Route logout
  app.get('/logout', (req, res) => {
    req.logout((err) => {
      if (err) return next(err);
      res.redirect('/');
    });
  });
};

module.exports = loginFacebook;
