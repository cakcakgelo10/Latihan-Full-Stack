// 1. Latihan forEach()
// Tampilkan daftar makanan favorit kamu menggunakan forEach.
let makanan = ["Ayam Goreng", "Tempe", "Sambel", "Sayur Tumis"];
makanan.forEach(function(item) {
    console.log("Saya suka: " + item); 
});

// 2. Latihan map()
// Kalikan semua angka berikut dengan 2, lalu simpan hasilnya dalam array baru.
let angka = [2, 4, 6, 8];
let hasil = angka.map(function(item) {
    return item * 2;
});
console.log(hasil);

// 3. Latihan filter()
// Ambil semua angka ganjil dari array berikut.
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ganjil = nomor.filter(function(item) {
    return item % 2 !== 0;
});
console.log(ganjil);

// 4. Latihan find()
// Cari angka pertama yang lebih dari 50 dari array ini:
let nilai = [40, 45, 60, 30, 80];
let cari = nilai.find(function(item) {
    return item > 50;
});
console.log(cari);

// 5. Latihan sort();
// Urutkan array ini dari terkecil ke terbesar:
let harga = [10000, 2500, 7500, 15000];
harga.sort(function(a, b) {
    return a - b;
}) ;
console.log(harga);


