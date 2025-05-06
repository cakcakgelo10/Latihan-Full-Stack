let form = document.getElementById("formulir");
let inputNama = document.getElementById("nama");
let pesan = document.getElementById("pesan");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // agar halaman tidak reload
    let nama = inputNama.value;

    if (nama.trim() === "") {
        pesan.textContent = "Nama tidak boleh kosong !";
    } else {
        pesan.textContent = "Halo, " + nama + "!";
    }
});