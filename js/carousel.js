const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= carouselContainer.children.length) {
        currentIndex = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselContainer.children.length - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 1280;
    carouselContainer.style.transform = `translateX(${offset}px)`;
}
