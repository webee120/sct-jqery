  $(document).ready(function(){
    $('.setbox').hide();

    $('.set2 .switch .toggle').change(function(){
      if($(this).is(':checked')){
        $('.setbox').show();
      } 
      else{
        $('.setbox').hide();
      }
    });
  });
