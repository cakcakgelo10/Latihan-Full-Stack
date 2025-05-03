let tombol = document.getElementById("gantiWarna");
let warna = ["lightblue", "lightgreen", "lavender", "salmon"];

tombol.addEventListener("click", function() {
  let acak = Math.floor(Math.random() * warna.length);
  document.body.style.backgroundColor = warna[acak];
});
