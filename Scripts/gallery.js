//Created with Flickity
//Find the documentation here https://flickity.metafizzy.co 
$(document).ready( function(){
  $('.main-gallery').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    draggable: false,
    lazyLoad: 1,
    freeScroll: true,
    wrapAround: true
  });

  $('.has-pictures').click(function(){
    $('.claire-bob').css('display', 'block');
      // resize flickity after being shown
     $('.main-gallery').flickity('resize');
    $('#details-placeholder').css('display', 'none');
  });
  $('#close-button').click(function(){
    $('#mobile-details').css('display', 'none');
  });
});
