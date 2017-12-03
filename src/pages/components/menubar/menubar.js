import $, {jQuery} from 'jquery';

const menubar = {
    init: function(){
        this.handleEvents();
    },
    handleEvents: function(){
        $('.js-menu-toggle').on('click', this.js_menu_toggle);
        $('.nav-bar a').on('click', this.js_menu_toggle);
    },
    js_menu_toggle: function(){
        $('.bar').toggleClass('animate');
        $('.nav-bar').toggleClass('is-visible');
    }
}
menubar.init();