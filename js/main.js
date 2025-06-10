$(function() {
    $('.header').load('common/header.html')
    $('.footer').load('common/footer.html')

    var swiper = new Swiper(".mainSwiper", {
                loop: true,
                effect: "fade",
                pagination: {
                    el: ".swiper-pagination",
                },
            });
    
})
