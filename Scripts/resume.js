$( document ).ready(function() {
  var tabcontent = $('.tabcontent');
  var tablinks = $('.tab-link');

  tabcontent.each(function(i){
    $(this).css("display", "none");
  });
  $(".tab-link").click(function(){
    var i = $(this).attr('data-tab');
    if(i == 'tab6'){
      $(".tab-content").css("display", "block");
    }
  });
});
