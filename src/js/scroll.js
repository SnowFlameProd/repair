$(function() {
  let scroll = $('#scroll');

  $(window).scroll (function() {
    if ($(this).scrollTop() > 250) {
      scroll.fadeIn();
    } else {
      scroll.fadeOut();
    }
  });

  scroll.on('click', function() {
    $('body, html').animate ({
      scrollTop: 0
    }, 400);
    return false;
  });
});