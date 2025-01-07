document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Mendapatkan target ID
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Menghitung posisi scroll agar target berada di tengah layar dengan tambahan offset untuk navigasi
        const navHeight = document.querySelector('nav').offsetHeight; // Mendapatkan tinggi navigasi
        const additionalOffset = 120; // Menambahkan 40px offset lebih banyak
        const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2 - navHeight + additionalOffset;
        
        // Scroll ke target dengan posisi yang dihitung
        window.scrollTo({
            top: targetElement.offsetTop - offset, // Offset untuk menyesuaikan posisi
            behavior: 'smooth'
        });
    });
});
