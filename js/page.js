
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

var swiper = new Swiper(".swiper_register_service", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  loop: true,
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 2
    }
  }
});


$(document).ready(function() {
// Swiper: Slider
  new Swiper('.swiper_difference', {
    loop: true,
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    paginationClickable: true,
    spaceBetween: 20,
    breakpoints: {
        1028: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});



// Swiper: Slider
    new Swiper('.swiper_customers_about', {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 20,
        breakpoints: {
            1028: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
});
$(document).ready(function() {
// Swiper: Slider
    new Swiper('.swiper_advantages_registering', {
      loop: true,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      paginationClickable: true,
      spaceBetween: 20,
      breakpoints: {
          1028: {
              slidesPerView: 3,
              spaceBetween: 15
          },
          900: {
              slidesPerView: 2,
              spaceBetween: 10
          },
          480: {
              slidesPerView: 1,
              spaceBetween: 10
          }
      }
  });
});
$(document).on('click', '[nh-show-password]', function(e) {
    e.preventDefault();

    var inputPassword = $(this).closest('.form-group').find('input[name="password"]');
    var attrType = inputPassword.attr('type') == 'password' ? 'text' : 'password';
    inputPassword.attr('type', attrType);
  });


$(document).ready(function() {  
    if($('#select-drop').length > 0){
        const optionMenu = document.querySelector(".select-menu"),
          selectBtn = optionMenu.querySelector(".select-btn"),
          options = optionMenu.querySelectorAll(".option"),
          sBtn_text = optionMenu.querySelector(".sBtn-text");
        
        selectBtn.addEventListener("click", () =>
          optionMenu.classList.toggle("active")
        );
        
        options.forEach((option) => {
          option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
        
            optionMenu.classList.remove("active");
          });
        });
    }
    $(".btn-view-all").click(function() {
        $('.info-ckeckout-service-02').toggleClass('transform-active');        
    });

    $(document).on('click', '[nh-quantity-product="subtract"]', function(e){
        var wrapElement = $(this).closest('[nh-quantity-product="wrap"]');
        var input = wrapElement.find('[nh-quantity-product="quantity"]');
          var value = parseInt(input.val()) - 1;
          if(value < 1) value = 1;
          input.val(value);
      });

      $(document).on('click', '[nh-quantity-product="add"]', function(e){
        var wrapElement = $(this).closest('[nh-quantity-product="wrap"]');
        var input = wrapElement.find('[nh-quantity-product="quantity"]');
          var value = parseInt(input.val()) + 1;
          if(value > 1000) value = 1000;
          input.val(value);
      });
});