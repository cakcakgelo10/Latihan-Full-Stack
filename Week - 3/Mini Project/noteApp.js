let inputJudul = document.getElementById("judul");
let inputIsi = document.getElementById("isi");
let tombol = document.getElementById("tambahCatatan");
let daftar = document.getElementById("daftarCatatan");

let catatanList = JSON.parse(localStorage.getItem("catatanList")) || [];

function renderCatatan() {
    daftar.innerHTML = "";
    catatanList.forEach(function(catatan, index) {
        let card = document.createElement("div");
        card.style.border = "1px solid #aaa";
        card.style.padding = "10px";
        card.style.margin = "10px 0";

        let h3 = document.createElement("h3");
        h3.textContent = catatan.judul;

        let p = document.createElement("p");
        p.textContent = catatan.isi;

        let hapusBtn = document.createElement("button");
        hapusBtn.textContent = "Hapus";
        hapusBtn.addEventListener("click", function () {
            if (confirm("Yakin ingin menghapus catatan ini?")) {
            catatanList.splice(index, 1);
            simpanCatatan();
            renderCatatan();  
        }
        });

        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(hapusBtn);

        daftar.appendChild(card);
    });
}

function simpanCatatan() {
    localStorage.setItem("catatanList", JSON.stringify(catatanList));
}

tombol.addEventListener("click", function () {
    let judul = inputJudul.value.trim();
    let isi = inputIsi.value.trim();

    if (judul === "" || isi === "") {
        alert("Judul dan isi tidak boleh kosong ! ");
        return;
    }

    catatanList.push({judul, isi });
    simpanCatatan();
    renderCatatan();
    inputJudul.value = "";
    inputIsi.value = "";
});

renderCatatan();