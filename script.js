document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
});

const heroVideo = document.querySelector('#home video');
heroVideo.addEventListener('ended', () => {
    heroVideo.pause();
    // Define o tempo para o penúltimo frame (~0.1s antes do fim)
    heroVideo.currentTime = heroVideo.duration - 0.1;
});
