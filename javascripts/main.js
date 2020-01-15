// Start Loader
var loader = '<div class="loader-wrapper"><span class="loader"><span class="loader-inner"></span></span></div>';
$('body').append(loader);
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    $("html").css('overflow-y', 'scroll');
});
$(document).ready(()=>{
    // Start Nav
    $('.nav-list a:nth-of-type(1)').addClass('active');
    var sections = ['home', 'about', 'work', 'skills', 'contact'];
	for (let n = 0; n < sections.length; n++) {
		$('.'+ sections[n]).attr('id', sections[n]);
        $('.nav-list a:nth-of-type('+ (n +1) +')').attr('href','#'+ sections[n]);
        $('.nav-list a:nth-of-type('+ (n +1) +')').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var bottom = '<div class="bottom"></div>';
            $(this).append(bottom);
            $('.bottom', this).animate({'width':'23%'}, 100);
            $(this).siblings().find('.bottom').remove();
        })
    }
    // Start Work
    $('.work h2').hover(function(){
        var bottom = '<div class="bottom"></div>';
            $(this).append(bottom);
            $('.bottom', this ).animate({'width':'100%'}, 100);
    }, function(){
        var $this = $('.work h2');
        $('.bottom', $this ).animate({'width':'0%'}, 100);
        setTimeout(function(){
            $this.find('.bottom').remove();
        }, 50)
    })

    // Dynamic Scroll
    function reveal(el, not= '', delay = 500, h = 25){

        function inViewport( element ){
            var el = element.getBoundingClientRect();
            var top = el.top - h;
            var bottom = el.bottom - h;
            return !(top > innerHeight || bottom < 0);
        }
        myElements = $(el);
        for(let i=0; i< myElements.length; i++){
            setTimeout(function(){
                myElement = $(el)[i];
                
                if( inViewport( myElement ) ){
                    $(myElement).not(not).addClass('fadeIn');
                }
            }, duration = el.includes('skill') ? i * delay : delay);
        }
    }
    reveal('.home h1');
    reveal('.navigate *')
    reveal('.navigate a', '', 500, h= 28)

    sectionTop = [];
    var top = $(window).scrollTop();
    for (let s = 0; s < 5; s++) {
        sectionTop[s]= $('.'+sections[s]).offset().top - 300;
        if (top < sectionTop[s+1] && top > sectionTop[s] || top > sectionTop[sectionTop.length-1]){
            var a = $('.nav-list a:nth-of-type('+ (s+1) +')');
            var bottom = '<div class="bottom"></div>';
            a.addClass('active').siblings().removeClass('active');
            a.append(bottom);
            $('.bottom', a).animate({'width':'23%'}, 100);
            a.siblings().find('.bottom').remove();

            reveal('h1, h2, h6, a, hr, img')
            reveal('span')
            reveal('.skills span', '', 100)
            reveal('.map')
        }
    }

    $(window).on('scroll',function(){
        reveal('h1, h2, h6, a, hr, img')
        reveal('span')
        reveal('.skills span', '', 100)
        reveal('.map')
        
        var top = $(window).scrollTop();  
        if (top < $('.home h1:nth-of-type(2)').offset().top) {
            $('.brand').css('top', '5vw')
            $('.career').css('top', '20vw')
            $('.nav-list').css('top', '30vw')
        }else {
            $('.brand, .career').css('top', '-1vw')
            $('.nav-list').css('top', '2vw')
        }
        
        sectionTop = [];
        for (let s = 0; s < 5; s++) {
            sectionTop[s]= $('.'+sections[s]).offset().top - 300;
            if (top < sectionTop[s+1] && top > sectionTop[s] || top > sectionTop[sectionTop.length-1]){
                var a = $('.nav-list a:nth-of-type('+ (s+1) +')');
                var bottom = '<div class="bottom"></div>';
                a.addClass('active').siblings().removeClass('active');
                a.append(bottom);
                $('.bottom', a).animate({'width':'23%'}, 100);
                a.siblings().find('.bottom').remove();
            }
        }
      
    }) // End Scroll function
}) // End document.ready function
