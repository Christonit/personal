import anime from './anime.es.js';
import ProgressBar from './progressbar.min.js';


'use strict';

let windowSize = screen.width;
let xs = 512;
let sm = 768;
let md = 896;
let lg = 1152;
let xl = 1280;
let xxxl= 1441;


$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      let isActive = $('.navbar-burger').hasClass('is-active');
      let el = document.querySelector('.navbar-menu');

      $(".navbar-burger").toggleClass("is-active");

      if(isActive == false){

        $(".navbar-menu").toggleClass("is-active");

        anime({
          targets:el,
          duration:400,
          translateY: 0,
          opacity:1
        });

      }else {


        anime({
          targets:el,
          duration:400,
          translateY: 800,
          opacity:0.3
        });
        setTimeout( ()=>{
          $(".navbar-menu").toggleClass("is-active");
        },700);


      }


  });
});

let slideProgressBar = document.querySelector('#slide-progress-bar');
let slideContainer = document.querySelector('[data-glide-el="track"]');
let slideList = document.querySelectorAll('.glide__slides li');

let arrows = document.querySelector('[data-glide-el="controls"]');

let next = document.querySelector('[data-glide-dir=">"]');
let previews = document.querySelector('[data-glide-dir="<"]');



let currentEl = document.querySelector("[data-slide-count='current']");
    currentEl.innerHTML = 1;

let slideCounterTotal = document.querySelector("[data-slide-count='total']");
    slideCounterTotal.innerHTML = slideList.length;


let slideCounter = document.querySelector("#slide-counter");
let activeSlide = $('.glide__slide--active');

next.addEventListener('click', ()=>{
  console.log($('.glide__slide--active').index() + ' = Pre interval');

  new Promise((resolve, reject) => {

  let z = setInterval(()=>{

          if($('.glide__slide--active').index() > 0){
            clearInterval(z);
            resolve();
          }

        }, 100);

  }).then(function(result) {
    console.log($('.glide__slide--active').index() + ' = Post interval');

    return  previews.classList.remove('is-disabled');

  });

  new Promise((resolve, reject) => {

  let z = setInterval(()=>{

          if($('.glide__slide--active').index() == (slideList.length - 1) ){
            clearInterval(z);
            resolve();
          }

        }, 100);

  }).then(function(result) {
    console.log(slideList.length - 1);
    return  next.classList.add('is-disabled');

  });

  if($('.glide__slide--active').index() == (slideList.length - 1) ){
    let z = setInterval(()=>{
      if($('.glide__slide--active').index() == 0){

            next.classList.remove('is-disabled')
            previews.classList.add('is-disabled');
            console.log($('.glide__slide--active').index() + ' = End.');
            clearInterval(z);

            };

    }, 200);

  }



});


previews.addEventListener('click', ()=>{


  new Promise((resolve, reject) => {

  let z = setInterval(()=>{

          if($('.glide__slide--active').index() == (slideList.length - 1) ){
            clearInterval(z);
            resolve();
          }

        }, 100);

  }).then(function(result) {
            previews.classList.remove('is-disabled');
    return  next.classList.add('is-disabled');

  });


  new Promise((resolve, reject) => {

  let z = setInterval(()=>{

          if($('.glide__slide--active').index() == 0){
            clearInterval(z);
            resolve();
          }

        }, 100);

  }).then(function(result) {

    return  previews.classList.add('is-disabled');

  });


  let z = setInterval(()=>{

    if( $('.glide__slide--active').index() < (slideList.length - 1) ){
              next.classList.remove('is-disabled');
              clearInterval(z);
    }

  }, 200);




});
let glide = new Glide('.glide', {
  type: 'slider',
  focusAt:'center',
  gap:200,
  width:300,
  perView: 2.2,
  breakpoints: {
    1441: {
      width:560,
      gap:100
    },
    1024: {
      perView: 2
    },
    600: {
      width:300,
      perView: 1,
      gap: 50
    }
  }
});


glide.on('run', (e) =>{
/*
  if(glide.index == 1){
    previews.classList.add('is-disabled');
    console.log(slideList.length);
  }

  if (glide.index == slideList.length) {
    next.classList.add('is-disabled');
  }

  if ( glide.index < slideList.length  ){

    next.classList.remove('is-disabled');

  }

  if ( glide.index == 2 ) {
    console.log(glide.index);
    previews.classList.remove('is-disabled');

  }

*/

  anime({
    targets: currentEl,
    duration:250,
    translateX: 30,
    easing: 'linear',
    opacity:0
  });

  setTimeout( ()=>{
    currentEl.innerHTML = glide.index + 1;
    currentEl.style.transform = "translateX(-30px)";

    anime({
      targets: currentEl,
      duration:250,
      translateX: 0,
      easing: 'linear',
      opacity:1
    });


  },250);

  let slideWidth = 0;

  if(glide.index < slideList.length){

    slideWidth += ( ( glide.index/slideList.length) *100 );

  }else {

    slideWidth = 0;

  }

  anime({
    targets:slideProgressBar,
    duration:500,
    left: slideWidth + '%',
    easing: 'easeInOutCirc'
  });

});

