    $(document).ready(function(){

      $(".main .main-device .from-login").hide()
      $(".main .main-device .after-sethub").hide()
      // $(".main .main-device .index-normal").hide()

      if (document.referrer.includes("/mypage/device/management.html")) {
        $(".main .main-device .from-login").show().siblings().hide();
      }
      if (document.referrer.includes("/mypage/device/install.html")) {
        $(".main .main-device .after-sethub").show().siblings().hide();
      }


      const swiperindex = new Swiper('.indexswiper', {
        pagination: { // 페이지 위치
          el: ".swiper-pagination", // 슬라이드 페이지 버튼
          type: "bullets", // 'bullets' 'fraction' 'progressbar'
        },
      });

      
    });          