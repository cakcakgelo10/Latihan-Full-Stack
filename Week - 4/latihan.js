// 🛍️ Kasus: Daftar Produk Toko Online
// Kamu punya data produk seperti ini:
let produk = [
  { nama: "Laptop", harga: 10000000, stok: 5 },
  { nama: "Mouse", harga: 150000, stok: 30 },
  { nama: "Keyboard", harga: 300000, stok: 20 },
  { nama: "Monitor", harga: 2500000, stok: 10 },
  { nama: "Flashdisk", harga: 100000, stok: 0 }
];

// 🔧 Soal-Soalnya:

// ✅ Soal 1: filter()
// Ambil produk yang masih tersedia (stok > 0)
let tersedia = produk.filter(function(item) {
    return item.stok > 0;
});
console.log(tersedia);

// ✅ Soal 2: map()
// Ubah semua data produk jadi string dengan format:
// "Produk: Laptop - Rp10000000 (Stok: 5)"
let ubah = produk.map(function(item) {
    return "Produk : " + item.nama + " - Rp." + item.harga + " (Stock: " + item.stok + ")";
});
console.log(ubah);

// ✅ Soal 3: find()
// Cari produk dengan nama "Monitor" dan tampilkan detailnya
let cari = produk.find(function(item) {
    return item.nama === "Monitor";
});
console.log(cari);


// ✅ Soal 4: sort()
// Urutkan produk berdasarkan harga dari yang termurah ke termahal
produk.sort(function(a, b) {
    return a.harga - b.harga;
});
console.log(produk);
