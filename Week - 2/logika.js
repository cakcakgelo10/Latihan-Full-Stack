// 🔸 1. Operator Dasar
// ➕ Operator Aritmatika:
let a = 10;
let b = 5;

console.log(a + b);  // 15
console.log(a - b);  // 5
console.log(a * b);  // 50
console.log(a / b);  // 2
console.log(a % b);  // 0 (modulus, sisa bagi)

// 🟰 Operator Perbandingan:
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a == b);  // false (nilai saja)
console.log(a === b); // false (nilai + tipe data)
console.log(a !== b); // true

// ⚙️ Operator Logika:
let isActive = true;
let isAdmin = false;

console.log(isActive && isAdmin); // false
console.log(isActive || isAdmin); // true
console.log(!isActive);           // false

// 🔸 2. Conditional Statement (Percabangan)
// 🔹 If / Else
let umur = 23;
if (umur >= 10) {
    console.log("Kamu sudah dewasa");
} else {
    console.log("Kamu masih dibawah umur.");
    
}

// 🔹 Else If
let nilai = 80;

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 75) {
    console.log("B");
} else {
    console.log("C");
}

// 🔹 Switch Case
let hari = "rabu";

switch (hari) {
    case "senin":
        console.log("Mulai kerja");
        break;
    case "sabtu":
    case "minggu":
        console.log("Libur");
        break;
    default:
        console.log("Hari bebas");
}