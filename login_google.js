const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
// Use the shared database connection
const conn = require('./connectDB');

const loginGoogle = (app) => {
    // Use existing configuration or defaults
    // Note: app.use(session(...)) might already be in index.js, but passport needs it.
    // We assume index.js already sets up session, or we might need to coordinate.
    // For now, mirroring login_facebook.js structure which initializes passport.

    // Initialize Passport (if not already done in index.js, but safe to call again)
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "http://localhost:3001/auth/google/callback"
            },
            function (accessToken, refreshToken, profile, cb) {
                console.log('Google Profile:', profile);

                // Extract relevant info
                const googleID = profile.id;
                const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;
                const name = profile.displayName;
                const photo = profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null;

                // Logic: Find user by email (best effort link) OR by googleID
                // Since database structure is fixed, we'll try to find by email first.
                // For this project, let's assume if email matches, it's the same user.

                if (!email) {
                    return cb(new Error("No email found from Google"), null);
                }

                const sql = "SELECT * FROM user WHERE email = ?";
                conn.query(sql, [email], (err, results) => {
                    if (err) return cb(err, null);

                    if (results.length > 0) {
                        // User exists
                        const user = results[0];
                        return cb(null, user);
                    } else {
                        // User doesn't exist - simple auto-registration or error?
                        // For now, let's return a temporary user object that index.js can use to set session
                        // Or better: INSERT new user

                        // Note: 'loginpassword' cannot be null usually, providing dummy or handling in schema?
                        // Checking schema: loginpassword is NOT NULL. We need a dummy password.
                        const dummyPass = '$2b$10$DUMMYPASSWORDHASHFORGOOGLELOGIN';
                        const insertSql = "INSERT INTO user (userName, fullname, email, loginpassword, image, bio, country, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

                        // Use email prefix as username if possible
                        let userName = email.split('@')[0];

                        // Check if userName exists? Skipping for brevity, might fail unique constraint.
                        // Using random suffix to be safer
                        userName += '_' + Math.floor(Math.random() * 1000);

                        conn.query(insertSql, [userName, name, email, dummyPass, photo || '', 'Google User', '', ''], (err, resInsert) => {
                            if (err) return cb(err, null);

                            // Fetch the new user
                            conn.query("SELECT * FROM user WHERE userID = ?", [resInsert.insertId], (err, resNew) => {
                                if (err) return cb(err, null);
                                return cb(null, resNew[0]);
                            });
                        });
                    }
                });
            }
        )
    );

    // Serialize/Deserialize
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    // Routes
    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/form_login_en' }),
        function (req, res) {
            // Successful authentication
            // CRITICAL: We need to populate req.session.userLogin because the rest of the app uses it
            req.session.userLogin = {
                userID: req.user.userID,
                userName: req.user.userName,
                fullname: req.user.fullname,
                email: req.user.email,
                image: req.user.image,
                loginpassword: req.user.loginpassword,
                address: req.user.address || '',
                bio: req.user.bio || '',
                country: req.user.country || '',
                phone: req.user.phone || ''
            };

            res.redirect('/');
        });
};

module.exports = loginGoogle;
