import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/popper.min';
import 'slick-carousel/slick/slick.min';
import 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'simplelightbox/dist/simple-lightbox.jquery.min';
import 'vanilla-tilt/dist/vanilla-tilt.min';
import floatingCarousel from './libs/floatingcarousel.min';
import AOS from 'aos/dist/aos';


$('[data-toggle="popover"]').popover();
$('[data-toggle="tooltip"]').tooltip();

$('.gallery a').simpleLightbox({});

AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

$('#burger').click(function () {
    $('.menu-modal').addClass('active');
    $('#app').addClass('active');
    $('body').addClass('active');
});

$('#main-menu-close').click(function () {
    $('.menu-modal').removeClass('active');
    $('#app').removeClass('active');
    $('body').removeClass('active');
});

$(function() {
    $(".write-ToUs__form-control-comment").mousemove(function(e) {
        var myPos = $(this).offset();
        myPos.bottom = $(this).offset().top + $(this).outerHeight();
        myPos.right = $(this).offset().left + $(this).outerWidth();

        if (myPos.bottom > e.pageY && e.pageY > myPos.bottom - 16 && myPos.right > e.pageX && e.pageX > myPos.right - 16) {
            $(this).css({ cursor: "nw-resize" });
        }
        else {
            $(this).css({ cursor: "" });
        }
    })
        .keyup(function(e) {
            if (e.which === 8 || e.which === 46) {
                $(this).height(parseFloat($(this).css("min-height")) !== 0 ? parseFloat($(this).css("min-height")) : parseFloat($(this).css("font-size")));
            }
            while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))) {
                $(this).height($(this).height()+1);
            }
        });
});

$('.owl-carousel').slick({
    dots: false,
    infinite: false,
    variableWidth: true,
    arrows: false,
})

$('#carousel-element').floatingCarousel({
    autoScroll : true,
    scrollSpeed : 'slow',
    autoScrollSpeed: 100000,
});