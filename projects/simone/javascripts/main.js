// Start Loader
var loader = '<div class="loader-wrapper"><span class="loader"><span class="loader-inner"></span></span></div>';
$('body').append(loader);
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    $("html").css('overflow-y', 'scroll');
});
$(document).ready(function(){
    // Start Navigate
    var navList = ['menu', 'search', 'brands', 'in-stock'];
    for (let i = 0; i < navList.length; i++) {
        $('.navigate .'+ navList[i]).on('click', function(){
            $('.panels').css('z-index','20');
            $('.panels >div:nth-of-type('+ (i +1) +')').addClass('panel-fadein').removeClass('panel-fadeout');
            $('.panels .'+ navList[i]).find('.close-it span').click(function (){
                $('.panels').css('z-index','-1');
                $('.panels >div:nth-of-type('+ (i +1) +')').addClass('panel-fadeout').removeClass('panel-fadein');
            })
        })
    }
    $('.panels .brands').on('click', function(){
        $('.panels').css('z-index','0');
        $(this).addClass('panel-fadeout').removeClass('panel-fadein');
    })
    $('.navigate .menu').hover(function(){
        $('.line:nth-of-type(2)', this).css('margin-left', '1vw');
    }, function(){
        $('.line:nth-of-type(2)', this).css('margin-left', '0vw');
    });
    // Start Home 
    $('.home .carousel-inner h1').hover(function(){
        $('.home .carousel-inner').css({'height':'102%', 'width':'102%'});
        console.log('hi')
    }, function(){
        $('.home .carousel-inner').css({'height':'100%', 'width':'100%'});
        console.log('mi')
    })

    // Start Products
    $('.products .category span').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    // Enable Carousel Controls
    $(".products .indicate a:nth-of-type(1)").click(function(){
        $("#product").carousel("prev");
        $("#left").carousel("prev");
        $("#right").carousel("prev");
    });
    $(".products .indicate a:nth-of-type(2)").click(function(){
        $("#product").carousel("next");
        $("#left").carousel("next");
        $("#right").carousel("next");
    });

    // Start Projects
    // Enable Carousel Controls
    $(".projects .indicate a:nth-of-type(1)").click(function(){
        $("#captions").carousel("prev");
    });
    $(".projects .indicate a:nth-of-type(2)").click(function(){
        $("#captions").carousel("next");
    });

    
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
                }else{
                }
            }, delay);
        }
    }
    reveal('.home h1, .home ol, .home i')
    reveal('.navigate *')
    reveal('.navigate a', '', 500, h= 28)
    reveal('.panels .brands *', '.list')

    var sections = ['home', 'about', 'products', 'projects', 'news', 'contact'];
    sectionTop = [];
    var top = $(window).scrollTop();
    for (let s = 0; s < 5; s++) {
        sectionTop[s]= $('.'+sections[s]).offset().top - 300;
        if (top < sectionTop[s+1] && top > sectionTop[s] || top > sectionTop[sectionTop.length-1]){
            reveal('h1, h2, h3, h5, h6, a, p, hr, i, ol, span, .indicate, .carousel-inner', '.panels *, .carousel-caption *')
            reveal('span', '.indicate *')
            reveal('.skills span', '', 100)
            reveal('.sample img, .about img')
        }
    }
    $(window).scroll(function(){
        reveal('h1, h2, h3, h5, h6, a, p, hr, i, ol, span, .indicate, .carousel-inner')
        reveal('span', '.indicate *')
        reveal('.skills span', '', 100)
        reveal('.sample img, .about img')
        
        var top = $(window).scrollTop();
        if (top > $('.products').offset().top) {
            $('.navigate').css('opacity', '0');
        }else {
            $('.navigate').css('opacity', '1');
        }
    }) // End Scroll
})
    







































