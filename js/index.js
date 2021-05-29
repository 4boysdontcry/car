/*************** 글로벌 설정 *****************/


/*************** 사용자 함수 *****************/
$(document).ready(function(){
  $('.sb1').addClass('active')
  $('.bt-new').addClass('active')
})

function scrollNotice(scTop) {
  var $header = $('.header-wrapper');
  var headerHeight;
  if(scTop == 0) {
    $header.css('top', 'unset');
    $header.removeClass('active');
    $header.find('.logo-wrap .logo').attr('src', '../img/logo-header-white.webp')
  }
  else {
    headerHeight = $header.outerHeight();
    $header.css('top', -headerHeight + 'px');
    $header.css('top');
    $header.css('top', 0);
    $header.addClass('active');
    $header.find('.logo-wrap .logo').attr('src', '../img/logo-header-black.webp')
  }
}
function movingTop(scTop) {
  if(scTop === 0) $('.bt-moving-top').removeClass('active');
  else $('.bt-moving-top').addClass('active');
}


/*************** 이벤트 등록 *****************/
$(window).scroll(onScroll).trigger('scroll');

$('.subnavi').on('mouseenter', onSubnavi)
$('.subnavi').on('mouseleave', offSubnavi)
$('.navi').on('mouseenter', onShowSubnavi)
$('.navi').on('mouseleave', onHideSubnavi)

$('.subject').on('click', onActive)

$('.bt-used').on('click', onChgUsed)
$('.bt-new').on('click', onChgNew)


/*************** 이벤트 콜백 *****************/
function onScroll(e) {
  var scTop = $(this).scrollTop();
  scrollNotice(scTop);
  movingTop(scTop);
}

function onChgNew(){
  $('.bt-handy').removeClass('active')
  $(this).addClass('active')
}

function onChgUsed(){   // json 파일의 데이터로 교체되는 로직짜기
  $('.bt-handy').removeClass('active')
  $(this).addClass('active')
  function onGetData(v){
    for(v in '.list-wrapper')
    $('.list-wrapper .list').find('.img').attr('src', v.src)
    // $('.list-wrapper .list').find('.desc-wrap .title-wrap .title-wrap').val(v.title)
    // $('.list-wrapper .list').find('.desc-wrap .price').val(v.year)
    // $('.list-wrapper .list').find('.desc-wrap .opt').val(v.opt)
  }
  $.get('../json/handy.json', onGetData);
}

function onActive(){
  $('.subject').css('color', '#fff')
  $(this).css('color', '#ff4605')
  $('.subject').removeClass('active')
  $(this).addClass('active')
}

function onSubnavi(){
  $(this).find('.downsub-wrapper').css({"opacity": "1", "visibility": "visible"})
}

function offSubnavi(){
  $(this).find('.downsub-wrapper').css({"opacity": "0", "visibility": "hidden"})
}

function onShowSubnavi(){
  $('.subnavi-wrapper').css({"opacity": "0", "visibility": "hidden"})
  $(this).find('.subnavi-wrapper').css({"opacity": "1", "visibility": "visible"})
}

function onHideSubnavi(){
  $(this).find('.subnavi-wrapper').css({"opacity": "0", "visibility": "hidden"})
}