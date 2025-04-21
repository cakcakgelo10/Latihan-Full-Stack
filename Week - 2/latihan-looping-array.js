// let nama = "Reza";
// let skill = ["HTML", "CSS", "JavaScript", "Node.js"];

// console.log("skill " + nama + ":");

// for (let i = 0; i < skill.length; i++) {
//     console.log("- " + skill[i]);
// }

// for of
// let nama = "Reza";
// let skill = ["HTML", "CSS", "JavaScript", "Node.js"];

// console.log("Skill " + nama + " :");

// for (let item of skill) {
//     console.log("- " + item);
    
// }

// latihan
// Soal 1  : let makananFavorit = ["Bakso", "Sate", "Seblak", "Mie Ayam", "Burger"];
// Tampilkan: Makanan Favorit Saya:
// - Bakso
// - Sate
// dst...

// for of
// let makananFavorit = ["Bakso", "Sate", "Seblak", "Mie Ayam", "Burger"];

// for (let item of makananFavorit) {
//         console.log("- " + item);
// }

// for
// let makananFavorit = ["Bakso", "Sate", "Seblak", "Mie Ayam", "Burger"];
//     console.log("Makanan Favoit Saya :");

// for (let i = 0; i < makananFavorit.length; i++) {
//     console.log("- " + makananFavorit[i]);
// }

// Soal 2 🧪 Latihan 2: Cetak Angka Genap
// Tampilkan semua angka genap dari 1 sampai 20 menggunakan for.
// ✅ Soal:
// Output yang diharapkan:
// Angka Genap:
// 2
// 4
// 6
// ...
// Hint: Gunakan if (angka % 2 === 0)

// let genap = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//     console.log("Hanya Angka Genap :");
    
// for (let i = 0; i < genap.length; i++) {
//     if (genap[i] % 2 === 0) { // gunakan !== untuk mengganti ke ganjil atau ganti 2 dengan dengan 1
//         console.log("- " + genap[i]);    
//     }
// }

// 🧪 Latihan 3: Menyapa Teman
// Kamu punya daftar nama teman. Sapalah mereka satu per satu di console.
// ✅ Soal:
// let teman = ["Dian", "Raka", "Fauzan", "Rizky"];

// // Output:
// // Halo, Dian!
// // Halo, Raka!
// // dst...
// Pakai for...of agar lebih simple.

// let teman = ["Fakhri", "Akbar", "Habib", "Rifqi"];
//     console.log("Teman Saya :");

//     for (let item of teman) {
//         console.log("Halo, " + item + "!");
//     }

// 🧪 Latihan 4 (Bonus): Total Harga Belanjaan
// Kamu punya array berisi harga barang, jumlahkan semua totalnya.
// let belanja = [15000, 10000, 20000, 5000, 25000];
// // Output:
// // Total belanja: Rp75000
// Pakai for atau for...of dan variabel total

// let belanja = [15000, 10000, 20000, 5000, 25000];
// let total = 0;
    
//     for (let i = 0; i < belanja.length; i++) {
//         total += belanja[i];
//     }
//     console.log("Total Belanja: Rp." + total);

// veris for of
let belanja = [15000, 10000, 20000, 5000, 25000];
let total = 0;

for (let harga of belanja) {
    total += harga;
}
console.log("Total Belanja : Rp" + total);

    