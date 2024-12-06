let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("blog-box");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  let startIndex = slideIndex * 3;
  let endIndex = startIndex + 3;
  for (i = startIndex; i < endIndex; i++) {
    if (slides[i]) {
      slides[i].style.display = "block";
    }
  }
  slideIndex++;
  if (endIndex >= slides.length) { slideIndex = 0 }
  setTimeout(showSlides, 3000); // Change slide every 2 seconds
}
