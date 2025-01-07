document.addEventListener("DOMContentLoaded", function () {
    const text = "Donate blood, Save life"; // Teks lengkap
    const stopAtIndex = 1; // Berhenti di huruf "d" di kata "Donate"
    const typingElement = document.getElementById("typing-text");
    let index = 0;
    let typingForward = true; // Menandai arah animasi (masuk atau keluar)

    // Array warna untuk dipilih
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#57FFC1", "#FFC300"];

    // Fungsi untuk memilih warna secara acak
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function typeWriter() {
        if (typingForward) {
            // Animasi masuk
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Kecepatan mengetik
            } else {
                setTimeout(() => {
                    typingForward = false; // Ganti ke animasi keluar
                    typeWriter();
                }, 1500); // Tunggu sebelum animasi keluar
            }
        } else {
            // Animasi keluar (berhenti di huruf "d" di kata "Donate")
            if (index > stopAtIndex) {
                typingElement.innerHTML = text.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, 50); // Kecepatan menghapus
            } else {
                // Ganti warna teks saat animasi masuk dimulai kembali
                typingElement.style.color = getRandomColor();

                // Reset ke animasi masuk setelah jeda
                setTimeout(() => {
                    typingForward = true;
                    index = 0;
                    typingElement.innerHTML = "";
                    typeWriter();
                }, 1500);
            }
        }
    }

    typingElement.innerHTML = ""; // Kosongkan teks sebelum animasi dimulai
    typeWriter(); // Panggil fungsi animasi
});