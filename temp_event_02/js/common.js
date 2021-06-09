$(function () {
  var st = 0
  var tempSt = 0
  var timer = null

  var idx = 0
  var delay = 1 // 스크롤 이벤트의 setTimeout 실행 시간을 설정합니다.

  var $gnb = $('.grp_quick')

  var storedHash = window.location.hash === '' ? '#evt1' : window.location.hash
  var gnbOffsetTop = $gnb.offset().top
  var gnbList = ['#evt1', '#evt2', '#evt3']
  var scrollbar = function () {
    var $d2 = $('<div class="inner_scrollbar"></div>'),
      $d1 = $('<div class="outer_scrollbar"></div>').append($d2),
      e2 = $d2[0],
      e1 = $d1[0],
      w2,
      w1
    $('body').append(e1)
    w2 = e2.offsetWidth
    $d1.css({ overflow: 'scroll' })
    w1 = e1.clientWidth
    $d1.remove()
    return w2 - w1
  }

  function effect() {
    clearTimeout(timer)

    timer = setTimeout(function () {
      st = $(this).scrollTop()

      tempSt = st
    }, delay)
  }

  for (var i = 0; i < gnbList.length; i++) {
    if (storedHash === gnbList[i]) idx = i
  }

  if ('onhashchange' in window) {
    window.onhashchange = function () {
      storedHash = window.location.hash === '' ? '#evt1' : window.location.hash

      window.location.href = window.location.href

      $('.link_quick[href *= "' + storedHash + '"]').trigger('click')
    }
  } else {
    var storedHash = window.location.hash

    window.setInterval(function () {
      if (window.location.hash !== storedHash) {
        storedHash = window.location.hash === '' ? '#evt1' : window.location.hash

        window.location.href = window.location.href

        $('.link_quick[href *= "' + storedHash + '"]').trigger('click')
      }
    }, 100)
  }

  setTimeout(function () {
    $('.grp_quick li').eq(idx).find('a').addClass('current').parent().siblings().find('.link_quick').removeClass('current')

    $('[class ^="conts_"]').removeClass('current').eq(idx).addClass('current')
  }, 1)

  $(window).on('beforeunload', function () {
    $(window).scrollTop(0)
  })

  $(window).on('load', function () {
    if (this.scrollTO) {
      clearTimeout(this.scrollTO)
    }

    this.scrollTO = setTimeout(function () {
      $(this).trigger('scrollEnd')
    }, 40)
  })

  $(window).on('scrollEnd', function () {
    effect(idx)
  })

  $(window).on('scroll', function () {
    scrollTop = $(this).scrollTop()

    if (scrollTop >= gnbOffsetTop) {
      $gnb.addClass('fixed')
    } else {
      $gnb.removeClass('fixed')
    }

    if ($(window).scrollTop() > $('.grp_hero').height() + $('.grp_quick').height()) {
      $('.btn_top')
        .stop()
        .animate({ top: $(window).scrollTop() - $('.grp_hero').height() + $('.grp_quick').height() + 426 }, 1200)
    } else {
      $('.btn_top').stop().animate({ top: 426 }, 400)
    }

    if (this.scrollTO) {
      clearTimeout(this.scrollTO)
    }

    this.scrollTO = setTimeout(function () {
      $(this).trigger('scrollEnd')
    }, 40)
  })

  $('.link_quick').on('click', function () {
    if ($(this).hasClass('current')) return false

    idx = $(this).parent().index()

    var t = $('.grp_hero').height() - 61

    $(this).addClass('current').parent().siblings().find('.link_quick').removeClass('current')

    $('[class ^="conts_"]').removeClass('current').eq(idx).addClass('current')

    $('html, body')
      .stop()
      .animate({ scrollTop: t }, 400, function () {
        isTest = true

        if (this.scrollTO) {
          clearTimeout(this.scrollTO)
        }

        this.scrollTO = setTimeout(function () {
          $(this).trigger('scrollEnd')
        }, 400)
      })
  })

  $('.grp_quick').css({
    'padding-bottom': scrollbar()
  })

  $(window)
    .add('.grp_quick')
    .on('scroll', function () {
      var $this = $(this)
      var $element = $(window)

      if (!$(this).is('.grp_quick')) $element = $('.grp_quick')

      $element.scrollLeft($this.scrollLeft())
    })
})
