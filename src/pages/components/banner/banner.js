// import $ from 'jquery';
import Swiper from "swiper";

const banner = {
    init: function(){
        this.homebanner();
        this.handleEvents();
    },
    handleEvents: function(){
        $(window).load(this.handleEvents);
    },
    homebanner: function() {
        let swiper = new Swiper('.js-home-banner', {
            autoplay: {
                delay: 3000,
                // disableOnInteraction:false
            },
            fadeEffect: {
                crossFade: true
            },
            effect: 'fade',
            speed: 1000,
        });
    }
}
banner.init();
