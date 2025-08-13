$("document").ready(function(){
  $(".list > li:not(:first-child)").hide();
  $("#breath ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".list > li").eq($(this).index()).show().siblings().hide();
  })
});