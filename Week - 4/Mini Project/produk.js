let produk = [
  { nama: "Laptop", harga: 1000000, stok: 5 },
  { nama: "Mouse", harga: 150000, stok: 30 },
  { nama: "Keyboard", harga: 300000, stok: 20 },
  { nama: "Monitor", harga: 2500000, stok: 10 },
  { nama: "Flashdisk", harga: 100000, stok: 0 }
];

let tabel = document.getElementById("tabelProduk");
let tombolSort = document.getElementById("sortHarga");
let tombolFilter = document.getElementById("filterStok");
let tombolRiset = document.getElementById("reset");

// Fungsi untuk render semua data produk ke tabel
function tampilkanTabel(data) {
  tabel.innerHTML = ""; // Kosongkan isi tabel

  data.forEach(function(item) {
    let baris = document.createElement("tr");

    baris.innerHTML = `
      <td>${item.nama}</td>
      <td>Rp.${item.harga}</td>
      <td>${item.stok}</td>
    `;

    tabel.appendChild(baris);
  });
}

tombolSort.addEventListener("click", function() {
    let produkUrut = [...produk]; // salin array agar data asli tidak berubah
    produkUrut.sort(function(a, b) {
        return a.harga - b.harga;
    });

    tampilkanTabel(produkUrut);
});

tombolFilter.addEventListener("click", function() {
    let tersedia = produk.filter(function(item) {
        return item.stok > 0;
    });

    tampilkanTabel(tersedia);
});

tombolRiset.addEventListener("click", function() {
    tampilkanTabel(produk);
});

// Tampilkan saat pertama kali halaman dimuat
tampilkanTabel(produk);

