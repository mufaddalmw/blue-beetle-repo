import $ from 'jquery';
let headerscroll = function(){
    
    if ( $(this).scrollTop() > 100 ) {
        $('.js-header').addClass('is-sticky');
    }
    else {
        $('.js-header').removeClass('is-sticky');
    }
    
}

$(window).scroll(headerscroll);