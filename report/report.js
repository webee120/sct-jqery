 //탭
    $(".breath-list ul li").not(":first").hide()
      $(".breath-name ul li").click(function(){
      $(this).addClass("active").siblings().removeClass("active")
        let aa = $(this).index()
      $(".breath-list ul li").eq(aa).fadeIn().siblings().hide()
    })