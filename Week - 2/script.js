let username = "Reza";
let usia = 23;

if (usia >= 18) {
    console.log(username + " Sudah boleh membuat SIM ");
} else {
    console.log(username + " Belum cukup usia untuk membuat SIM ");
}

let status = "admin";

switch (status) {
    case "admin":
        console.log("Akses Penuh");
        break;
    case "user":
        console.log("Akses Terbatas");
        break;
    default:
        console.log("Tidak Dikenal");
}