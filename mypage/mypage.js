$(document).ready(function () {
  // input 실시간 감지 - 5자 이상이면 버튼 활성화
  $('#subscription input[type="text"]').on("input", function () {
    var inputLength = $(this).val().length;

    if (inputLength >= 5) {
      $(".bottom-btn").removeClass("disable").addClass("active");
    } else {
      $(".bottom-btn").removeClass("active").addClass("disable");
    }
  });

  // 확인 버튼 클릭
  $(".bottom-btn").on("click", function (e) {
    e.preventDefault();

    var inputValue = $('#subscription input[type="text"]').val();

    // 5자 미만이면 아무것도 하지 않음
    if (inputValue.length < 5) {
      return false;
    }

    // 123456789인지 체크
    if (inputValue === "123456789") {
      // 성공 모달 표시
      $(".confirm").show();
    } else {
      // 오류 모달 표시
      $(".error").show();
    }
  });

  // 오류 모달의 prev 버튼 클릭 - 모달 닫기
  $(".error .prev").on("click", function () {
    $(".error").hide();
  });

  // 확인 모달의 prev 버튼 클릭 - 모달 닫기
  $(".confirm .prev").on("click", function () {
    $(".confirm").hide();
    $(".owning.after").show();
    $(".owning.before").hide();
  });

  // 모달 바깥 영역 클릭하면 닫기
  $(".error").on("click", function (e) {
    if (e.target === this) {
      $(this).hide();
    }
  });

  $(".confirm").on("click", function (e) {
    if (e.target === this) {
      $(this).hide();
    }
  });

  $(".confirm").on("click", function (e) {
    if (e.target === this) {
      $(this).hide();
    }
  });

  const guide_list = new Swiper(".guide-list", {
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets', //bullets, fraction, progressbar 등 선택 가능
    clickable: true,
  },
  });

  $(document).ready(function() {
    // li.logout 클릭 시 첫 번째 모달(caution) 표시
    $('li.logout').on('click', function() {
        $('.caution').show();
    });
    
    // caution 모달의 "이전" 버튼 클릭 시 모달 닫기
    $('.caution .prev').on('click', function() {
        $('.caution').hide();
    });
    
    // caution 모달의 "확인" 버튼 클릭 시
    $('.caution .ok').on('click', function() {
        // 첫 번째 모달 닫기 후 바로 두 번째 모달 표시
        $('.caution').hide();
        $('.to-login').show();
    });
    
    // to-login 모달의 "확인" 버튼 클릭 시 모달 닫기 후 로그인 페이지로 이동
    $('.to-login .prev').on('click', function() {
        $('.to-login').hide();
        // 바로 로그인 페이지로 이동
        window.location.href = '#login';
    });
    
    // 모달 배경 클릭 시 닫기 (선택사항)
    $('.caution, .to-login').on('click', function(e) {
        if (e.target === this) {
            $(this).hide();
        }
    });
});
});
