import $, {jQuery} from 'jquery';

const header = {
    init: function(){
        this.headerscroll();
        this.handleEvents();
    },
    handleEvents: function(){
        $(window).scroll(this.headerscroll);
    },
    headerscroll: function(){
        if ( $(this).scrollTop() > 100 ) {
            $('.js-header').addClass('is-sticky');
        }
        else {
            $('.js-header').removeClass('is-sticky');
        }
    }
}
header.init();