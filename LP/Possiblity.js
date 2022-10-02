$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});
$(document).ready(function() {
	$(window).scroll(function() {
	if ($(this).scrollTop() > 1300 ) {
	  // $('.main_bg').css('opacity', 0.15);
	  $('.main_bg').css('opacity', 1);
	} else {
	  $('.main_bg').css('opacity', 1);
	}
	});
});

