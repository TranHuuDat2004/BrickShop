require('dotenv').config();
const mysql = require('mysql2');
const fs = require('fs');

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL === 'true' ?
        (process.env.DB_SSL_CA_PATH ? { ca: fs.readFileSync(process.env.DB_SSL_CA_PATH) } : { rejectUnauthorized: false })
        : undefined
};

const conn = mysql.createConnection(config);

conn.connect((err) => {
    if (err) {
        console.error('Connection failed:', err);
        return;
    }
    console.log('Connected to ' + config.database);

    // Check tables
    conn.query('SHOW TABLES', (err, results) => {
        if (err) console.error(err);
        console.log('Tables:', results);

        // Check variable
        conn.query("SHOW VARIABLES LIKE 'sql_require_primary_key'", (err, results) => {
            if (err) console.error(err);
            console.log('Global/Session Check:', results);

            // Try setting it and checking again
            conn.query("SET SESSION sql_require_primary_key = 0", (err) => {
                if (err) console.error('Set Session Failed:', err);
                else console.log('Set Session Success');

                conn.query("SHOW VARIABLES LIKE 'sql_require_primary_key'", (err, results) => {
                    console.log('After Set Check:', results);
                    conn.end();
                });
            });
        });
    });
});
