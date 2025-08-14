    $(document).ready(function(){

      // $(".main .main-device .from-login").hide()
      $(".main .main-device .after-sethub").hide()
      $(".main .main-device .index-normal").hide()

      // 허브등록 index가 보임
      if (document.referrer.includes("/mypage/device/management.html")) {
        $(".main .main-device .from-login").show().siblings().hide();
      }

      // 기기등록 index가 보임
      if (document.referrer.includes("/mypage/device/install.html")) {
        $(".main .main-device .after-sethub").show().siblings().hide();
      }
      if (document.referrer.includes("/mypage/device/addevice.html")) {
        $(".main .main-device .after-sethub").show().siblings().hide();
      }

      // 일반 index가 보임
      if (document.referrer.includes("/mypage/device/addevice2.html")) {
        $(".main .main-device .index-normal").show().siblings().hide();
      }
      if (document.referrer.includes("/sensor/frontdoor.html")) {
        $(".main .main-device .index-normal").show().siblings().hide();
      }
      if (document.referrer.includes("/sensor/refrigerator.html")) {
        $(".main .main-device .index-normal").show().siblings().hide();
      }
      if (document.referrer.includes("/sensor/bedroom.html")) {
        $(".main .main-device .index-normal").show().siblings().hide();
      }
      if (document.referrer.includes("/sensor/bathroom.html")) {
        $(".main .main-device .index-normal").show().siblings().hide();
      }
      if (document.referrer.includes("/sensor/emergencybell.html")) {
        $(".main .main-device .index-normal").show().siblings().hide();
      }
      if (document.referrer.includes("/alert/main.html")) {
        $(".main .main-device .index-normal").show().siblings().hide();
      }
      if (document.referrer.includes("/report/healthreport.html")) {
        $(".main .main-device .index-normal").show().siblings().hide();
      }
      if (document.referrer.includes("/mypage/main.html")) {
        $(".main .main-device .index-normal").show().siblings().hide();
      }
      if (document.referrer.includes("/alert/thurs.html")) {
        $(".main .main-device .index-normal").show().siblings().hide();
      }








      const swiperindex = new Swiper('.indexswiper', {
        pagination: { // 페이지 위치
          el: ".swiper-pagination", // 슬라이드 페이지 버튼
          type: "bullets", // 'bullets' 'fraction' 'progressbar'
        },
      });



        // 프로필 클릭
      $(".warningModal").on("click", function (e) {
        $(".warning").show();
      });

      // warning 팝업 - 확인 버튼
      $(".warning .ok").on("click", function () {
        $(".warning").hide();
      });


      // 팝업 바깥 클릭 시 팝업 닫기
      $(".warning").on("click", function (e) {
        if (e.target === this) {
          $(this).hide();
        }
      });



      
    });          