$(function () {
    AOS.init();
    $('.header').load('common/header.html')
    $('.footer').load('common/footer.html')

    var swiper = new Swiper(".mainSwiper", {
        loop: true,
        speed:1500,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
        },
    });

    $('#popup .close_btn').on('click', function() {
        $('#popup').hide();
    });//

})
