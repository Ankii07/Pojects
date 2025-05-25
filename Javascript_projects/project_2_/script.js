const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", ()=>{
//     If the class is already present on the element, toggle removes it.
// If the class is not present, toggle adds it.
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line")

});

navLinks.addEventListener("click", () =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1",{
    ...scrollRevealOption,
    delay: 500,
});

//about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__subheader",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description",{
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__btn",{
    ...scrollRevealOption,
    delay: 2000,
});

//room container 
ScrollReveal().reveal(".room__card",{
    ...scrollRevealOption,
    interval: 500,
});

//service container
ScrollReveal().reveal(".service__list li",{
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
});

//gallery Section
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  //testimonials

   var swiper3 = new Swiper(".mySwiper1", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });


