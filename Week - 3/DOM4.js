let input = document.getElementById("namaInput");
let tombol = document.getElementById("tampilBtn");
let output = document.getElementById("output");

tombol.addEventListener("click", function () {
    let nama = input.value;
    output.textContent = "Halo " + nama + "!";
});
