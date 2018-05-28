window.onload = function () { 

        var $ = $ || jQuery;
        if (!$) {
            return;
        }
        
        var map = {
            "fade": null,
            "left-to-right": "translateX(-100px)",
            "right-to-left": "translateX(100px)",
            "bottom-to-top": "translateY(300px)",
            "top-to-bottom": "translateY(-300px)",
            "rotate": "rotate(-720deg)",
            "rotate-c": "rotate(720deg)",
            "scale": "scale(.01)",
            "scale-rotate": "rotate(-720deg) scale(.01)"
        };
        
        var time;

        $('[animation]').each(function(){
            time = '1s';
            var eachElem = $(this);
            
            if (eachElem.attr("animation-time")) { 
                time = +eachElem.attr("animation-time") / 1000 + 's';   // Animation effect time
            }
            
            eachElem.css({'opacity':'0'});      
            var elementPosition = eachElem.offset().top;
            var animationAttr = eachElem.attr("animation");
            var action = map[animationAttr];
            if (typeof action == 'undefined') {
                
            } else if (action == null) {
                eachElem.css({'transition': time});    
            } else {
                eachElem.css({'-ms-transform':action, '-webkit-transform':action, '-moz-transform':action, '-o-transform':action, 'transform':action, 'transition': time});    
            }
            if ($(window).height() + $(window).scrollTop() > elementPosition) {
                 setTimeout(
                    function() {
                        eachElem.css({'-ms-transform':'initial', '-webkit-transform':'initial', '-moz-transform':'initial', '-o-transform':'initial', 'transform':'initial', 'opacity':'1'});
                    }, 700);
             } else {
                var onScroll = function() {
                    var delta = 170;
                    if (eachElem.attr("animation-offset")) { 
                        delta = +eachElem.attr("animation-offset");     // Scroll offset to display element
                    }
                    if (($(window).height() + $(this).scrollTop()) > (elementPosition + delta)) {
                            console.log('delta: ' + delta);
                         eachElem.css({'opacity':'1', '-ms-transform':'initial', '-webkit-transform':'initial', '-moz-transform':'initial', '-o-transform':'initial', 'transform':'initial'});
                         $(window).off('scroll', onScroll);
                    }
                };
                
                $(window).on('scroll', onScroll);
            }
        });
}