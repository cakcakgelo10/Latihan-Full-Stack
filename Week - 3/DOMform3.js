let form = document.getElementById("formulir");
let inputNama = document.getElementById("nama");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let inputKonfirmasi = document.getElementById("konfirmasi");
let pesan = document.getElementById("pesan");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let nama = inputNama.value.trim();
  let email = inputEmail.value.trim();
  let password = inputPassword.value;
  let konfirmasi = inputKonfirmasi.value;

  if (nama === "" || email === "" || password === "" || konfirmasi === "") {
    pesan.textContent = "Semua field harus diisi!";
    pesan.style.color = "red";
    return;
  }

  if (password.length < 6) {
    pesan.textContent = "Password minimal 6 karakter!";
    pesan.style.color = "red";
    return;
  }

  if (password !== konfirmasi) {
    pesan.textContent = "Konfirmasi password tidak cocok!";
    pesan.style.color = "red";
    return;
  }

  pesan.textContent = "Registrasi berhasil! Selamat datang, " + nama + "!";
  pesan.style.color = "green";
});
