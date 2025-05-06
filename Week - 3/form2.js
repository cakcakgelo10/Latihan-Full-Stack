let form = document.getElementById("formulir");
let inputNama = document.getElementById("nama");
let inputEmail = document.getElementById("email");
let pesan = document.getElementById("pesan");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let nama = inputNama.value;
    let email = inputEmail.value;
    
    if (nama.trim() === "" || email.trim() === "") {
        pesan.textContent = "Nama dan email tidak boleh kosong!";
    } else {
        pesan.textContent = "Halo, " + nama + "! " + " Email kamu: " + email; 
    }

});