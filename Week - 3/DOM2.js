let tombol = document.getElementById("gantiWarna");
let warna = ["lightblue", "lightgreen", "lavender", "salmon"];
let acak = Math.floor(Math.random() * warna.length);

tombol.addEventListener("click", function() {
    // document.body.style.backgroundColor = "lightblue";
    document.body.style.backgroundColor = warna[acak];
});