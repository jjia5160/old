const navShowBtn = document.querySelector('.nav-show-btn');
const navHideBtn = document.querySelector('.nav-hide-btn');
const navMenu = document.querySelector('.navbar-collapse');

navShowBtn.addEventListener('click', () => {
    navMenu.classList.add('showNav');
});

navHideBtn.addEventListener('click', () => {
    navMenu.classList.remove('showNav');
});

// showcase bg slider 
const dottedBtns = document.querySelectorAll('.dotted-btns span');
let slideCount = 0;

dottedBtns.forEach((item) => {
    item.addEventListener('click', () => {
        slideCount = item.dataset.id;
        slideShowcase();
    });
});

function slideShowcase(){
    const displayWidth = document.querySelector('.showcase').clientWidth;
    document.querySelector('.showcase-content').style.transform = `translateX(${-slideCount * displayWidth}px)`;
}

window.addEventListener('resize', slideShowcase);

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 30 seconds
}
  
let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// Animations // 
gsap.registerPlugin(ScrollTrigger)


gsap.from('.animate-services', {
    scrollTrigger: '.animate-services',
    duration: 1.5,
    opacity: 1,
    x: -150,
    stagger: 0.12,
});

gsap.from('.animate__img', {
    scrollTrigger: '.animate__img',
    duration: 1.2,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

