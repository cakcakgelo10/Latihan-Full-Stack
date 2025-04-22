// 💻 Soal 1:
// Buat function hitungTotalBelanja() yang menerima array harga dan mengembalikan totalnya:
// function hitungTotalBelanja(hargaBarang) {
//     let total = 0;
//     for (let harga of hargaBarang) {
//         total += harga;
//     }
//     return total;
// }

// let total = hitungTotalBelanja([10000, 15000, 20000]);
// console.log("Total: Rp" + total);

// 💻 Soal 2:
// Buat function salamPagi(nama) → output Selamat pagi, [nama]!
// salamPagi("Reza"); // Selamat pagi, Reza!
// function sapa(nama) {
//     console.log("Selamat Pagi, " + nama + "!");
// }
// sapa("Reza");

// 💻 Soal 3 (Bonus):
// Buat function cekUmur(umur):
// Jika umur < 17: “Belum cukup umur”
// Jika umur >= 17: “Sudah cukup umur
// cekUmur(20); // Sudah cukup umur
// cekUmur(15); // Belum cukup umur
function cekUmur(umur) {
    if (umur >= 17) {
        console.log("Sudah cukup umur");
    } else {
        console.log("Belum cukup umur");   
    }
}

cekUmur(20);
cekUmur(15);