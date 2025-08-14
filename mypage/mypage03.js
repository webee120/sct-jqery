$(document).ready(function(){
 
document.addEventListener("DOMContentLoaded", function() {
  const pwField = document.getElementById("pw");
  const toggleBtn = document.getElementById("toggleBtn");
  const offIcon = toggleBtn.querySelector(".off");
  const onIcon = toggleBtn.querySelector(".on");

  toggleBtn.addEventListener("click", function() {
    if (pwField.type === "password") {
      pwField.type = "text";
      offIcon.style.display = "none";
      onIcon.style.display = "inline";
    } else {
      pwField.type = "password";
      offIcon.style.display = "inline";
      onIcon.style.display = "none";
    }
  });
});

  $(".toggle_pw").click(function(){
    $(this).find("img").toggle();
  });
  
})