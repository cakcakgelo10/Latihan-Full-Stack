const express = require('express');
const app = express();
app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 1000000 },
    { id: 2, name: "Mouse", price: 150000 }
];

// GET semua produk
app.get('/api/products', (req, res) => {
    res.json(products);
});

// POST produk baru
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json({
        message: 'Produk berhasil ditambahkan',
        data: newProduct
    });
});

// PUT update produk berdasarkan ID
app.put('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Produk tidak ditemukan" });
    }

    products[index] = { ...products[index], ...req.body };
    res.json({ message: "Produk berhasil diupdate", data: products[index] });
});

// DELETE produk berdasarkan ID
app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Produk tidak ditemukan" });
    }

    const deleted = products.splice(index, 1);
    res.json({ message: "Produk dihapus", data: deleted[0] });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server aktif di http://localhost:${PORT}`);
});
