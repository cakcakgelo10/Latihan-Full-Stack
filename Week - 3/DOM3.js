let tombol = document.getElementById("tambah");
let kontainer = document.getElementById("kontainer");

tombol.addEventListener("click", function () {
    let paragraf = document.createElement("p");  // Buat elemen <p>
    paragraf.textContent = "Ini paragraf baru ! ";  // Isi teksnya
    paragraf.style.marginBottom = "10px";
    kontainer.appendChild(paragraf);  // Masukan ke <div>
});