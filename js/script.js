$(window).load(function() {
        // will first fade out the loading animation4
        $(".loader").fadeOut();
        $(".loading").fadeOut().delay (4000);
        $(".loading").remove();
        // will fade out the whole DIV that covers the website.
});


		$(document).ready(function() {

    







    		$('#toggle-menu').click(function() {
        		$('#menu').toggleClass('menu-view');
        		$('.close').removeClass('menu-hide').addClass('menu-view');
        		$('.open').removeClass('menu-view').addClass('menu-hide');

        		

		    });

			$('#menu a, .close').click(function(){

					
			  setTimeout(function() {
			    		$('.open').removeClass('menu-hide').addClass('menu-view');
			  			
			    		$('.close').removeClass('menu-view').addClass('menu-hide');

				    	setTimeout(function() {
				    	  		$('#menu').removeClass('menu-view');
				    	  	}, 400);


			  		 }, 0);

			
			});


		});


		$(document).ready(function() {
        
        
if (screen && screen.width > 768) {


			$('#fullpage').fullpage({
				
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
				menu: '#menu',
				scrollingSpeed: 1200,
				scrollOverflow:true,
                touchSensitivity: 1,
                normalScrollElementTouchThreshold: 5,
				css3:false,
				afterLoad: function(anchorLink, index){
					if(index == 1){
              /*  slidesNavigation: true*/
              		  $('#landingInfo').removeClass(" hidden fadeOut").addClass('animateTitle fadeInTitle ');
            
       				 }
            		if(index == 2){
              /*  slidesNavigation: true*/
              		  $('#section2').removeClass(" hidden fadeOut").addClass('animated fadeInRight ');
            
       				 }

       				 if(index == 3){
              /*  slidesNavigation: true*/
              		  $('#section3').removeClass(" hidden fadeOut").addClass('animated fadeInRight ');
            
       				 }
       				 if(index == 4){
              /*  slidesNavigation: true*/
              		  $('#section4').removeClass(" hidden fadeOut").addClass('animated fadeInRight ');
            
       				 }

       				 if(index == 5){
              /*  slidesNavigation: true*/
              		  $('#contact-animatable').removeClass(" hidden fadeOut").addClass('animated fadeInRight ');
            
       				 }

    		},onLeave: function(index, nextIndex, direction){
             if(index == 1){
            	
                $('#landingInfo').addClass('fadeOut');
    
            }

            if(index == 2){
            	
                $('#section2').addClass('hidden fadeOut');

            }

            if(index == 3){
            	
                $('#section3').addClass('hidden fadeOut');

            }
            if(index == 4){
            	
                $('#section4').addClass('hidden fadeOut');

            }
            if(index == 5){
            	
                $('#contact-animatable').addClass('hidden fadeOut');

            }

        }
			});

}
		});

