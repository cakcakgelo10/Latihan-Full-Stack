// 🔸 1. Apa itu Array?
// Array adalah kumpulan data dalam satu variabel.
// ✅ Contoh:

let hobi = ["Ngoding", "Ngopi", "Desain UI"];
console.log(hobi[0]); // "Ngoding"

// 🔹 Sifat Array:
// Index dimulai dari 0
// Bisa menyimpan string, angka, boolean, object, dll

// 🔸 2. Looping dengan for
// Digunakan saat kamu tahu berapa kali harus mengulang.
// ✅ Contoh dasar:

for (let i = 0; i < 5; i++) {
  console.log("Angka ke-", i);
}

// ✅ Loop array:

// let hobi = ["Ngoding", "Ngopi", "Desain UI"];

// for (let i = 0; i < hobi.length; i++) {
//   console.log("Hobi saya:", hobi[i]);
// }

// 🔸 3. Looping dengan while
// Digunakan saat pengulangan tergantung kondisi.

let i = 0;

while (i < 3) {
  console.log("Loop ke", i);
  i++;
}

// 🔸 4. Looping Modern: for...of
// Cara cepat untuk mengakses semua item dalam array.

// let hobi = ["Ngoding", "Ngopi", "Desain UI"];

// for (let item of hobi) {
//   console.log("Hobi:", item);
// }
