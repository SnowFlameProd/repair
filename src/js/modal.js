$(function() {
  const button = $('#button');
  const modal = $('#modal');
  const close = $('#close');

  button.on('click', function() {
    modal.fadeIn();
  });

  close.on('click', function() {
    modal.fadeOut();
  });
});