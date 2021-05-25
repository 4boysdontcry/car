/*************** 글로벌 설정 *****************/


/*************** 사용자 함수 *****************/
slideMain();

function slideMain() {
	var swiper;
  swiper = getSwiper('.slide-wrapper', { break: 1, auto: false, delay: 5000 });
  swiper.on('slideChange', onChange)
  function onChange() {
    for(var i=0; i<$('.slide').length; i++){
      $('.slide').find('.img-wrap').removeClass('active')
      $('.slide').eq(i).find('.img-wrap').addClass('active')
    $('.slide').eq(i).find('.img-wrap').fadeIn(5000)
    }
  }
}

/*************** 이벤트 등록 *****************/
$('.subnavi').on('mouseenter', onSubnavi)
$('.subnavi').on('mouseleave', offSubnavi)

$('.navi').on('mouseenter', onShowSubnavi)
$('.navi').on('mouseleave', onHideSubnavi)

// $('.subject').on('click', showArrow)
$('.subject').on('click', chgColor)

/*************** 이벤트 콜백 *****************/
// function showArrow(){

// }

function chgColor(){
  $('.subject').css('color', '#fff')
  $('.subject::after').css('display', 'inline-block')
  $(this).css('color', '#ff4605')
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