var screenWidth = screen.width;
//swiper slider
if (screenWidth > 1024) {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}else{
  var swiper = new Swiper(".mySwiper", {

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}


//lightbox effect
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img.play-button');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const video = document.createElement('iframe');
    video.src = 'https://www.youtube.com/embed/RQ3tXlwr7vc';
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(video);
  });
});

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active');
});