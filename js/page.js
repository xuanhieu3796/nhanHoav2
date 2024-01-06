

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

    new Swiper('.swiper_email_server', {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: "auto",
        paginationClickable: true,
        spaceBetween: 20,
        breakpoints: {
            1028: {
                slidesPerView: "auto",
                spaceBetween: 30
            },
            900: {
                slidesPerView: "auto",
                spaceBetween: 20
            },
            600: {
                slidesPerView: "auto",
                spaceBetween: 20
            }
        }
    });

    new Swiper('.swiper_sevice_02', {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 20,
        grid:{
            fill:"row",
            rows: 2
        },
        breakpoints: {
            1028: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            900: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    new Swiper('.swiper_sevice_nvme', {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 20,
        grid:{
            fill:"row",
            rows: 2
        },
        breakpoints: {
            1028: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    new Swiper('.swiper_sevice_nvme_ht', {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: "auto",
        paginationClickable: true,
        spaceBetween: 20,
        breakpoints: {
            1028: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    new Swiper('.swiper_lich_su_phat', {
        pagination: {
            el: ".swiper-pagination",
          },
        slidesPerView: "2",
        paginationClickable: true,
        spaceBetween: 0,
        breakpoints: {
            1028: {
                slidesPerView: "5",
                spaceBetween: 0
            },
            900: {
                slidesPerView: "4",
                spaceBetween: 0
            },
            600: {
                slidesPerView: "3",
                spaceBetween: 0
            }
        }
    });
});


