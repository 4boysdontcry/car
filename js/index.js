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
    $('.front-header .mo-login').css('color', '#fff')
    $header.find('.logo-wrap .logo').attr('src', '../img/logo-header-white.webp')
  }
  else {
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
  if(scTop === 0) $('.bt-moving-top').removeClass('active');
  else $('.bt-moving-top').addClass('active');
}


/*************** 이벤트 등록 *****************/
// onGetData();
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
  movingTop(scTop);
  scrollNotice(scTop)
}

function onChgNew(){
  $('.bt-handy').removeClass('active')
  $(this).addClass('active')
}

function onChgUsed(){   // json 파일의 데이터로 교체되는 로직짜기
  $('.bt-handy').removeClass('active')
  $(this).addClass('active')
  }

// function onGetData(r) {
//   var $listWrap = $('.list-wrapper .list-wrap')
//   lastIdx = r.handynew.length - 1;
//   r.handynew.forEach(function(v, i){
//     var html = '';
//     html += '<li class="list li2 smli">';
//     html += '<div class="img-wrap">';
//     html += '<img class="img" src="'+v.src+'" alt="차량이미지">';
//     html += '</div>';
//     html += '<div class="desc-wrap">';
//     html += '<div class="title">';
//     html += '<h4 class="title-wrap">'+v.title+'</h4>';
//     html += '<div class="price">'+v.price+'</div>';
//     html += '</div>';
//     html += '<div class="article">';
//     html += '<div class="year">'+v.year+'</div>';
//     html += '<div class="opt-wrap">';
//     html += '<div class="opt opt1">'+v.opt2+'</div>';
//     html += '<div class="opt opt2">'+v.opt1+'</div>';
//     html += '</div>';
//     html += '</div>';
//     html += '</div>';
//     html += '</li>';
//     $listWrap.append(html);
//   })
// $.get('../json/handynew.json', onGetData);
// }

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










