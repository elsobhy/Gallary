document.addEventListener('DOMContentLoaded', () => {
  const smallImages = document.querySelectorAll('#smallImages img');
  const mainImage = document.getElementById('mainImage');

  if (smallImages.length > 0) {
    mainImage.src = smallImages[0].src;
    mainImage.alt = smallImages[0].alt;
  }

  smallImages.forEach(img => {
    img.addEventListener('mouseover', function() {
      console.log('Hovering over:', this.src);
      mainImage.src = this.src;
      mainImage.alt = this.alt;
    });

    img.addEventListener('mouseout', function() {
    });
  });
});