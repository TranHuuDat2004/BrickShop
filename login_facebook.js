require('dotenv').config(); // Load environment variables from .env file
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const express = require('express');
const session = require('express-session');
const cors = require('cors'); // Import CORS middleware
const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Configure Passport with Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID, // App ID from Facebook Developer
      clientSecret: process.env.FACEBOOK_APP_SECRET, // App Secret from Facebook Developer
      callbackURL: `http://localhost:${PORT}/auth/facebook/callback`,
      profileFields: ['id', 'displayName', 'email'], // Fields to retrieve from Facebook
    },
    function (accessToken, refreshToken, profile, done) {
      // Handle authentication and user information
      console.log('Facebook Profile:', profile);
      // Example: Save user to database here if needed
      const user = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails ? profile.emails[0].value : null,
      };
      return done(null, user); // Save user information to session
    }
  )
);

// Serialize user to save to session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Middleware for Facebook login
const loginFacebook = (app) => {
  // Initialize session
  app.use(
    session({
      secret: 'secret-key',
      resave: false,
      saveUninitialized: false,
    })
  );

  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Define routes for Facebook Login
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

  // Middleware to check if user is authenticated
  const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  };

  // Route to display user information
  app.get('/profile', ensureAuthenticated, (req, res) => {
    res.send(`
      <h1>Welcome, ${req.user.name}</h1>
      <p>Email: ${req.user.email || 'No email provided'}</p>
      <a href="/logout">Logout</a>
    `);
  });

  // Route to logout
  app.get('/logout', (req, res) => {
    req.logout((err) => {
      if (err) return next(err);
      res.redirect('/');
    });
  });
};

// Initialize the loginFacebook middleware
loginFacebook(app);



module.exports = loginFacebook;