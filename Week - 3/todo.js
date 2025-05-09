let input = document.getElementById("inputTugas");
let tombol = document.getElementById("tambahBtn");
let daftar = document.getElementById("daftarTugas");

tombol.addEventListener("click", function () {
  let tugas = input.value.trim();

  if (tugas === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  let item = document.createElement("li");
  item.textContent = tugas;

  // Fitur hapus saat diklik
  item.addEventListener("click", function () {
    item.remove();
  });

  daftar.appendChild(item);
  input.value = ""; // kosongkan input
});
