const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselContainer.children.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselContainer.children.length) % carouselContainer.children.length;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 1280;
    carouselContainer.style.transform = `translateX(${offset}px)`;
}
