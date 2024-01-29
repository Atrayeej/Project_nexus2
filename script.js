let currentIndex = 0;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  currentIndex = (index + totalSlides) % totalSlides;
  const translateValue = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}
