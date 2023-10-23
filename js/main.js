$(document).ready(function() {
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

    $('.speaker-card').on('click', function() {
        var r = (this).getAttribute('id');
        console.log(r);
        const containerSpeaker = document.getElementById("speakerCardDisplay");
        containerSpeaker.innerHTML = ""; 

        const http = new XMLHttpRequest();

        http.onreadystatechange = () => {
            if(http.readyState == 4 && http.status == 200) {
                let datos = JSON.parse(http.response)
                console.log(datos);
                datos.forEach(item => {
                    if(r === 'speaker-'+item.name.replace(/\s/g, "")){
                        const speaker = document.createElement("div");
                        //speaker.classList.add("modal bio-modal");
                        speaker.className = "modal bio-modal";
                        speaker.id = `${item.name.replace(/\s/g, "")}`;
                        speaker.innerHTML = `
                        
                        <div class="modal-content">
                            <div class="modal-header">
                                <a href="javascript:;" class="btn-icon btn-solid-secondary btn-xsmall close-modal"><i class="icon-close"></i></a>
                            </div>
                            <div class="modal-body">
                                <figure>
                                    <img src="${item.avatar}" alt="Icon">
                                </figure>
                                <div class="md:px-12 lg:py-[72px] md:py-12 p-8">
                                    <h4 class="mb-4">${item.name}</h4>
                                    <span class="tag default mb-4">${item.carrear}</span>
                                    <p>${item.bio}</p>
                                </div>
                            </div>
                        </div>
                        
                        `;
                        containerSpeaker.appendChild(speaker)


                    }
                    
                });
               
            }
        }
        
        
        http.open('get', '../data/charlistas.json', true);
        
        http.send();


        // switch (r) {
        //     case 'speaker-0':
        //         $('#ever').removeClass('hidden');
        //         break;
        //     case 'speaker-1':
        //         $('#eudris').removeClass('hidden');
        //         break;
        //     case 'speaker-2':
        //         $('#camacho').removeClass('hidden');
        //         break;
        //     case 'speaker-3':
        //         $('#freddy').removeClass('hidden');
        //         break;
        //     case 'speaker-4':
        //         $('#mitra').removeClass('hidden');
        //         break;
        //     case 'speaker-5':
        //         $('#wend').removeClass('hidden');
        //         break;
        //     case 'speaker-6':
        //         $('#yhor').removeClass('hidden');
        //         break;
        //     case 'speaker-7':
        //         $('#rald').removeClass('hidden');
        //         break;
        //     case 'speaker-8':
        //         $('#noe').removeClass('hidden');
        //         break;
        //     case 'speaker-9':
        //         $('#juan').removeClass('hidden');
        //         break;
        // }
        // //$('.bio-modal').removeClass('hidden');
        // $('body').addClass('modal-open');
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

    // var $filter = $('.tab-unconferences-container').isotope({
    //     // options
    //     itemSelector: '.uncoferences-card',
    //     layoutMode: 'fitRows'
    // });

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