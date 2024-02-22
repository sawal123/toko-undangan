var elements = document.querySelectorAll(".ac");
elements.forEach((element) => {
  element.addEventListener("click", () => {
    const icon = element.querySelector("i");
    const subAc = element.nextElementSibling;
    console.log(element);
    subAc.classList.toggle("hidden");
    icon.classList.toggle("rotate-90");
  });
});

$(document).ready(function () {
  $(".center").slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint untuk layar mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
