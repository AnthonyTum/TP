const carouselContainer = document.querySelector('.carousel-container');
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');

let touchStartX = 0;
let touchEndX = 0;
let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
        // Swipe right
        currentIndex = Math.max(currentIndex - 1, 0);
    } else if (deltaX < -50) {
        // Swipe left
        currentIndex = Math.min(currentIndex + 1, slides.length - 1);
    }

    showSlide(currentIndex);
}

carouselContainer.addEventListener('touchstart', handleTouchStart);
carouselContainer.addEventListener('touchend', handleTouchEnd);

showSlide(currentIndex);
