var counter = anime({
  targets: '#counter input',
  value: 100,
  duration: 3000,
  round: 1,
  easing: 'easeOutExpo'
});

var lineDrawing = anime({
  targets: ' .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  opacity: 1,
  delay: function(el, i) { return i * 300 },
  direction: 'alternate',
  loop: true
});

$(window).on('load', function(){
   $('#dvLoading').stop().fadeOut(5000);
});
