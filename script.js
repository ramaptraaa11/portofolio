// Tunggu DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. SMOOTH SCROLL NAVBAR (dari kode saya)
    const navbarLinks = document.querySelectorAll('.menu a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. SCROLL UP BUTTON (kode kamu + perbaikan)
    const scrollUp = document.querySelector(".scroll-up"); // ✅ Pakai titik
    
    window.onscroll = () => {
        if(window.scrollY > 500){
            scrollUp.classList.add("scroll-active");
        } else {
            scrollUp.classList.remove("scroll-active");
        }
    };

    // 3. SMOOTH SCROLL SCROLL UP BUTTON
    const scrollUpBtn = document.querySelector('.scroll-up a');
    scrollUpBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
