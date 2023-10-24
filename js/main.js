$(document).ready(function() {
    console.log("temp--------");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 600) {
            $("header").addClass("on-scroll");
            $("header .nav-item").removeClass("nav-item-secondary");
            $("header .nav-item").addClass("nav-item-primary");
            $("header .btn").removeClass("btn-solid-secondary");
            $("header .btn").addClass("btn-solid-primary");
        } else {
            $("header").removeClass("on-scroll");
            $("header .nav-item").addClass("nav-item-secondary");
            $("header .nav-item").removeClass("nav-item-primary");
            $("header .btn").addClass("btn-solid-secondary");
            $("header .btn").removeClass("btn-solid-primary");
        }
    });

    $('.sign-in').on('click', function() {
        $('.sign-in-modal').removeClass('hidden');
        $('body').addClass('modal-open');
    });

    $('.conduct-button').on('click', function() {
        $('.conduct-modal').removeClass('hidden');
        $('body').addClass('modal-open');
    });

    document.querySelectorAll('.speaker-card').forEach(function(element) {
        element.addEventListener('click', function() {
          var r = element.getAttribute('id');
          r = r.replace(/^speaker-/, '');
          console.log(r);
          var elementToDisplay = document.getElementById(r); // Quita las comillas
          if (elementToDisplay) {
            elementToDisplay.classList.remove('hidden');
          }
        });
      });
      

    $(document).on('click', '.close-modal', function() {
        console.log("Funciona cerrar");
        $('.modal').addClass('hidden');
        $('body').removeClass('modal-open');
    });
    $('.close-modal').on('click', function() {
        console.log("Funciona cerrar");
        $('.modal').addClass('hidden');
        $('body').removeClass('modal-open');
    });

    $('#openMenu').on('click', function() {
        $('.main-menu').toggleClass('show');
    });

    $("header .nav-item").click(function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            }, 1000);
        }
    });

    $("footer .nav-item").click(function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            }, 1000);
        }
    });

    $('.event-handling a').on('click', function(e) {
        let target = $(this).attr('id');
        e.preventDefault();
        $(this).addClass('active');
        $('.event-handling a').not($(this)).removeClass('active');
        $('.tabs-image-container').find(target).addClass('open');
        $('.tabs-image-container .tab-content').not(target).removeClass('open');
    });

    $('.tabs-handling').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $filter.isotope({ filter: filterValue });
    });
});

const left = document.getElementById("fLeft");
const right = document.getElementById("fRight");
const carrousel = document.getElementById("carrousel");


left.addEventListener("click", () => {
    carrousel.scrollTo({
        left: carrousel.scrollLeft - 500,
        behavior: 'smooth'
    });
})

right.addEventListener("click", () => {
    carrousel.scrollTo({
        left: carrousel.scrollLeft + 500,
        behavior: 'smooth'
    });
})