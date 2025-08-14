$(document).ready(function(){

  // #calendar
	$("#calendar.type-one .bottom ul.day li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });


  //달력 모달창
  $('#calendar .top .icon').click(function(){
    $("#dayModal").addClass('modal-open');
  });

  $('#dayModal .modal-close').click(function(){
    $("#dayModal").removeClass('modal-open');
  });

  $("#calendar .top .icon").click(function(){
    $("#dayModal .calendar-modal-body").scrollTop(350);
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




  // 일정 추가
  // 달력 모달창
  $('#time .setting .day').click(function(){
    $("#dayModal").addClass('modal-open');
  });
  
  $('#dayModal .modal-close').click(function(){
    $("#dayModal").removeClass('modal-open');
  });

  $("#calendar .top .icon").click(function(){
    $("#dayModal .calendar-modal-body").scrollTop(350);
  });


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

  $("#repeat .month .month-slide .active").hide();
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



  // 일정 관리
  // 탭 메뉴
  $(".item > ul > li").not(":first").hide();
  $(".option ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")

    let idx = $(this).index();
    $(".item > ul > li").eq(idx).show().siblings().hide();
  })


  // 달력 모달창
  $('#time .setting .day').click(function(){
    $("#dayModal").addClass('modal-open');
  });
  
  $('#dayModal .modal-close').click(function(){
    $("#dayModal").removeClass('modal-open');
  });

  $("#calendar .top .icon").click(function(){
    $("#dayModal .calendar-modal-body").scrollTop(350);
  });

  //캘린더
  $("#calendar.type-all .bottom ul.day li").click(function(){

    if($(this).hasClass("active") === true) {
    // class가 존재함.
    $(this).removeClass("active");

    } else {
    // class가 존재하지 않음	
    
    $("#calendar.type-all .bottom ul.day li").removeClass("active");
    $(this).addClass("active");
    }

   // $(this).addClass("active").siblings().removeClass("active");
   // $(this).parents("#calendar .bottom ul.day").find("li").removeClass("active");
  });
  
  
  //일정 삭제
  $("#schedule .trash").click(function(){
    $(this).parents("#box").hide();
  })


  // 매주반복
  $("#re-week > ul .no-repeat").hide();
  $(".mon").click(function(){
    $(this).find(".no-repeat").slideToggle();
  })

  $("#re-week > ul #schedule").hide();
  $(".tue").click(function(){
    $(this).find("#schedule").slideToggle();
  })

  $("#re-week > ul .no-repeat").hide();
  $(".wed").click(function(){
    $(this).find(".no-repeat").slideToggle();
  })

  $("#re-week > ul #schedule").hide();
  $(".thu").click(function(){
    $(this).find("#schedule").slideToggle();
  })

  $("#re-week > ul .no-repeat").hide();
  $(".fri").click(function(){
    $(this).find(".no-repeat").slideToggle();
    $(this).fine(".arrow").rotate(180)
  })

  $("#re-week > ul .no-repeat").hide();
  $(".sat").click(function(){
    $(this).find(".no-repeat").slideToggle();
    $(this).fine(".arrow").rotate(180)
  })

  $("#re-week > ul .no-repeat").hide();
  $(".sun").click(function(){
    $(this).find(".no-repeat").slideToggle();
    $(this).fine(".arrow").rotate(180)
  })

  $("#re-month > ul #schedule").hide();
  $("#re-month > ul").click(function(){
    $(this).find("#schedule").slideToggle();
  })
})