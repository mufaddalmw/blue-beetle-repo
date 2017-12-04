import Swiper from "swiper";

const carousel = {
    init: function(){
        this.homecarousel();
    },
    homecarousel: function() {
        let swiper = new Swiper('.js-carousel', {
            breakpoints: {
                // when window width is <= 640px
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }, 
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },   
            speed: 600,
            slidesPerView:2,
            spaceBetween: 20,
            slidesPerGroup: 2
        });
    }
}
carousel.init();