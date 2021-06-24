// 레이어 팝업
function layerPopupOpen($t){
  $(".wrap_popup" + "." + $t).stop(true, true).fadeIn(300);
};
function layerPopupClose(){
  $(".wrap_popup").each(function(){
    if($(this).css("display") != "none") $(this).stop(true, true).fadeOut(300);
  });
};

// 팝업창 외부 클릭 했을 때 팝업창 사라지는 효과
$(document).on("click", ".wrap_popup .wrap_dimmed", function(){
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


// function responsiveWidth() {
//   let $selector = document.getElementByClass("popup_type2_items");
//   $selector.style.width = "100%";

//   if ($selector.scrollWidth > $selector.clientWidth) {
//     $selector.style.width = "calc(100% - 20px)";
//   }
// }