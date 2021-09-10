[ ver_1_2. 2021.07.27 수정 ]

- 수정사항

  .popup_type2 높이값 수정





[ ver_1_1. 2021.07.23 ~ 2021.07.26 수정 ]

- 수정사항

  1. wrap_aside > width 280px로 고정

  2. ico_arrow 이미지 파일 > entity code로 대체
  2.1. ico_arrow.png, ico_arrow_down.png 이미지 삭제

  3. 아이콘 마크업 수정
  3.1. 수정 전 <i class="~"></i>
       수정 후 <span class="~"></span>
  3.2. 수정 전 <span class="ico_align"></span>
       수정 후 <button type="button" class="ico_align"></button>

  4. aside, button, table, footer 등 스타일 수정

  5. wrap_close > .btn_close 마크업 위치, 스타일 수정 및 main.js 수정
    > popup_type2 밖에 위치


- 스타일 정리
  1. font-size: 12px / 14px

  2. font color
  2.1 gray #7F7F7F #4C4C4C #333 #555 #999
  2.2 blue #0070C0
  2.3 red #C22D2D

  3. background-color #F1F1F1, #F2F2F2, #DDD, #4C4C4C

  4. border #F1F1F1, #E5E8EB, #B6B6B6





[ ver_1 ]

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