let currentSlide = 0;

function showSlide(index) {
  const slides = document.getElementById("carouselSlides");
  const totalSlides = slides.children.length;

  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

setInterval(() => {
  nextSlide();
}, 6000); // Auto slide every 6 seconds
