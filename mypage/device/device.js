$("document").ready(function(){
  $(".modal").hide();
  $(".modal .complete").hide();

  $(".button").click(function(){
    $(".modal").show();
  });
  $(".wifiselect .button").click(function(){
    $(".modal").hide();
  });
  $(".wifiselect .wifilist li").click(function(){
    $(".wifiselect").hide();
    $(".complete").show();
  })

  $(".modal2").hide();
  $(".modal2 .complete2").hide();

  $(".addbtn").click(function(){
    $(".modal2").show();
  });
  $(".modal2 .search-loading").click(function(){
    $(".search-loading").hide();
    $(".complete2").show();
  })
});