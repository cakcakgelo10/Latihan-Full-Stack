const express = require('express');
const app = express();
const mysql = require('mysql2');
app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 1000000 },
    { id: 2, name: "Mouse", price: 150000 }
];

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // kosong kalau pakai Laragon default
  database: 'toko'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ Koneksi ke MySQL berhasil');
});

// GET
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products';

  db.query(query, (err, results) => {
    if (err) {
      console.error('❌ Gagal mengambil data:', err);
      return res.status(500).json({ message: 'Gagal mengambil data produk' });
    }

    res.json(results);
  });
});

// POST
app.post('/api/products', (req, res) => {
  const { id, name, price } = req.body;

  // validasi input
  if (!id || !name || !price) {
    return res.status(400).json({ message: "Semua field (id, name, price) wajib diisi!" });
  }

  if (typeof id !== "number" || typeof name !== "string" || typeof price !== "number" ) {
    return res.status(400).json({ message: "Tipe data tidak valid. id & price harus number, name harus string."});
  }

  // Query ke database
  const query = `INSERT INTO products (id, name, price) values (?, ?, ?)`;

  db.query(query, [id, name, price], (err, result) => {
    if(err) {
      console.error("❌ Gagal insert:", err);
      return res.status(500).json({ message: "Gagal menambahkan produk" });
    }

    res.status(201).json({
      message: "Produk berhasil ditambahkan",
      data: {id, name, price }
    });
  });
});

// PUT 
app.put('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    
    // Validasi input
    if (!name || !price) {
      return res.status(400).json({ message: "Field name dan price wajib diisi !" });
    }

    if (typeof name !== "string" || typeof price !== "number") {
      return res.status(400).json({ message: "Tipe data tidak valid" });
    }

    const query = `UPDATE products SET name = ?, price = ? WHERE id = ?`;

    db.query(query, [name, price, id], (err, result) => {
      if (err) {
        console.error("❌ Gagal update:", err);
        return res.status(500).json({ message: "Gagal update produk" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Produk tidak ditemukan" });
      }

      res.json({
        message: "Produk berhasil diupdate",
        data: { id, name, price }
      });
    });
  });

// DELETE produk berdasarkan ID
app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    const query = `DELETE FROM products WHERE id = ?`;

    db.query(query, [id], (err, result) => {
      if(err) {
        console.error("❌ Gagal hapus:", err);
        return res.status(500).json({ message: "Gagal menghapus produk" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Produk tidak ditemukan" });
      }

      res.json({
        message: `Produk dengan id ${id} berhasil dihapus`
      });
    });
  });

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server aktif di http://localhost:${PORT}`);
});
