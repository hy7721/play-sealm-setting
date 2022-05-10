// layer-popup
function layerPopupOpen($t) {
  $(".wrap_popup" + "." + $t)
    .stop(true, true)
    .fadeIn(300);
}
function layerPopupClose() {
  $(".wrap_popup").each(function () {
    if ($(this).css("display") != "none") $(this).stop(true, true).fadeOut(300);
  });
}

$(document).on("click", ".btn_close", function () {
  if (!$(this).parent().css("display") != "none") {
    layerPopupClose();
  }
});

// setting_cs_002.html > 검색 버튼 클릭시 검색결과 노출
function srchResult() {
  $(".table_result").css("display", "block");
}

$(function () {
  // aside-menu
  $(".wrap_snb").accordion({
    heightStyle: "content",
  });

  // tab contents
  $(".wrap_tabs").tabs();

 // sortable list
  $(".sortable_list").sortable({
    placeholder: "ui-state-highlight"
  })
  .disableSelection();

  // toggle button
  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        // do this
        console.log("Checked");
      } else {
        // do that
        console.log("Not checked");
      }
    });
  });
});

// editor(summernote)
$(document).ready(function() {
  $('.summernote').summernote({
    placeholder: "내용을 입력해주세요.",
    tabsize: 2,
    minHeight: 300,
    focus: true,

    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['codeview', 'help']]
    ],

    popover: {
      table: [
        ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
        ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
        ['custom', ['tableStyles']]
      ],

      air: [
        ['color', ['color']],
        ['font', ['bold', 'underline', 'clear']],
        ['para', ['ul', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture']]
      ],

      image: [
        ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
        ['float', ['floatLeft', 'floatRight', 'floatNone']],
        ['remove', ['removeMedia']]
      ],
    },
    // 2022.01.28 추가
    styleTags: [
      'p', {
        tag: 'p', className: 'txt_article'
      },
    ],
    fontNames: ['Noto Sans KR', 'Apple SD Gothic Neo', 'sans-serif']
  });

  // 2022.1.19 추가
  $('.btn_summernote').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('is_active')) {
      $(this).removeClass('is_active');
      $(this).next().stop().slideUp(300);
    } else {
      $(this).addClass('is_active');
      $(this).next().stop().slideDown(300);
    }
  });
});

// support setting
$(document).on('click', '.btn_more', function() {
  $('.list_table_depth').append('<li><div class="item_table item_table1"><div class="wrap_cont_table"><a href="#none" class="txt_cs"></a><div class="wrap_option"><select name="select a person in charge" id="selectType" class="select_type3"><option selected="">운영1</option><option value="">운영2</option><option value="">운영3</option></select><button type="button" class="btn_more">+</button><button type="button" class="btn_less">-</button></div></div></div><div class="item_table item_table2"></div><div class="item_table item_table3"></div></li>');
});

$(document).on('click', '.btn_less', function() {
  // e.preventDefault();
  $(this).closest('.list_table_depth li').remove();
})