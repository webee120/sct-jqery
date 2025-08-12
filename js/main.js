    $(document).ready(function(){
      $(".main .main-device .from-login").hide()
      $(".main .main-device .after-sethub").hide()

      const swiperindex = new Swiper('.indexswiper', {
        pagination: { // 페이지 위치
          el: ".swiper-pagination", // 슬라이드 페이지 버튼
          type: "bullets", // 'bullets' 'fraction' 'progressbar'
        },
      });
    });          