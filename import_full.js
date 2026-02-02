require('dotenv').config();
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL === 'true' ?
        (process.env.DB_SSL_CA_PATH ? { ca: fs.readFileSync(process.env.DB_SSL_CA_PATH) } : { rejectUnauthorized: false })
        : undefined,
    multipleStatements: true
};

const conn = mysql.createConnection(config);

conn.connect((err) => {
    if (err) {
        console.error('Connection failed:', err);
        return;
    }
    console.log('Connected to Aiven.');

    const sqlPath = path.join(__dirname, 'sql', 'keeppley-shop.sql');
    const sqlContent = fs.readFileSync(sqlPath, 'utf8');

    // Combine into one valid SQL execution block
    // First disable the PK check
    // Then run the script
    const fullSql = "SET SESSION sql_require_primary_key = 0;\n" + sqlContent;

    console.log('Executing SQL dump (this may take a moment)...');

    conn.query(fullSql, (err, results) => {
        if (err) {
            console.error('Import Error:', err);
        } else {
            console.log('Import Finished Successfully!');
            if (Array.isArray(results)) {
                console.log(`Executed ${results.length} statements.`);
            }
        }

        // Check tables immediately
        conn.query('SHOW TABLES', (err, tables) => {
            console.log('Verification - Tables in DB:', tables);
            conn.end();
        });
    });
});
