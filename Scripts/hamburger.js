$( document ).ready(function() {
  $('#hamburger').click(function() {
    if($('#mobile-nav').css("display") == "none"){
      $('#mobile-nav').css("display", "block");
    }
    else{
      $('#mobile-nav').css("display", "none");
    }
  })
});
