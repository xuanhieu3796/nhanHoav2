

$(document).ready(function() {
// Swiper: Slider
    new Swiper('.swiper_customers_about', {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 20,
        breakpoints: {
            1028: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
});
