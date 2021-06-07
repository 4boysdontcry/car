/*************** 글로벌 설정 *****************/
$(window).scroll(onScroll).trigger('scroll');

$(document).ready(function () {
  $('.sb1').addClass('active');
  onChgNew();
})


/*************** 사용자 함수 *****************/
function scrollNotice(scTop) {
  var $header = $('.header-wrapper');
  var headerHeight;
  if (scTop == 0) {
    $header.css('top', 'unset');
    $header.removeClass('active');
    $('.front-header .mo-login').css('color', '#fff')
    $header.find('.logo-wrap .logo').attr('src', '../img/logo-header-white.webp')
  } else {
    headerHeight = $header.outerHeight();
    $header.css('top', -headerHeight + 'px');
    $header.css('top');
    $header.css('top', 0);
    $header.addClass('active');
    $('.front-header .mo-login').css('color', '#ff4605')
    $header.find('.logo-wrap .logo').attr('src', '../img/logo-header-black.webp')
  }
}

function movingTop(scTop) {
  if (scTop === 0) $('.bt-moving-top').removeClass('active');
  else $('.bt-moving-top').addClass('active');
}

function slideMain() {
  console.log('hi');
  var swiper = new Swiper('.slide-wrap', {
    autoplay: {
      delay: 3000
    },
    loop: true,
  });
}
slideMain();

function slideInfo() {
  function onGetData(r) {
    r.handy.forEach(function (v, i) {
      var html = '';
      html += '<li class="swiper-slide slide">';
      html += '<div class="img-wrap">';
      html += '<img src="' + v.src + '" alt="사진">';
      html += '</div>';
      html += '<div class="bt-wrap">';
      html += '<a class="call" href="tel:' + v.call + '"> <i class="bi-telephone-fill"></i> </a>';
      html += '<a class="msg" href="mailto:' + v.email + '"> <i class="bi-envelope-fill"></i> </a>';
      html += '</div>';
      html += '<div class="person-info">';
      html += '<div class="info-head">';
      html += '<h6 class="name">' + v.name + '</h6>';
      html += '<p class="job">Customer Advisor</p>';
      html += '</div>';
      html += '<div class="info-body">';
      html += '<a href="mailto:' + v.email + '">' + v.email + '</a>';
      html += '<a href="tel:' + v.call + '">' + v.call + '</a>';
      html += '</div>';
      html += '</div>';
      html += '</li>';
      $('.team-wrapper .slide-case').append(html);
    })
    var swiper = new Swiper('.slide-runner', {
      autoplay: {
        delay: 3000
      },
      loop: true,
      slidesPerView: 2,
    });
  }
  $.get('../json/team.json', onGetData);
}
slideInfo();

function sponSlide() {
  var swiper = new Swiper('.bar-wrapper', {
    autoplay: {
      delay: 5000
    },
    loop: true,
    slidesPerView: 4,
  });
}
sponSlide();


/*************** 이벤트 등록 *****************/
$('.subnavi').on('mouseenter', onSubnavi)
$('.subnavi').on('mouseleave', offSubnavi)
$('.navi').on('mouseenter', onShowSubnavi)
$('.navi').on('mouseleave', onHideSubnavi)

$('.subject').on('click', onActive)

$('.bt-new').on('click', onChgNew)
$('.bt-used').on('click', onChgUsed)


/*************** 이벤트 콜백 *****************/
function onScroll(e) {
  var scTop = $(this).scrollTop();
  movingTop(scTop);
  scrollNotice(scTop)
}

