// 1. Import Express
const express = require('express');
const app = express();

// 2. Middleware untuk parse JSON body
app.use(express.json());

// 3. Route dasar: GET /
app.get('/', (req, res) => {
  res.send('Halo dari server Node.js!');
});

// 4. Route API: GET /api/products
app.get('/api/products', (req, res) => {
  // Contoh data produk hardcode
  const products = [
    { id: 1, name: 'Laptop', price: 10000000 },
    { id: 2, name: 'Mouse',  price: 150000 }
  ];
  res.json(products);
});

// 5. Route API: POST /api/products
app.post('/api/products', (req, res) => {
  const newProduct = req.body; // ekspektasi { id, name, price }
  // Di contoh ini kita hanya kirim balik data yang dikirim
  res.status(201).json({
    message: 'Produk berhasil dibuat',
    product: newProduct
  });
});

// 6. Update (PUT) /api/products/:id
app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  res.json({
    message: `Produk dengan id ${id} berhasil diperbarui`,
    updated: updateData
  });
});

// 7. DELETE /api/products/:id
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Produk dengan id ${id} berhasil dihapus`
  });
});

// 8. Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
