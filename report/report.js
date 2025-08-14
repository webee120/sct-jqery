$("document").ready(function(){

  $(".list > li:not(:first-child)").hide();

  $(".name li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".list > li").eq($(this).index()).show().siblings().hide();
  })

});


function laypopId(id){

        var $pop = $(id);

        $('.calendar').click(function(){
            $pop.addClass('modal-open');
        });

        $('.modal-close').click(function(){
            $pop.removeClass('modal-open');
        });

        $(".calendar").click(function(){
          $(".calendar-modal-body").scrollTop(380);
        });
      }