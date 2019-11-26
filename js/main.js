"use strict";

var jq = $.noConflict();

jq(document).ready(function() {

    var winWidth    = jq(window).width();
    var winHeight   = jq(window).height();


    // Menu "Hamburger" Icon action --------------------------

    jq('.menu-icon').click(function() {

        jq('html, body').toggleClass('overflow-hidden');
        jq(this).find('.nav-icon').toggleClass('open');
        jq('#main-header, .main-menu').toggleClass('menu-opened');

    });





}); // JQuery Document End here