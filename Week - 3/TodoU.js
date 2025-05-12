let input = document.getElementById("inputTugas");
let tombol = document.getElementById("tambahBtn");
let daftar = document.getElementById("daftarTugas");

// Ambil data dari localStorage saat pertama kali halaman dibuka
let tugasTersimpan = JSON.parse(localStorage.getItem("tugasList")) || [];

// Fungsi untuk render tugas ke dalam list
function renderTugas() {
    daftar.innerHTML = "";
    tugasTersimpan.forEach(function(tugas, index) {
        let item = document.createElement("li");
        item.textContent = tugas;

        // Hapus saat diklik
        item.addEventListener("click", function  () {
            tugasTersimpan.splice(index, 1);
            simpanTugas();
            renderTugas();
        });

        daftar.appendChild(item);
    });
}

// Simpan ke lokal Storage
function simpanTugas() {
    localStorage.setItem("tugasList", JSON.stringify(tugasTersimpan));
}

// Tambah tugas baru
tombol.addEventListener("click", function () {
    let tugasBaru = input.value.trim();
    if (tugasBaru === "") {
        alert("Tugas tidak boleh kosong ! ");
        return;
    }

    tugasTersimpan.push(tugasBaru);
    simpanTugas();
    renderTugas();
    input.value = "";
});

// Pamggil saat pertama kali
renderTugas();