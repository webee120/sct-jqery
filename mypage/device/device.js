$("document").ready(function () {
  $(".modal").hide();
  $(".modal .complete").hide();

  $(".button").click(function () {
    $(".modal").show();
  });
  $(".wifiselect .button").click(function () {
    $(".modal").hide();
  });
  $(".wifiselect .wifilist li").click(function () {
    $(".wifiselect").hide();
    $(".complete").show();
  });

  $(".modal2").hide();
  $(".modal2 .complete2").hide();

  $(".addbtn").click(function () {
    $(".modal2").show();
  });
  $(".modal2 .search-loading").click(function () {
    $(".search-loading").hide();
    $(".complete2").show();
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
