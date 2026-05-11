// ===== AÑO AUTOMÁTICO (CORREGIDO) =====
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();

    var el = document.querySelector("#displayYear");
    if (el) {
        el.innerHTML = currentYear;
    }
}

getYear();


// ===== ISOTOPE (FILTROS) =====
$(window).on('load', function () {

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        layoutMode: "fitRows"
    });

    $('.filters_menu li').on('click', function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        });
    });

});


// ===== NICE SELECT =====
$(document).ready(function () {
    $('select').niceSelect();
});


// ===== OWL CAROUSEL =====
$(document).ready(function(){
    $(".client_owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1000: { items: 2 }
        }
    });
});