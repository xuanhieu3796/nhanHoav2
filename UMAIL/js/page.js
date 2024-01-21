
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
            
            let selectedOption = option.querySelector(".option-text").innerHTML;

            sBtn_text.innerHTML = selectedOption;
             console.log(sBtn_text.innerHTML); 
            optionMenu.classList.remove("active");
          });
        });
    }
});

$(document).on('click', '[nh-time-domain]', function(e) {
  $('#price-service').modal('hide')
});

$(document).on('click', '[nh-toggle]', function(e) {
    $(this).toggleClass('open');
    var key = $(this).attr('nh-toggle');
    var element = $('[nh-toggle-element="' + key + '"]');

    if(element.length > 0){
      element.toggle();
    }
});

$(document).on('click', '.btn-menu-article', function(e) {
    $(this).toggleClass('open');
    var element = $('.info-menu-article');
    if(element.length > 0){
      element.toggleClass('open');
    }
  });

$(document).on('click', '.icon-close-download', function(e) {
  $('.dowload-app').addClass('d-none');
});
