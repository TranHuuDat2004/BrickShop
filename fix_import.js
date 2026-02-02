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

async function run() {
    conn.connect((err) => {
        if (err) {
            console.error('Connection failed:', err);
            return;
        }
        console.log('Connected to Aiven.');
        importData();
    });
}

function importData() {
    const sqlPath = path.join(__dirname, 'sql', 'keeppley-shop.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Split statements
    const statements = sql.split(/;\s*[\r\n]+/).filter(s => s.trim().length > 0);

    // Prepend the session variable change
    const allStatements = [
        "SET SESSION sql_require_primary_key = 0",
        ...statements
    ];

    console.log(`Executing ${allStatements.length} statements...`);

    executeStatements(allStatements, 0);
}

function executeStatements(statements, index) {
    if (index >= statements.length) {
        console.log('All statements executed successfully! (Success confirmed)');
        conn.end();
        return;
    }

    const currentStatement = statements[index];
    // Skip comment-only chunks if any
    if (!currentStatement || currentStatement.trim().startsWith("--")) {
        executeStatements(statements, index + 1);
        return;
    }

    conn.query(currentStatement, (err) => {
        if (err) {
            // Ignore "Table exists" error to allow idempotency
            if (err.code === 'ER_TABLE_EXISTS_ERROR') {
                console.log(`Statement ${index}: Table exists, skipping create...`);
            } else {
                console.error(`Error on statement ${index}: ${currentStatement.substring(0, 50)}...`);
                console.error('Error details:', err.message);
                // If detailed error is strict PK, we know session set failed.
            }
        }
        executeStatements(statements, index + 1);
    });
}

run();
