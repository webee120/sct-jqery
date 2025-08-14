$(document).ready(function(){
  // Alert functionality
  $(".tab-cont .cont2").hide();

  $("#alert .alert-tab li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".tab-cont > div").eq($(this).index()).show().siblings().hide();
  });


})

