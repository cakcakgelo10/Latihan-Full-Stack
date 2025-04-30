let judul = document.getElementById("judul");
let tombol = document.getElementById("tombol");

tombol.addEventListener("click", function() {
    judul.textContent = "Teks telah diubah !";
    judul.style.color = "blue";
    judul.style.fontWeight = "bold";

});