$(document).ready(function() {
    
  // input 실시간 감지 - 5자 이상이면 버튼 활성화
  $('#subscription input[type="text"]').on('input', function() {
      var inputLength = $(this).val().length;
      
      if (inputLength >= 5) {
          $('.bottom-btn').removeClass('disable').addClass('active');
      } else {
          $('.bottom-btn').removeClass('active').addClass('disable');
      }
  });
  
  // 확인 버튼 클릭
  $('.bottom-btn').on('click', function(e) {
      e.preventDefault();
      
      var inputValue = $('#subscription input[type="text"]').val();
      
      // 5자 미만이면 아무것도 하지 않음
      if (inputValue.length < 5) {
          return false;
      }
      
      // 123456789인지 체크
      if (inputValue === '123456789') {
          // 성공 모달 표시
          $('.confirm').show();
      } else {
          // 오류 모달 표시
          $('.error').show();
      }
  });
  
  // 오류 모달의 prev 버튼 클릭 - 모달 닫기
  $('.error .prev').on('click', function() {
      $('.error').hide();
  });
  
  // 확인 모달의 prev 버튼 클릭 - 모달 닫기
  $('.confirm .prev').on('click', function() {
      $('.confirm').hide();
  });
  
  // 모달 바깥 영역 클릭하면 닫기
  $('.error').on('click', function(e) {
      if (e.target === this) {
          $(this).hide();
      }
  });
  
  $('.confirm').on('click', function(e) {
      if (e.target === this) {
          $(this).hide();
      }
  });
  
});