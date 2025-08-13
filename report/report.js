$("document").ready(function(){
  $(".list > li:not(:first-child)").hide();
  $(".name li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".list > li").eq($(this).index()).show().siblings().hide();
  })
});