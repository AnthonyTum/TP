const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const children = document.querySelector(".carousel-inner");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    currentIndex++;
    console.log(children.children.length)
    if (currentIndex >= children.children.length) {
        currentIndex = 0;
        console.log("reset")
    }
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = children.children.length - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 450;
    carouselContainer.style.transform = `translateX(${offset}px)`;
    console.log(carouselContainer.style.transform, offset)
}