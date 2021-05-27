/*************** 글로벌 설정 *****************/


/*************** 사용자 함수 *****************/
slideMain();

function slideMain() {
	var swiper;
  swiper = getSwiper('.slide-wrapper', { break: 1, auto: false, delay: 5000 });
  swiper.on('slideChange', chgAni)
  function chgAni() {
      $(this).addClass('active')
  }
}


/*************** 이벤트 등록 *****************/
$('.subnavi').on('mouseenter', onSubnavi)
$('.subnavi').on('mouseleave', offSubnavi)

$('.navi').on('mouseenter', onShowSubnavi)
$('.navi').on('mouseleave', onHideSubnavi)


$('.subject').on('click', onActive)

/*************** 이벤트 콜백 *****************/

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