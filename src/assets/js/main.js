import './config/jqueryLoad';
import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js/dist/popper.min';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
// import { gsap, ScrollTrigger } from "gsap/all";
// import Wow from 'wow.js';
//
// const wow = new Wow();
// wow.init();



// gsap.registerPlugin(ScrollTrigger);

$('[data-toggle="popover"]').popover();
$('[data-toggle="tooltip"]').tooltip();

// var controller = new ScrollMagic.Controller();
// //
// var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 900, triggerHook: "onLeave",opacity: 0})
//     .setPin("#scroll-topics__content")
//     .addIndicators({name: "1 (duration: 200)"})
//     .addTo(controller);
//
// var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 900, triggerHook: "onLeave",})
//     .setPin("#scroll-topics__content2")
//     .addIndicators({name: "1 (duration: 200)"})
//     .addTo(controller);





// var scene3 = new ScrollMagic.Scene({triggerElement: "#myScrollspy", triggerHook: "onLeave"})
//     .setClassToggle("#scroll-topics__listMenu", "class-fixed") // add class toggle
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);
//
// var scene3_1 = new ScrollMagic.Scene({triggerElement: "#Scrollspy-end", triggerHook: "onLeave"})
//     .setClassToggle("#scroll-topics", "class-fixed-remove") // add class toggle
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);

$(document).ready(function(){
    $(".anchor-link").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 3000);
    });
});


// $(document).ready(function(){
//     $('body').scrollspy({target: ".navbar", offset: 50});
// });
