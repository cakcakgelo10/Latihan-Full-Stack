// 🧩 Soal 1: Menyapa Daftar Teman dengan Umur
// Kamu punya daftar nama dan umur teman-temanmu. Buat function yang menyapa tiap teman, dan kasih tahu apakah dia cukup umur (>=17) atau tidak.
// 📝 Contoh input:
// let teman = [
//   { nama: "Fakhri", umur: 18 },
//   { nama: "Rifqi", umur: 15 },
//   { nama: "Akbar", umur: 20 }
// ];
// ✅ Output yang diharapkan:
// Halo Fakhri! Kamu sudah cukup umur.
// Halo Rifqi! Kamu belum cukup umur.
// Halo Akbar! Kamu sudah cukup umur.

// jawaban :

// let teman = [
//     { nama: "Fakhri", umur: 18 },
//     { nama: "Rifqi", umur: 15 },
//     { nama: "Akbar", umur: 20 }
//   ];
  
//   function sapaSemua(daftarTeman) {
//     for (let t of daftarTeman) {
//       if (t.umur >= 17) {
//         console.log("Halo "+ t.nama + " Kamu sudah cukup umur !");
        
//     } else {
//         console.log("Halo " + t.nama + " Kamu belum cukup umur !");
//     }
//     }
//   }

//   sapaSemua(teman);

// ====================================================================================

// 🧩 Soal 2: Total dan Rata-Rata Nilai
// Buat function hitungNilai(nama, nilaiArray) yang menerima:
// nama → nama siswa
// nilaiArray → array nilai
// Tampilkan total dan rata-rata nilainya.

// 📝 Contoh:
// hitungNilai("Reza", [80, 75, 90, 60]);
// Reza memiliki total nilai: 305
// Rata-rata: 76.25

// jawaban :

// function hitungNilai(nama, nilaiArray) {
  
//   let total = 0;
//   for (let nilai  of nilaiArray) {
//     total += nilai;
//   }

//   let rataRata = total / nilaiArray.length;

//   console.log(nama + " Memiliki total nilai: " + total);
//   console.log("Rata - rata : " + rataRata);

// }

// ====================================================================================

// hitungNilai("Reza", [70, 80, 90, 100]);

// 🧩 Soal 3: Kelompokkan Angka Ganjil & Genap
// 🎯 Tujuan:
// Dapatkan dua kelompok:
// Angka genap
// Angka ganjil
// Gunakan looping dan conditional

// jawaban :

// function kelompokAngka(arrayAngka) {
//   let genap = [];
//   let ganjil = [];

//     for (let angka of arrayAngka) {
//       if (angka % 2 === 0) {
//         genap.push(angka); 
//       } else {
//         ganjil.push(angka);
//       }
//   }

//   console.log("Angka Genap : ", genap.join(", "));
//   console.log("Angka Ganjil: ", ganjil.join(", "));
// }

// kelompokAngka([1,2,3,4,5,6,7,8,9,10])

// =============================================================

// 🧩 Soal Bonus: Cek Role User
// 📜 Instruksi:
// Buat function cekAkses(nama, role):
// Jika role adalah "admin" → tampilkan:
// ➔ "Halo [nama], Anda memiliki akses penuh."
// Jika role adalah "user" → tampilkan:
// ➔ "Halo [nama], Anda memiliki akses terbatas."
// Jika role selain itu → tampilkan:
// ➔ "Halo [nama], role tidak dikenali."
// jawaban:

// function cekAkses(nama, role) {
//   if (role === "admin") {
//     console.log("Halo " + nama + ", Anda memiliki akses penuh.");

//   } else if (role === "user") {
//     console.log("Halo " + nama + ", Anda memiliki akses terbatas");
    
//   } else {
//     console.log("Halo " + nama + ", role tidak dikenali.");
//   }

// }

// cekAkses("Reza", "admin");
// cekAkses("Fakhri", "user");
// cekAkses("Akbar", "moderator");

// ================================================================================================

// ✏️ Latihan 1: Cek Ganjil atau Genap (Function)
// Buat function cekGanjilGenap(angka):
// Jika angka genap, tampilkan "Angka [angka] adalah genap."
// Jika angka ganjil, tampilkan "Angka [angka] adalah ganjil."
// Contoh:
// cekGanjilGenap(4); // Output: Angka 4 adalah genap.
// cekGanjilGenap(7); // Output: Angka 7 adalah ganjil.

// function cekGanjilGenap(angka) {

