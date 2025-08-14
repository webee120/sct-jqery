$(document).ready(function(){
  // Alert functionality
  $(".tab-cont .cont2").hide();

  $("#alert .alert-tab li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".tab-cont > div").eq($(this).index()).show().siblings().hide();
  });


 
//calendar-modal//
 
  $('#calendar').click(function(){
      $("#dayModal").addClass('modal-open');
  });

  $('#dayModal .modal-close').click(function(){
      $("#dayModal").removeClass('modal-open');
  });

  $("#calendar").click(function(){
    $("#dayModal .calendar-modal-body").scrollTop(350);
  });


})

