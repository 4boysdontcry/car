/*************** 글로벌 설정 *****************/


/*************** 사용자 함수 *****************/
slideMain();

function slideMain() {
	var swiper;
  var lastIdx = $('.slide').length - 1;
  swiper = getSwiper('.slide-wrapper', { break: 1, auto: false, delay: 2000 });
  swiper.on('slideChange', onChange)
  function onChange() {
    showAni( this.index );
  }
  function showAni() {
    $('.slide').removeClass('active');
    $('.slide').addClass('active');
  }
}

/*************** 이벤트 등록 *****************/
$('.subnavi').on('mouseenter', onSubnavi)
$('.subnavi').on('mouseleave', offSubnavi)

$('.navi').on('mouseenter', onShowSubnavi)
$('.navi').on('mouseleave', onHideSubnavi)


/*************** 이벤트 콜백 *****************/


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