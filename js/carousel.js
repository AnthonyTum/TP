const carouselContainer = document.querySelector('.carousel-container');
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change de diapositive automatiquement toutes les 3 secondes (ajustez la durée selon vos besoins)

showSlide(currentIndex);
