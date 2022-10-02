$(document).ready(function() {
	$(window).scroll(function() {
	if ($(this).scrollTop() > 1300 ) {
	  $('.main_bg').css('opacity', 0.15);
	} else {
	  $('.main_bg').css('opacity', 1);
	}
	});
});
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  'use strict';
    $('.hamburger-menu').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.menu-overlay').slideToggle( 'slow', 'swing' );
            $('.menu .menu-list').slideToggle( 'slow', 'swing' );
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        } else {
            $(this).addClass('active');
            $('.menu-overlay').slideToggle( 'slow', 'swing' );
            $('.menu .menu-list').slideToggle( 'slow', 'swing' );
            $('.hamburger-menu-wrapper').toggleClass('bounce-effect');
        }
    })
});