/*
glide.on('update', (e) =>{

  if(glide.index == 1){
    previews.classList.add('is-disabled');
    console.log(slideList.length);
  }

  if (glide.index == slideList.length) {
    next.classList.add('is-disabled');
  }

  if ( glide.index < slideList.length  ){

    next.classList.remove('is-disabled');

  }

  if ( glide.index == 2 ) {
    console.log(glide.index);
    previews.classList.remove('is-disabled');

  }


});
*/



glide.mount();

let hideShowArrows = (x)=>{
  anime({
    targets: arrows,
    duration:200,
    easing: 'linear',
    opacity:x,
  });
}

let hideShowClose = (x) =>{

  anime({
    targets:closeBtn,
    duration:200,
    opacity:x,
    easing: 'linear'
  });

}

let portfolioEl = $(".glide__slide");
let closeBtn = document.querySelector('span[data-action="close"]');
let portfolioPrevLing = $('portfolio-el-img a');


if(windowSize <= sm){
  $(slideCounter).insertBefore(slideContainer);

  portfolioEl.on('touchstart',(e)=>{
    hideShowClose(1);

    hideShowArrows(0);

    setTimeout( ()=>{
      arrows.style.display = 'none';
    },200);

    e.preventDefault;

  });

  portfolioEl.on('touchcancel',(e)=>{
    hideShowClose(1);

    hideShowArrows(0);

    setTimeout( ()=>{
      arrows.style.display = 'none';
    },200);

    portfolioPrevLing.preventDefault;

  });


  closeBtn.addEventListener('click', ()=>{

    hideShowClose(0);
    arrows.style.display = 'inherit';
    hideShowArrows(1);

  });





}

slideProgressBar.style.width = (100/ slideList.length) + '%';

const topAnchor = window.document.scrollingElement || window.document.body || window.document.documentElement;
const cursorShadow = document.querySelector('#cursor--shadow');
const cursor = document.querySelector('#cursor');
const red = '#F32424';
const scrollTop = $('#scrollToTop');

$(document).bind('mousemove', function(e){
    $('#cursor').css({
        left:  e.pageX,
        top:   e.pageY +8
    });

    setTimeout( ()=>{

        $('#cursor--shadow').css({
            left:  e.pageX-12,
            top:   e.pageY+2
        });

    },10);

});

let cursorAnimations = ()=>{


    let cursorAnimation = anime.timeline();
    let cursorHalo = document.querySelector('.cursor--halo');



    cursorAnimation.add({
        targets: cursorHalo,
        opacity:1,
        borderColor:'rgba(255,255,255,1)',
        height: 56,
        width: 56,
        duration: 400,
        easing:'linear'
    }).add({
        targets: cursorHalo,
        opacity:0,
        borderColor:'rgba(255,255,255,0)',
        duration: 300,
        easing:'linear'

    }).add({
        targets: cursorHalo,
        height: 0,
        width: 0,
        duration: 100,
    });

};



//Currently have issue of event bubbling and multiple firings.
// One posible solution is generate a new canvas on click on te same event.page position, chain it with a promise and then delete it when animation finished.
$(document).click( (e) =>{
    $('.cursor--halo').css({'width':0,
        'height':0,
        'left':(e.pageX -24),
        'top':(e.pageY -4)
    });
    cursorAnimations();

});

$('a, .navbar-item, .portfolio-el-img, .button, button,  #scrollToTop').on('mouseover', function(e){

    anime({
        targets: cursorShadow,
        height: 56,
        opacity:1,
        width: 56,
        duration: 1000
    });

    anime({
        targets: cursor,
        opacity:0,
        duration: 1000
    });

});

$('a, .navbar-item, .portfolio-el-img, .button, button, #scrollToTop').on('mouseleave', function(e){
    anime({
        targets: cursorShadow,
        height: 0,
        width: 0,
        opacity:0,
        duration: 1000
    });

    anime({
        targets: cursor,
        opacity:1,
        duration: 1000
    });

});


var bar = new ProgressBar.Circle(scrollToTop, {
    strokeWidth: 1,
    easing: 'easeIn',
    duration: 200,
    color: 'rgba(255,255,255,1)',
    trailColor: 'rgba(255,255,255,0.24)',
    trailWidth: 1,
    svgStyle: null
});





scrollTop.on('click',()=>{
    anime({
        targets: topAnchor,
        scrollTop: 0,
        duration: 800,
        easing: 'easeInOutQuad'
    });

});

$(document).on('scroll', ()=>{

    let scrollPosition = window.pageYOffset / document.body.clientHeight;

    let scrollCount = parseFloat(scrollPosition.toFixed(2)) + 0.25;
    let x;

    windowSize > sm ? x = '144px' : x = '64px';

    // console.log(scrollCount + 0.25);

    if( ( scrollPosition*100) > 10){
        $(this).one('scroll',()=>{
            anime({
                targets: document.querySelector('#scrollToTop'),
                bottom: x,
                delay:300,
                opacity:1,
                duration: 700,
                easing: 'easeInOutQuad'
            });
        });
    }else {
        $(this).one('scroll',()=>{
            anime({
                targets: document.querySelector('#scrollToTop'),
                bottom: '-'+x,
                delay:300,
                opacity:0,
                duration: 700,
                easing: 'easeInOutQuad'
            });
        });
    }

    bar.animate( (scrollCount <= 1 ? scrollCount : scrollCount = 1)  );

});


// bar.set(30);
