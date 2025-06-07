$(function () {
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