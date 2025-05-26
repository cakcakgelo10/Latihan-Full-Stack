const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // default Laragon = kosong
    database: 'toko'
});

db.connect(err => {
    if (err) throw err;
    console.log('✅ Koneksi ke MySQL via Laragon berhasil');
});