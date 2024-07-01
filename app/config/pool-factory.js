const util = require('util');
const mysql = require('mysql2');
require('dotenv').config()

// Configure the MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.HOST,
    port: process.env.MYSQLPORT,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    multipleStatements: true,
    queueLimit: 0,
    waitForConnections: true
});

// Handle connection errors and log messages
pool.getConnection((err, connection) => {
    if (err) {
        switch (err.code) {
            case 'PROTOCOL_CONNECTION_LOST':
                console.error('Database connection was closed.');
                break;
            case 'ER_CON_COUNT_ERROR':
                console.error('Database has too many connections.');
                break;
            case 'ECONNREFUSED':
                console.error('Database connection was refused.');
                break;
            default:
                console.error('Database connection error:', err);
        }
    }
    if (connection) connection.release();
});

// Promisify the pool.query method for easier async/await usage
pool.query = util.promisify(pool.query);

// Export the pool for use in other modules
module.exports = pool;