//   if (angka % 2 === 0 ) {
//     console.log("Angka " + angka + " Adalah Genap.");
//   } else {
//     console.log("Angka " + angka + " Adalah Ganjil.");  
//   }
// }

// cekGanjilGenap(1);
// cekGanjilGenap(2);

// ===================================================================================================

// ✏️ Latihan 2: Penilaian Siswa (Function)
// Buat function penilaian(nilai):
// Jika nilai >= 90 ➔ tampilkan "A"
// Jika nilai >= 75 ➔ tampilkan "B"
// Jika nilai >= 60 ➔ tampilkan "C"
// Kalau kurang dari 60 ➔ tampilkan "D"
// Contoh:
// penilaian(95); // Output: A
// penilaian(70); // Output: B
// penilaian(50); // Output: D
// jawaban :

// function penilaian(nilai) {
//   if (nilai >= 90) {
//     console.log("A");

//   } else if (nilai >= 75) {
//     console.log("B");

//   } else if (nilai >= 60) {
//     console.log("C");
    
//   } else {
//     console.log("D");
//   }
// }

// penilaian(95);
// penilaian(80);
// penilaian(70);
// penilaian(50);

// =========================================================================================================

// ✏️ Latihan 3: Daftar Belanja (Array + Function)
// Buat function tampilkanBelanja(daftarBarang):
// Loop semua barang
// Tampilkan satu per satu dengan format: ➔ "Saya membeli: [barang]"
// Contoh:
// let daftar = ["Beras", "Telur", "Minyak", "Gula"];
// tampilkanBelanja(daftar);
// Output:
// Saya membeli: Beras
// Saya membeli: Telur
// Saya membeli: Minyak
// Saya membeli: Gula
// jawaban :

// let daftar = ["Beras", "Telur", "Minyak", "Gula"];

// function tampilkanBelanja(daftarBarang) {
//   for (let barang of daftarBarang) {
//     console.log("Saya membeli : " + barang);
//   }  
// }

// tampilkanBelanja(daftar);

// =============================================================================================================

// ✏️ Soal 1: Menjumlahkan Semua Harga Barang
// Buat function jumlahkanHarga(barang):
// Parameter: array berisi harga-harga
// Jumlahkan semua harga
// Tampilkan total harga ke console

// 📋 Contoh:
// let hargaBarang = [10000, 20000, 5000, 30000];
// jumlahkanHarga(hargaBarang);

// ✅ Output yang diharapkan:
// Total harga belanja: Rp65000

// jawaban : 

// function jumlahkanHarga(barang) {
//   let total = 0;
//   for (let harga  of barang ) {
//     total += harga;
//   }
//   return total;
// }

// let total = jumlahkanHarga([10000, 20000, 5000, 30000]);
// console.log("Total: Rp" + total);

// ================================================================================================================

// ✏️ Soal 2: Cek Panjang Nama
// Buat function cekPanjangNama(nama):
// Jika nama lebih dari 5 huruf ➔ tampilkan "Nama panjang"
// Jika 5 huruf atau kurang ➔ tampilkan "Nama pendek"

// 📋 Contoh:
// cekPanjangNama("Reza"); // Output: Nama pendek
// cekPanjangNama("Fakhri"); // Output: Nama panjang

// jawaban :

// function cekPanjangNama(nama) {
//   if (nama.length >= 5) {
//     console.log(nama + " Nama Panjang");

//   } else {
//     console.log(nama + " Nama Pendek");
//   } 
//   }

//   cekPanjangNama("Reza");
//   cekPanjangNama("Fakhri");

// ======================================================================================================================

// ✏️ Soal 3: Cek Barang Tertentu
// Buat function cekBarang(barangDicari, daftarBarang):
// Jika barangDicari ada dalam daftarBarang, tampilkan: "Barang ditemukan"
// Kalau tidak, tampilkan: "Barang tidak ditemukan"
// Gunakan metode .includes() untuk array.

// 📋 Contoh:

// let daftar = ["Beras", "Telur", "Minyak", "Gula"];

// cekBarang("Minyak", daftar); // Output: Barang ditemukan
// cekBarang("Sabun", daftar);  // Output: Barang tidak ditemukan

// jawaban:

let daftar = ["Beras", "Telur", "Minyak"];

function cekBarang(barangDicari, daftarBarang) {
 
  if (daftarBarang.includes(barangDicari)) {
    console.log("Barang ditemukan");
    
  } else {
    console.log("Barang tidak ditemukan");
    
  }

}
  
cekBarang("Minyak", daftar);
cekBarang("Sabun", daftar);
  