function onChgNew() {
  $('.bt-handy').removeClass('active');
  $('.bt-new').addClass('active');
  // $('.handy-wrapper .list-wrapper').empty();

  function genHTML(v, i) {
    var html = '';
    if(i > 0) html += '<li class="list">';
    html += '<div class="img-wrap">';
    html += '<img class="img" src="' + v.src + '" alt="차량이미지">';
    html += '</div>';
    html += '<div class="desc-wrap">';
    html += '<div class="title">';
    html += '<h4 class="title-wrap">' + v.title + '</h4>';
    html += '</div>';
    html += '<div class="article">';
    html += '<div class="year">' + v.year + '</div>';
    html += '<div class="opt-wrap">';
    html += '<div class="opt opt1">' + v.opt1 + '</div>';
    html += '<div class="opt opt2">' + v.opt2 + '</div>';
    html += '</div>';
    html += '<div class="price">' + v.price + '</div>';
    html += '</div>';
    html += '</div>';
    if(i > 0) html += '</li>';
    return html;
  }

  function onGetData(r) {
    r.handy.forEach(function (v, i) {
      if(i == 0) $('.handy-wrapper .list-wrapper .li1').append(genHTML(v, i));
      else $('.handy-wrapper .list-wrapper .list-wrap').append(genHTML(v, i));
    })
  }
  $.get('../json/handynew.json', onGetData);
}


function onChgUsed() {
  $('.bt-handy').removeClass('active');
  $('.bt-used').addClass('active');
  $('.handy-wrapper .list-wrapper').empty();

  function onGetData(r) {
    r.handy.forEach(function (v, i) {
      // console.log(i)
      var html = '';
      if (i == 0) {
        html += '<li class="list li1">';
        html += '<div class="img-wrap">';
        html += '<img class="img" src="' + v.src + '" alt="차량이미지">';
        html += '</div>';
        html += '<div class="desc-wrap">';
        html += '<div class="title">';
        html += '<h4 class="title-wrap">' + v.title + '</h4>';
        html += '</div>';
        html += '<div class="article">';
        html += '<div class="year">' + v.year + '</div>';
        html += '<div class="opt-wrap">';
        html += '<div class="opt opt1">' + v.opt1 + '</div>';
        html += '<div class="opt opt2">' + v.opt2 + '</div>';
        html += '</div>';
        html += '<div class="price">' + v.price + '</div>';
        html += '</div>';
        html += '</div>';
        html += '</li>';
      }
      if (i == 1) {
        html += '<li class="list-subwrap">';
        html += '<ul class="list-wrap">';
        for (i = 1; i < r.handy.length; i++) {
          html += '<li class="list smli">';
          html += '<div class="img-wrap">';
          html += '<img class="img" src="' + v.src + '" alt="차량이미지">';
          html += '</div>';
          html += '<div class="desc-wrap">';
          html += '<div class="title">';
          html += '<h4 class="title-wrap">' + v.title + '</h4>';
          html += '<div class="price">' + v.price + '</div>';
          html += '</div>';
          html += '<div class="article">';
          html += '<div class="year">' + v.year + '</div>';
          html += '<div class="opt-wrap">';
          html += '<div class="opt opt1">' + v.opt1 + '</div>';
          html += '<div class="opt opt2">' + v.opt2 + '</div>';
          html += '</div>';
          html += '</div>';
          html += '</div>';
          html += '</li>';
        }
        html += '</ul>';
        html += '</li>';
      }
      $('.handy-wrapper .list-wrapper').append(html);
    })
  }
  $.get('../json/handyused.json', onGetData);
}

function onActive() {
  $('.subject').css('color', '#fff')
  $(this).css('color', '#ff4605')
  $('.subject').removeClass('active')
  $(this).addClass('active')
}

function onSubnavi() {
  $(this).find('.downsub-wrapper').css({
    "opacity": "1",
    "visibility": "visible"
  })
}

function offSubnavi() {
  $(this).find('.downsub-wrapper').css({
    "opacity": "0",
    "visibility": "hidden"
  })
}

function onShowSubnavi() {
  $('.subnavi-wrapper').css({
    "opacity": "0",
    "visibility": "hidden"
  })
  $(this).find('.subnavi-wrapper').css({
    "opacity": "1",
    "visibility": "visible"
  })
}

function onHideSubnavi() {
  $(this).find('.subnavi-wrapper').css({
    "opacity": "0",
    "visibility": "hidden"
  })
}