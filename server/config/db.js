const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456za',
    port: 3303
});

db.connect((error) => {
    if (error) {
        console.log('Error connecting to database:', error);
    } else {
        console.log('Connected to database!');
    }
});

module.exports = db;