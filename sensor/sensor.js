$(document).ready(function () {
  const body = document.querySelector("body");
  const select = document.querySelector(`[data-role="selectBox"]`);
  
  // 디버깅용 console.log
  console.log("select 요소:", select);
  
  if (!select) {
    console.error("selectBox 요소를 찾을 수 없습니다!");
    return;
  }
  
  const values = select.querySelector(".selected-option");
  const option = select.querySelector("ul");
  const opts = option.querySelectorAll("li");
  
  console.log("values:", values);
  console.log("option:", option);
  
  // history-list 요소들
  const historyList = document.querySelector("#history-list ul");
  const historyItems = historyList.querySelectorAll("li");

  /* 셀렉트영역 클릭 시 옵션 숨기기, 보이기 */
  function selects(e) {
    e.stopPropagation();
    option.setAttribute("style", `top:${select.offsetHeight}px`);
    if (option.classList.contains("hide")) {
      option.classList.remove("hide");
      option.classList.add("show");
    } else {
      option.classList.add("hide");
      option.classList.remove("show");
    }
    selectOpt();
  }

  /* 필터링 함수 */
  function filterHistoryItems(filterType) {
    historyItems.forEach((item) => {
      if (filterType === "전체") {
        // 전체 선택 시 모든 항목 보이기
        item.style.display = "block";
      } else if (filterType === "문열림") {
        // door 클래스가 있는 항목만 보이기
        if (item.classList.contains("door")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      } else if (filterType === "동작감지") {
        // movement 클래스가 있는 항목만 보이기
        if (item.classList.contains("movement")) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  }

  /* 옵션선택 */
  function selectOpt() {
    opts.forEach((opt) => {
      const innerValue = opt.innerHTML;
      function changeValue() {
        values.innerHTML = innerValue;
        // 옵션 선택 후 해당 필터 적용
        filterHistoryItems(innerValue);
        // 옵션 숨기기
        option.classList.add("hide");
        option.classList.remove("show");
      }
      opt.addEventListener("click", changeValue);
    });
  }

  /* 렌더링 시 옵션의 첫번째 항목 기본 선택 */
  function selectFirst() {
    const firstValue = opts[0].innerHTML;
    values.innerHTML = `${firstValue}`;
    // 첫번째 옵션에 따른 초기 필터링 적용
    filterHistoryItems(firstValue);
  }

  /* 옵션밖의 영역(=바디) 클릭 시 옵션 숨김 */
  function hideSelect() {
    if (option.classList.contains("show")) {
      option.classList.add("hide");
      option.classList.remove("show");
    }
  }

  selectFirst();
  select.addEventListener("click", selects);
  body.addEventListener("click", hideSelect);

  // #calendar
	$("#calendar .bottom ul.day li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
});