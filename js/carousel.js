const carouselContainer = document.querySelector('.carousel-container');
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

prevBtn.addEventListener('click', goToPrevSlide);
nextBtn.addEventListener('click', goToNextSlide);

showSlide(currentIndex);
