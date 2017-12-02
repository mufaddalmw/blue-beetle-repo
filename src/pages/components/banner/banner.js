// import $ from 'jquery';
import Swiper from "swiper";

function homebanner() {
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
// homebanner();

export {homebanner};