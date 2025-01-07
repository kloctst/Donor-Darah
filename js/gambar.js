const images = [
        "../assets/donor.jpg",          // Gambar pertama
        "../assets/donor-2.jpg",        // Gambar kedua
        "../assets/donor-3.jpg",        // Gambar ketiga
        "../assets/donor-4.jpg"         // Gambar keempat
    ];

    let currentIndex = 0; // Indeks gambar saat ini
    const imageElement = document.getElementById('carousel-image');

    // Fungsi untuk mengganti gambar
    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length; // Perulangan indeks
        imageElement.src = images[currentIndex]; // Mengubah sumber gambar
    }

    // Ganti gambar setiap 3 detik
    setInterval(changeImage, 4000);