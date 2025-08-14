$(document).ready(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const pwField = document.getElementById("pw");
    const toggleBtn = document.getElementById("toggleBtn");
    const offIcon = toggleBtn.querySelector(".off");
    const onIcon = toggleBtn.querySelector(".on");

    toggleBtn.addEventListener("click", function () {
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

  $(".toggle_pw").click(function () {
    $(this).find("img").toggle();
  });

  // 비밀번호 입력 시 버튼 색상 변경
  $("#pw").on("input", function () {
    if ($(this).val().length >= 5) {
      $(".bottom-btn").addClass("active");
    } else {
      $(".bottom-btn").removeClass("active");
    }
  });

  // 회원 탈퇴 버튼 클릭
  $(".bottom-btn").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(".unsubscribe.warning").show();
    }
  });

  // warning 팝업 - 이전 버튼
  $(".unsubscribe.warning .prev").on("click", function () {
    $(".unsubscribe.warning").hide();
  });

  // warning 팝업 - 확인 버튼
  $(".unsubscribe.warning .ok").on("click", function () {
    $(".unsubscribe.warning").hide();
    $(".unsubscribe.leave").show();
  });

  // leave 팝업 - 확인 버튼 (가상 페이지로 이동)
  $(".unsubscribe.leave .ok").on("click", function () {
    window.location.href = "#";
  });

  // 팝업 바깥 클릭 시 팝업 닫기
  $(".unsubscribe").on("click", function (e) {
    if (e.target === this) {
      $(this).hide();
    }
  });
});
