// Ambil elemen modal dan tombol
var donateBtn = document.getElementById("donateBtn");
var needBloodBtn = document.getElementById("needBloodBtn");
var donateModal = document.getElementById("donateModal");
var needBloodModal = document.getElementById("needBloodModal");
var closeBtns = document.getElementsByClassName("close"); // Tombol close untuk modal

// Ketika tombol "Donate Now" diklik, tampilkan modal Donasi
donateBtn.onclick = function() {
    donateModal.style.display = "block";
}

// Ketika tombol "Need Blood?" diklik, tampilkan modal Permohonan Darah
needBloodBtn.onclick = function() {
    needBloodModal.style.display = "block";
}

// Menutup modal ketika tombol close diklik
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        donateModal.style.display = "none";
        needBloodModal.style.display = "none";
    }
}

// Menutup modal jika klik di luar area modal
window.onclick = function(event) {
    if (event.target == donateModal) {
        donateModal.style.display = "none";
    }
    if (event.target == needBloodModal) {
        needBloodModal.style.display = "none";
    }
}
