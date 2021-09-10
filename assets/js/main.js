// 레이어 팝업
function layerPopupOpen($t){
  $(".wrap_popup" + "." + $t).stop(true, true).fadeIn(300);
};
function layerPopupClose(){
  $(".wrap_popup").each(function(){
    if($(this).css("display") != "none") $(this).stop(true, true).fadeOut(300);
  });
};

$(document).on("click", ".btn_close", function(){
  if(!$(this).parent().css("display") != "none"){
    layerPopupClose();
  };
});

$(function() {
  // aside 메뉴
  $(".wrap_snb").accordion({
    heightStyle: "content"
  });

  // 탭 컨텐츠
  $(".wrap_tabs").tabs();
});