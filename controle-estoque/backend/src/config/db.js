// Conexão com o banco MySQL usando um pool de conexoes.
// O pool reaproveita conexoes, o que é mais eficiente que abri
// uma nova a cada requisição
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnnections: true,
    connectionLimit: 10,
    queueLimit: 0 
});

module.exports = pool;