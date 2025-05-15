// 1. forEach()
// Digunakan untuk melakukan sesuatu pada tiap item array, tapi tidak mengembalikan nilai.
let buah = ["Apel", "Jeruk", "Mangga"];
buah.forEach(function(item, index) {
    console.log(index + ": " + item); 
});

// 2. map()
// Digunakan untuk mengubah setiap item dalam array dan mengembalikan array baru.
let angka = [1, 2, 3, 4];
let hasil = angka.map(function(item) {
    return item * 2;
});
console.log(hasil); // [2, 4, 6, 8]

// 3. filter()
// Digunakan untuk menyaring item dalam array berdasarkan kondisi (mengembalikan array baru).
let nomor = [1, 2, 3, 4, 5, 6];
let genap = nomor.filter(function(item) {
    return item % 2 === 0; // ganti === menjadi !== jika ingin menghasilkan angka ganjil
});
console.log(genap);


// 4. find()
// Mengembalikan item pertama yang cocok dengan kondisi.
let number = [10, 20, 30];
let cari = number.find(function(item) {
    return item > 15;
});
console.log(cari); // 20 

// 5. sort()
// Mengurutkan isi array

// Default (alfabet / string):
let nama = ["Reza", "Fakhri", "Akbar"];
nama.sort();
console.log(nama);

// Angka (harus pakai fungsi pembanding)
let r = [20, 5, 10, 3];
r.sort(function(a, b) { // r.sort((a, b) => b - a); untuk kebalikan
    return a - b; 
});
console.log(r);


// 📝 Catatan Penting:
// 1. forEach → melakukan aksi (misal: tampilkan, cetak)
// 2. map → ubah data dan buat array baru
// 3. filter → pilih data berdasarkan kondisi
// 4. find → ambil satu item pertama yang cocok
// 5.  Mengurutkan isi array