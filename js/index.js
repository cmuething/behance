			$("#limit-l").click(function() {
				console.log("Left");
				var obj = $(".curr");
				$(obj).animate({
					left: '-50%'
				}, 500, function() {
					$(this).css('left', '+150%');
    				$(this).appendTo('#full-projects');
				});
                var newTitle = $(obj).next().find('h1').html();
                var newDesc = $(obj).next().find('p').html();                
				$(obj).next().animate({
					left: '+50%'
				}, 500, function() {
					$(this).addClass('curr');
					$(obj).removeClass('curr');
				});
                $('.project-label .project-name').html(newTitle);
                $('.project-details .project-name').html(newTitle);
                $('.project-details .project-description').html(newDesc);
			});

			$("#limit-r").click(function() {
				console.log("Right");
				var obj = $(".curr");
				var prox = $(obj).siblings(":last");
				$(obj).animate({
					left: '+150%'
				}, 500, function() {
					$(prox).prependTo('#full-projects');
				});
                var newTitle = $(prox).find('h1').html();
                var newDesc = $(prox).find('p').html();
				$(prox).css('left', '-50%');
				$(prox).animate({
					left: '+50%'
				}, 500, function() {
					$(this).addClass('curr');
					$(obj).removeClass('curr');
				});
                $('.project-label .project-name').html(newTitle);
                $('.project-details .project-name').html(newTitle);
                $('.project-details .project-description').html(newDesc);
			});

//BUTTONS

$(document).ready(function(){
    var gradientButton = $('.overview-toggle, .project-label, .connor-info-toggle');
    var gradientMove = $('.test');
    
    gradientButton.click(function() {       
        gradientMove.toggleClass('gradient');
                
    });
});

//INFO

$(document).ready(function () {
    $('.connor-info-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
        var connorTitle = $('.connor-info-toggle');
    	var connorInfo = $('.connor-info');
    	var connorInfoWidth = $('.connor-info').width();
        var gradientMove = $('.test'); 
        var myName = $('#connor');
    	    	
	    	connorInfo.animate({
		    	left: "0px"
	    	});	
            
            myName.addClass('keep-name');
    });
    
    $('.test').on('click', function(event){
        event.preventDefault();

    	var connorInfo = $('.connor-info');
        var gradientMove = $('.test');
    	var connorInfoWidth = $('.connor-info').width();
        var myName = $('#connor');
        
	    	connorInfo.animate({
		    	left: "-800px"
	    	}, 250);
        
            gradientMove.removeClass('gradient');
        
            myName.removeClass('keep-name');
    });
});

//OVERVIEW

$(document).ready(function () {
    $('.overview-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var overviewTop = $('.overview');
    	var overviewTopHeight = $('.overview').height();
        var gradientMove = $('.test');
        
        var myName = $('#connor');
    	    	
	    	overviewTop.animate({
		    	top: "0px"
	    	}, 250);
                
            myName.addClass('keep-name');
        
    });

    $('.test').on('click', function(event){
        event.preventDefault();

    	var overviewTop = $('.overview');
        var gradientMove = $('.test');
    	var overviewTopHeight = $('.overview').height();
        
        var myName = $('#connor');

	    	overviewTop.animate({
		    	top: "-800px"
	    	}, 250);
        
            gradientMove.removeClass('gradient');
        
            myName.removeClass('keep-name');        
    });
});

//PROJECT DETAILS

$(document).ready(function () {
    $('.project-label').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
        var projectTitle = $('.project-label');
    	var projectBottom = $('.project-details');
    	var projectBottomHeight = $('.project-details').height();
        
        var myName = $('#connor');
        
           projectBottom.animate({
                    bottom: "0px"
                }, 250);
        
            myName.addClass('keep-name');
        
    	}); 

    $('.test').on('click', function(event){
        event.preventDefault();

    	var projectBottom = $('.project-details');
    	var projectBottomHeight = $('.project-details').height();
        var gradientMove = $('.test');
                
        var myName = $('#connor');
        
        projectBottom.animate({
		    	bottom: "-800px"
	    	}, 250);
        
        gradientMove.removeClass('gradient');
        
        myName.removeClass('keep-name'); 
    });
});   

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

 $('.gradient, .no_api').css({
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

//RETURN .scroll TO THE TOP

$(document).ready(function () {

$('.overview-toggle').click(function () {
        $(".scroll").animate({
            scrollTop: 0
        }, 600);
        return false;
});
});

//STYLING THE SOCIAL MEDIA LINKS

//$(document).ready(function () {
//    
//    $('.linkedin #icon').addClass("fa-linkedin-square");
//    $('.instagram #icon').addClass("fa-instagram");
//    $('.tumblr #icon').addClass("fa-tumblr-square");
//    
//});
    