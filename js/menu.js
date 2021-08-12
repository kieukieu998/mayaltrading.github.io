(function($) {
    $.fn.menumaker = function(options) {
        var mainmn = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function() {
            $(this).find(".button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            mainmn.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
                mainmn.find(".has-sub").prepend('<span class="submenu-button"></span>');
                mainmn.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else mainmn.addClass('dropdown');
            if (settings.sticky === true) mainmn.css('position', 'fixed');
            resizeFix = function() {
                var mediasize = 1000;
                if ($(window).width() > mediasize) {
                    mainmn.find('ul').show();
                }
                if ($(window).width() <= mediasize) {
                    mainmn.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);
(function($) {
    $(document).ready(function() {
        $("#main-menu").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);


jQuery.noConflict();
jQuery(document).ready(function($){
    $('.menu-cas-toggler').click(function(){
        $("body").toggleClass('no_scroll');
    });
});
jQuery.noConflict();
jQuery(document).ready(function($){
    $(function() {
        initDropDowns($("#menu-cas"));
    });
    function initDropDowns(allMenus) {
        allMenus.children(".menu-cas-toggler").on("click", function() {
            var thisTrigger = jQuery(this),
                thisMenu = thisTrigger.parent(),
                thisPanel = thisTrigger.next();
            if(thisMenu.hasClass("open")){
                thisMenu.removeClass("open");
                jQuery(document).off("click");
                thisPanel.off("click");
            }
            else{
                allMenus.removeClass("open");
                thisMenu.addClass("open");
                jQuery(document).on("click", function() {
                    allMenus.removeClass("open");
                });
                thisPanel.on("click", function(e) {
                    e.stopPropagation();
                });
            }
            return false;
        });
    }
});
jQuery.noConflict();
jQuery(document).ready(function($){
    $(document).ready(function() {
        $(".nav li a").each(function() {
            if ($(this).next().length > 0) {
                $(this).addClass("parent");
            };
        })
    })
    $(function(){
        $(".nav li").unbind('mouseenter mouseleave');
        $(".nav li a.parent").unbind('click').bind('click', function(e) {
            // must be attached to anchor element to prevent bubbling
            e.preventDefault();
            $(this).parent("li").toggleClass("hover");
        });
    });
});