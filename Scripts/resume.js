$( document ).ready(function() {
  $(".tab-link").click(function(){
    var i = $(this).attr('data-tab');
    if(i == 'tab6'){
      $(".tab-content").css("display", "block");
    }
  });
});
