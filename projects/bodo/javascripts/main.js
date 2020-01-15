// Start Loader
var loader = '<div class="loader-wrapper"><span class="loader"><span class="loader-inner"></span></span></div>';
$('body').append(loader);
$(window).on("load",function(){
		$(".loader-wrapper").fadeOut("slow");
		$("html").css('overflow-y', 'scroll');
});
$(document).ready(function(){
	var w = $(window).width()
	var skills = [
		{name: 'html', experience: 78},
		{name: 'css', experience: 91},
		{name: 'JQuery', experience: 58},
		{name: 'Php', experience: 63},
		{name: 'Photoshop', experience: 95}
	]
	new Vue({
		el: '.skills', 
		data: {
		skills: skills
		}
	})
	new Vue({
		el: '.blog', 
		data: {
		},
		methods:{
			time: function(days = 0, months = 0){
				var d = new Date();
					return (d.getDate()- days) + '/'+ (d.getMonth()- months+ 1)+ '/'+ d.getFullYear();
			}
		}
	})

	var sections = ['cover', 'about', 'work', 'service', 'employ', 'skills', 'educate', 'testimonials', 'blog', 'contact'];
	for (let n = 0; n < sections.length; n++) {
		$('.'+ sections[n]).attr('id', sections[n]);
		$('.home .list a:nth-of-type('+ (n +1) +')').attr('href','#'+ sections[n]);
		
	}
	

	// Start Home
	$('.nav .list img').click(function (){
		$('.home').fadeIn(500)
		$('.home .list').animate({"right":'0'},500)
		if(w > 767.98){
			$('.home .list a').addClass('fadeLeft')
		}
		$('.home .back').fadeIn(500)
		$('.home .back,i').click(function (){
			$('.home .list').animate({"right":'-19vw'},500)
			$('.home .list a').removeClass('fadeLeft')
			$('.home .back').fadeOut(500)
			$('.home').fadeOut(500)
		})
	})

	// Start Work
	$('.work .img').hover(function(){
		$('img', this).css({'filter':'none', 'transform':'scale(1.1)'})
		$('.reveal', this).css('opacity','.9')
	}, function(){
		$('img', this).css({'filter':'grayscale(100)', 'transform':'scale(1)'})
		$('.reveal', this).css('opacity','0')
	})

	// Start Employment And Education
	$('.frame').hover(function(){
		var $this = $(this), 
		$borders = ['<div class="top"</div>', '<div class="right"></div>', '<div class="bottom"></div>', '<div class="left"></div>'];
		f = w > 600 ? '0' : '4vw';
		sh = w > 600 ? '1.3vw 1.3vw' : '3vw 3vw';
		$(this).css({'top': f, 'left': f, 'box-shadow':sh})
		$(this).append($borders);
		$('.top, .bottom', this).animate({'width':'100%'}, 100);
		setTimeout( function() {
			$this.find('.right, .left').animate({'height':'100%'}, 100);
	   }, 200);

	}, function(){
		var $this = $(this);
		f = w > 600 ? '1vw' : '7vw';
		$(this).css({'top':f, 'left':f, 'box-shadow':'0 0'})
		$('.top, .bottom', this).css({'width':'0%'});
		setTimeout( function() {
			$('.right, .left').css({'height':'0%'});
	   }, 300);
	   setTimeout( function() {
		$this.find('.top, .bottom,.right, .left').remove();
	   }, 600);
	})

	// Start Social
	$('.social .col-4').hover(function(){
		$(this).animate({"top": '0'} ,{ duration: 200, easing:'linear' })
	}, function(){
		$(this).animate({"top": '-100%'} ,{ duration: 200, easing:'linear' })
	})

	// Start Scroll effects
	$(document).scroll( function(){

		function inViewport( element ){
			var el = element.getBoundingClientRect();
			var top = el.top - 25;
			var bottom = el.bottom - 25;
			return !(top > innerHeight || bottom < 0);
		}
	
		for(var i=0; i< 8; i++){
			var myElement = $('.desc')[i];
			if( inViewport( myElement ) ){
				for(var x=0; x< 7; x++){
					$(myElement).find('*').addClass('fadeIn');
					$(myElement).parent().addClass('fadeIn');
				}
			}else{
				$(myElement).parent().removeClass('fadeIn');
			}
		}

		var myElement = $('.skills')[0];
		n = w > 600 ? '3' : '4';
		
			if( inViewport( myElement ) ){
				$.each(skills, function (index, value) {
					$(myElement).find('.item:nth-of-type(' + (index + 1)+ ')').find('.bar').css({'width': parseInt(value.experience) + '%'}, 500).siblings('.pointer').css({'left': parseInt(value.experience)- parseInt(n) + '%'}, 500)
				});
			}	
	})
})

