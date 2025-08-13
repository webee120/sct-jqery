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
});