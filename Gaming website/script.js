// Optional: You can enhance this with JavaScript to make the slider more interactive
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

window.onload = showSlides;
