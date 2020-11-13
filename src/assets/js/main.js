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

var controller = new ScrollMagic.Controller();
//
var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 900, triggerHook: "onLeave",opacity: 0})
    .setPin("#scroll-topics__content")
    .addIndicators({name: "1 (duration: 200)"})
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 900, triggerHook: "onLeave",})
    .setPin("#scroll-topics__content2")
    .addIndicators({name: "1 (duration: 200)"})
    .addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 900, triggerHook: "onLeave",})
    .setPin("#scroll-topics__content3")
    .addIndicators({name: "1 (duration: 200)"})
    .addTo(controller);

var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 900, triggerHook: "onLeave",})
    .setPin("#scroll-topics__content4")
    .addIndicators({name: "1 (duration: 200)"})
    .addTo(controller);

var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 900, triggerHook: "onLeave",})
    .setPin("#scroll-topics__content5")
    .addIndicators({name: "1 (duration: 200)"})
    .addTo(controller);


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


let isMobile = false;
$(document).ready( function() {
    if ($('body').width() >= 992) {
        isMobile = true;
    }
    if (isMobile) {
        (function(){
            var a = document.querySelector('#scroll-topics__leftBlock'), b = null, P = 0;
            window.addEventListener('scroll', Ascroll, false);
            document.body.addEventListener('scroll', Ascroll, false);
            function Ascroll() {
                if (b == null) {
                    var Sa = getComputedStyle(a, ''), s = '';
                    for (var i = 0; i < Sa.length; i++) {
                        if (Sa[i].indexOf('box-sizing') === 0 || Sa[i].indexOf('overflow') === 0 || Sa[i].indexOf('width') === 0 || Sa[i].indexOf('padding') === 0 || Sa[i].indexOf('border') === 0 || Sa[i].indexOf('outline') === 0 || Sa[i].indexOf('box-shadow') === 0 || Sa[i].indexOf('background') === 0) {
                            s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                        }
                    }
                    a.innerHTML = '<div style="'+s+'">'+a.innerHTML+'</div>';
                    b = a.children[0];
                    a.style.height = b.getBoundingClientRect().height + 'px';
                    a.style.padding = '0';
                    a.style.border = '0';
                }
                var Ra = a.getBoundingClientRect(),
                    R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
                if ((Ra.top - P) <= 0) {
                    if ((Ra.top - P) <= R) {
                        b.className = 'stop';
                        b.style.top = - R +'px';
                    } else {
                        b.className = 'sticky';
                        b.style.top = P + 'px';
                    }
                } else {
                    b.className = '';
                    b.style.top = '';
                }
            }
        })()
    }
} );
