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
  // 커스텀 셀렉트 초기화
  function initCustomSelect() {
    $(".custom-select").each(function () {
      const $select = $(this);
      const $display = $select.find(".select-display");
      const $dropdown = $select.find(".select-dropdown");
      const $options = $dropdown.find("li");

      // 드롭다운 토글
      $display.on("click", function (e) {
        e.stopPropagation();

        // 다른 드롭다운들 닫기
        $(".custom-select").not($select).find(".select-dropdown").slideUp(200);
        $(".custom-select")
          .not($select)
          .find(".select-display")
          .removeClass("active");

        // 현재 드롭다운 토글
        if ($dropdown.is(":visible")) {
          $dropdown.slideUp(200);
          $display.removeClass("active");
        } else {
          $dropdown.slideDown(200);
          $display.addClass("active");
        }
      });

      // 옵션 선택
      $options.on("click", function (e) {
        e.stopPropagation();

        const $option = $(this);
        const value = $option.data("value");
        const text = $option.text();

        // 선택된 옵션 스타일 업데이트
        $options.removeClass("selected");
        $option.addClass("selected");

        // 디스플레이 텍스트와 값 업데이트
        $display.text(text).attr("data-value", value);

        // 드롭다운 닫기
        $dropdown.slideUp(200);
        $display.removeClass("active");

        // 커스텀 이벤트 발생 (기존 select의 change 이벤트 대신)
        $select.trigger("customSelectChange", [value, text]);

        // 예제용 - 선택된 값 표시
        $("#selected-value").text(value + " (" + text + ")");
      });
    });

    // 외부 클릭시 드롭다운 닫기
    $(document).on("click", function () {
      $(".select-dropdown").slideUp(200);
      $(".select-display").removeClass("active");
    });

    // ESC 키로 드롭다운 닫기
    $(document).on("keydown", function (e) {
      if (e.keyCode === 27) {
        // ESC key
        $(".select-dropdown").slideUp(200);
        $(".select-display").removeClass("active");
      }
    });
  }

  // 커스텀 셀렉트 초기화 실행
  initCustomSelect();

  // 커스텀 이벤트 리스너 예제
  $("#location").on("customSelectChange", function (e, value, text) {
    console.log("선택된 값:", value, "텍스트:", text);
    // 여기에 필요한 로직 추가
  });

  // 프로그래밍 방식으로 값 설정하는 함수
  window.setCustomSelectValue = function (selectId, value) {
    const $select = $("#" + selectId);
    const $option = $select.find('li[data-value="' + value + '"]');

    if ($option.length) {
      $option.click();
    }
  };

  // 현재 선택된 값 가져오는 함수
  window.getCustomSelectValue = function (selectId) {
    return $("#" + selectId)
      .find(".select-display")
      .attr("data-value");
  };
});
