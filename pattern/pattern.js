$(document).ready(function(){

  // #calendar
	$("#calendar .bottom ul.day li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });


  // .icon-box
  $(".icon-box").hide();
  $("#tit form .tit-icon .icon").click(function(){
    $(".icon-box").fadeToggle();
  })

  // .color-box
  $(".color-box").hide();
  $("#tit form .tit-icon .color").click(function(){
    $(".color-box").fadeToggle();
  })


  //.timeset
  const slide1 = new Swiper('.slide1', {
    direction: "vertical",
  });

  const slide2 = new Swiper('.slide2', {
    direction: "vertical"
  });

  const slide3 = new Swiper('.slide3', {
    direction: "vertical"
  });

})