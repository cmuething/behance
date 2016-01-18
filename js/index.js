//$('#limit-l').click(function () {
//    $('.image').each(function () {
//        if ($(this).offset().left < 0) {
//            $(this).css("left", "150%");
//        } else if ($(this).offset().left > $('#move').width()) {
//            $(this).animate({
//                left: '0'
//            }, 500);
//        } else {
//            $(this).animate({
//                left: '-150%'
//            }, 500);
//        }
//    });
//});
//
//$('#limit-r').click(function () {
//    $('.image').each(function () {
//        if ($(this).offset().left < 0) {
//            $(this).animate({
//                left: '0'
//            }, 500);
//        } else if ($(this).offset().left > $('#move').width()) {
//            $(this).css("left", "-150%");
//        } else {
//            $(this).animate({
//                left: '150%'
//            }, 500);
//        }
//    });
//});


			$("#limit-l").click(function() {
				console.log("Left");
				var obj = $(".curr");
				$(obj).animate({
					left: '-50%'
				}, 500, function() {
					$(this).css('left', '+150%');
    				$(this).appendTo('#container');
				});
                var newTitle = $(obj).next().attr('data-drawer-title');
                var newDesc = $(obj).next().attr('data-drawer-description');
                console.log(newTitle);
				$(obj).next().animate({
					left: '+50%'
				}, 500, function() {
					$(this).addClass('curr');
					$(obj).removeClass('curr');
				});
                $('#bottoms').html(newTitle);
                $('.project-details-toggle h1').html(newTitle);
                $('.project-details-toggle p').html(newDesc);
			});

			$("#limit-r").click(function() {
				console.log("Right");
				var obj = $(".curr");
				var prox = $(obj).siblings(":last");
				$(obj).animate({
					left: '+150%'
				}, 500, function() {
					$(prox).prependTo('#container');
				});
                var newTitle = $(prox).attr('data-drawer-title');
                var newDesc = $(prox).attr('data-drawer-description');
				$(prox).css('left', '-50%');
				$(prox).animate({
					left: '+50%'
				}, 500, function() {
					$(this).addClass('curr');
					$(obj).removeClass('curr');
				});
                $('#bottoms').html(newTitle);
                $('.project-details-toggle h1').html(newTitle);
                $('.project-details-toggle p').html(newDesc);
			});

//Am I going to have to use this to enable swipe left swipe right on mobile???

//			var hammertime = new Hammer( document.getElementById("container") );
//			hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
//			hammertime.on('swipeleft', function() {
//				$("#esq").trigger("click");
//			});
//			hammertime.on('swiperight', function() {
//				$("#dir").trigger("click");
//			});
//		});

//What is the script of changing the href and linking the thumbnails going to say?? click on a thumbnail to add the class curr to the project box with the corresponding href

//INFO

$(document).ready(function () {
    $('.connor-info-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
        var connorTitle = $('.connor-info-toggle');
    	var connorInfo = $('.connor-info');
    	var connorInfoWidth = $('.connor-info').width();
        var gradientMove = $('.test');
    	    	
	    	connorInfo.animate({
		    	left: "0px",
                zIndex: "999999"
	    	});
        
            connorTitle.animate({
                zIndex: "999999" 
            }, 250);	
        
            gradientMove.addClass('gradient');
    });
});
    
    $(document).ready(function () {
    $('.test').on('click', function(event){
        event.preventDefault();

    	var connorInfo = $('.connor-info');
        var gradientMove = $('.test');
        
	    	connorInfo.animate({
		    	left: "-500px"
	    	}, 250);
        
        gradientMove.removeClass('gradient');
        
    });
});

//OVERVIEW

$(document).ready(function () {
    $('.overview-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var overviewTop = $('.overview');
    	var overviewTopHeight = $('.overview').height();
    	    	
	    	overviewTop.animate({
		    	top: "0px",
                zIndex: "999999"
	    	}, 250);		
    });
});
    
    $(document).ready(function () {
    $('.test').on('click', function(event){
        event.preventDefault();

    	var overviewTop = $('.overview');
        var gradientMove = $('.test');
        
	    	overviewTop.animate({
		    	top: "-600px"
	    	}, 250);
        
        gradientMove.toggleClass('gradient');
        
    });
});

//PROJECT DETAILS

//Testing an idea for opening and closing the drawers without toggling a class but rather changing the z-index and using the gradient as the button

//Could use the hide-details to change the name to an X but might just use the gradient as the button an upload a custom cursor

$(document).ready(function () {
    $('.project-label').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
//        var projectClose = $('.hide-details');
        var projectTitle = $('.project-label');
    	var projectBottom = $('.project-details');
    	var projectBottomHeight = $('.project-details').height();
        
	   projectBottom.animate({
                zIndex: "999999",
		    	bottom: "0px"
	    	}, 250);	
        
//        projectTitle.toggleClass("hide-details");
//        projectClose.toggleClass("close");
        
    	}); 
    });


$(document).ready(function () {
    $('.test').on('click', function(event){
        event.preventDefault();

//        var projectClose = $('.hide-details');
    	var projectBottom = $('.project-details');
        var gradientMove = $('.test');
        
//        projectClose.toggleClass("close");

        projectBottom.animate({
		    	bottom: "-300px"
	    	}, 250);
        
        gradientMove.toggleClass('gradient');
        
    });
});   

//$('#menu').bind('clickoutside', function (event) {
//    var projectBottom = $('.project-details');
//    
//    projectBottom.animate({
//        bottom: "-300px"
//    });
//    
//});

//GRADIENT

var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);

//BUTTONS

$(document).ready(function(){
    var gradientButton = $('.overview-toggle, .project-label');
    var gradientMove = $('.test');
    
    gradientButton.click(function() {       
        gradientMove.toggleClass('gradient');
        
        gradientMove.animate({
                zIndex: "999998",
	    	});	
                
    });
});

//LOADING SCREEN 

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('whole-page', true);
    show('loading', false);
});

//CLOSE OVERVIEW TEST

//$(document).ready(function(){
//    var open = $('fa-the-large');
//    var button = $('fa');
//    
//    open.click(function() {
//        button.toggleClass('fa-times');
//    });
//});
   
    