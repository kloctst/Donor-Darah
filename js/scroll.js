
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        fadeInElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.9) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Jalankan sekali saat halaman dimuat
});

