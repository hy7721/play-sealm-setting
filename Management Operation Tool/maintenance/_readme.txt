1. 로그인, 계정 신청 <div id="wrapper" class="wrapper_type1">

  1. 첫 진입 화면
    login.html

  2.1 계정 신청
    signup.html
  2.2 계정 신청 완료
    signup_complete.html



2. 로그인 이후 wrapper_type2 <div id="wrapper" class="wrapper_type2">

  1. setting > authority
    setting.html

  2. 점검관리 > 업데이트
    update.html



3. 레이어 팝업
  1. 로그인, 계정 신청
    #wrapper .cont_wrap > .inner_type1 이후 .popup_type1 컨텐츠 삽입
    (max-width: 400px, min-height: 150px)
  
  2. 로그인 이후
    #wrapper .cont_wrap > main.cont_main_type2 이후 .popup_type2 컨텐츠 삽입
    (width: 1280px, height: 50vh)



4. 바뀐 내용
  - input 태그를 label 태그로 감싼 것.
  - button 클래스 정리(추가 및 제거 작업)
  - 레이어 팝업(popup_type1, popup_type2) 클래스 정리(추가 및 제거 작업)