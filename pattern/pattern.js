$(document).ready(function(){
	$("#calendar .bottom ul.day li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
})