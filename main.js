$(function () {
  $('.portfolio-item').mixItUp();
});
jQuery(document).ready(function ($) {
  $('.pie_progress').asPieProgress({
      namespace: 'pie_progress',
  speed: 50,
  easing: 'linear'
  });

  $('.pie_progress').asPieProgress('start');
});