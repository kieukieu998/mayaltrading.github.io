$(function() {
    $(window).scroll(function(event) {
        /* Act on the event */
        var vitri = $(window).scrollTop();
        console.log(vitri);
        if(vitri < 400) {
            $('.backtotop').removeClass('show-backtotop1');
        }
        else if (vitri < 600) {
            $('.backtotop').addClass('show-backtotop1');
            $('.backtotop').removeClass('show-backtotop2');
        }
        else if (vitri < 1100) {
            $('.backtotop').addClass('show-backtotop2');
            $('.backtotop').removeClass('show-backtotop3');
        }
        else if (vitri < 1800) {
            $('.backtotop').addClass('show-backtotop3');
            $('.backtotop').removeClass('show-backtotop4');
        }
        else if (vitri < 2500) {
            $('.backtotop').addClass('show-backtotop4');
            $('.backtotop').removeClass('show-backtotop');
        }
        else {
            $('.backtotop').addClass('show-backtotop');
        }
    });

    $('.backtotop').click(function(event) {
        $('body, html').animate({scrollTop: 0}, 1000);
    });
})