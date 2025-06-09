$(function () {
    let $topBtn = $('.top_btn');
    let section01H = $('.section_01').offset().top;
    let footerH = $('.footer').offset().top;
    let windowH = $(window).height();

    //탑버튼
    $topBtn.on('click', function () {
        $('html').animate({
            scrollTop: 0
        }, 1000)
    });

    $(window).on('scroll', function () {
        let scrollbar = $(this).scrollTop();

        if (scrollbar > section01H) {
            $topBtn.addClass('show');
        } else {
            $topBtn.removeClass('show');
        }

        if (scrollbar + windowH > footerH) {
            $topBtn.addClass('color_wh');
        } else {
            $topBtn.removeClass('color_wh');
        }
    })


    let navHeight = $('.depth_02').height() + 32;

    $('.nav_bg').css('height', navHeight)

    $('.nav .gnb').mouseenter(function () {
        $('.nav_bg').addClass('down');
        $('.depth_02').addClass('down');
    });//네비게이션 호버 시 내려오기

    $('.nav .gnb').mouseleave(function () {
        $('.nav_bg').removeClass('down');
        $('.depth_02').removeClass('down');
    });
})