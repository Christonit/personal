const topAnchor = window.document.scrollingElement || window.document.body || window.document.documentElement;
const cursorShadow = document.querySelector('#cursor--shadow');
const cursor = document.querySelector('#cursor');
const red = '#F32424';
const scrollTop = $('#scrollToTop');

$(document).bind('mousemove', function(e){
    $('#cursor').css({
       left:  e.pageX,
       top:   e.pageY +12
    });

 setTimeout( ()=>{

  $('#cursor--shadow').css({
      left:  e.pageX-12,
      top:   e.pageY+2
   });

 },100);


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

  let    scrollCount = parseFloat(scrollPosition.toFixed(2)) + 0.25;
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
