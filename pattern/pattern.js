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
    slidesPerView: 3,
  });

  const slide2 = new Swiper('.slide2', {
    direction: "vertical",
    slidesPerView: 3,
  });

  const slide3 = new Swiper('.slide3', {
    direction: "vertical",
    slidesPerView: 3,
  });

  $("#timeset ul li .swiper-wrapper div").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  })

  $("#timeset").hide();
  $("#time .setting li .time").click(function(){
    $("#timeset").slideToggle();
  })


  // #timegap
  $("#timegap .flex .selet li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  })


  // #repeat
  $("#repeat .flex .select li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  })

  // #repeat .week
  $("#repeat .week li").removeClass("active")
  $("#repeat .week li").click(function(){
    if($(this).hasClass("active") === true){
      $(this).removeClass("active");
    }else{
     $(this).addClass("active");
    }
   
  })
  
  $("#repeat .week").hide();
  $("#repeat .flex .select .select-week").click(function(){
    $("#repeat .week").slideDown();
    $(this).siblings().click(function(){
      $("#repeat .week").hide();
    })
  })

  // .month
  $("#repeat .month").hide();
  $("#repeat .flex .select .select-month").click(function(){
    $("#repeat .month").slideDown();
    $(this).siblings().click(function(){
      $("#repeat .month").hide();
    })
  })


  // .month-select
  $("#repeat .month .month-select li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
  })

  // .month-slide
  const month_slide = new Swiper('.month-slide', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 50,
    //centeredSlides: true,
  });

  $("#repeat .month .month-slide li").removeClass("active");
  $("#repeat .month .month-slide li").click(function(){
    if($(this).hasClass("active") === true){
      $(this).removeClass("active");
    }else{
      $(this).addClass("active");
    }
  })


  // 공휴일 제외
  $("#repeat .month .month-select").hide();
  $("#repeat .month p").hide();
  $("#repeat .month .toggle .aa").change(function(){
    if($("#repeat .month .toggle .aa").is(":checked")){
      $("#repeat .month .month-select").show();
      $("#repeat .month p").show();
    }else{
      $("#repeat .month .month-select").hide();
      $("#repeat .month p").hide();
    }
  })


})