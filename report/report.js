$("document").ready(function(){

  $(".list > li:not(:first-child)").hide();

  $(".name li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".list > li").eq($(this).index()).show().siblings().hide();
  })

  //달력
  $('.day .calendar').click(function(){
      $("#dayModal").addClass('modal-open');
  });

  $('#dayModal .modal-close').click(function(){
      $("#dayModal").removeClass('modal-open');
  });

  $(".day .calendar").click(function(){
    $("#dayModal .calendar-modal-body").scrollTop(320);
  });

   //달력
  $('.week .calendar').click(function(){
      $("#weekModal").addClass('modal-open');
  });

  $('.modal-close').click(function(){
      $("#weekModal").removeClass('modal-open');
  });

  $(".week .calendar").click(function(){
    $(".calendar-modal-body").scrollTop(320);
  });

   //달력
  $('.month .calendar').click(function(){
      $("#monthModal").addClass('modal-open');
  });

  $('.modal-close').click(function(){
      $("#monthModal").removeClass('modal-open');
  });

  $(".month .calendar").click(function(){
    $(".calendar-modal-body").scrollTop(320);
  });

});


