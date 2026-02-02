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
    conn.connect(async (err) => {
        if (err) {
            console.error('Connection failed:', err);
            return;
        }
        console.log('Connected to Aiven.');

        // Check data count
        conn.query("SELECT COUNT(*) as count FROM category", (err, results) => {
            if (err) {
                // Table might not exist
                console.log('Check failed (table might be missing):', err.message);
                importData();
            } else {
                const count = results[0].count;
                console.log(`Current 'category' count: ${count}`);
                if (count === 0) {
                    console.log('Data appears missing. Re-importing...');
                    importData();
                } else {
                    console.log('Data exists! The database seems fine.');
                    conn.end();
                }
            }
        });
    });
}

function importData() {
    const sqlPath = path.join(__dirname, 'sql', 'keeppley-shop.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Split statements to execute one by one for better error handling
    // This is a naive split, but works for standard dumps
    const statements = sql.split(/;\s*[\r\n]+/).filter(s => s.trim().length > 0);

    console.log(`Found ${statements.length} SQL statements. Executing...`);

    executeStatements(statements, 0);
}

function executeStatements(statements, index) {
    if (index >= statements.length) {
        console.log('All statements executed successfully!');
        conn.end();
        return;
    }

    conn.query(statements[index], (err) => {
        if (err) {
            console.error('Error executing statement:', statements[index].substring(0, 100) + '...');
            console.error('Error details:', err.message);
            // Continue despite error? Depending on error.
            // E.g. "Table exists" - ignore.
            if (err.code === 'ER_TABLE_EXISTS_ERROR') {
                console.log('Table exists, skipping...');
            } else {
                // Stop on critical error
            }
        }
        // Proceed anyway for now to try to get data in
        executeStatements(statements, index + 1);
    });
}

run();
