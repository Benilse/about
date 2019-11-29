//스크롤시 메뉴바가 따라다니도록 변경
// $(window).scroll(function(){ // scroll event
// 	var windowTop = $(window).scrollTop(); // returns number 
// 	if (0 < windowTop){
// 		$('#header').css('position', 'fixed');
// 	}
// 	else {
// 		$('#header').css('position', 'relative');
// 	}
// })

//메뉴바 클릭 이벤트
var menuScroll;
$('.navOpen').on('click', function() {
	//화면잠금
	// $(document).on('touchmove', function(event){event.preventDefault()}, {passive: false});

	$('#menu').css('top', $(window).scrollTop()).show(0, function() {
		$(this).css({
			'left': 0,
			'transition': 'all 0.2s ease-out',
			'transform': 'translateX(0px) translateY(0px)',
			'-webkit-transition': 'all 0.2s ease-out',
			'-webkit-transform': 'translateX(0px) translateY(0px)'
		})
		$('.shadow').addClass('menu').css('top', $(window).scrollTop()).fadeIn(0).css({
			'opacity': 1,
			'transition': 'all 0.1s linear',
			'-webkit-transition': 'all 0.1s linear'
		})
	});
	//Iscroll
	menuScroll = new IScroll('#menu', { 
		click: true,
		mouseWhell: true,
		scrollbars: false,
		fadeScrollbars: false
	});
})

$(document).on('click', '.navClose, .shadow.menu', function() {
	//iscroll 해제
	menuScroll.destroy();
	//화면잠금 해제
	$(document).off('touchmove');

	$('#menu').css({
		'transition': 'all 0.15s ease-out',
		'transform': 'translateX(-300px) translateY(0px)',
		'-webkit-transition': 'all 0.15s ease-out',
		'-webkit-transform': 'translateX(-300px) translateY(0px)'
	}).fadeOut(150);
	$('.shadow').removeClass('menu').css({
		'opacity': 0,
		'transition': 'all 0.1s linear',
		'-webkit-transition': 'all 0.1s linear'
	}).fadeOut(200);
	//화면 롤백
	$('.shadow').off('touchmove');
	//스크롤 초기화
	$('#menu').scrollTop(0);
})

//노선정보 팝업
var popUpScroll;
$('.areaRoute a').on('click', function() {
	//화면잠금
	// $(document).on('touchmove', function(event){event.preventDefault()}, {passive: false});

	$('#popup').css('top', $(window).scrollTop() * 2).show(0, function() {
		$(this).css({
			'transition': 'all 0.2s ease-out',
			'-webkit-transition': 'all 0.2s ease-out',
		})
		$('.shadow').addClass('popup').css('top', $(window).scrollTop()).fadeIn(0).css({
			'opacity': 1,
			'transition': 'all 0.1s linear',
			'-webkit-transition': 'all 0.1s linear'
		})
	});
	//Iscroll
	popUpScroll = new IScroll('#popup', {
		click: true,
		mouseWhell: true,
		scrollbars: false,
		fadeScrollbars: false
	});
})

$('.btn.operationTime').on('click', function() {
	$('.popupMain').hide();
	$('.popupOperationTime').show();
	$('.popupContact').hide();
	$('.btns.main').hide();
	$('.btns.time.contact').show();
	//Iscroll
	popUpScroll.refresh();
	popUpScroll.scrollTo(0, 0);
})
$('.btn.contact').on('click', function() {
	$('.popupMain').hide();
	$('.popupOperationTime').hide();
	$('.popupContact').show();
	$('.btns.main').hide();
	$('.btns.time.contact').show();
	//Iscroll
	popUpScroll.refresh();
	popUpScroll.scrollTo(0, 0);
})

$(document).on('click', '.close, .shadow.popup', function() {
	//iscroll 해제
	popUpScroll.destroy();
	//화면잠금 해제
	$(document).off('touchmove');

	$('#popup').css({
		'transition': 'all 0.15s ease-out',
		'-webkit-transition': 'all 0.15s ease-out',
	}).fadeOut(150, function(){
		$('.popupMain').show();
		$('.popupOperationTime').hide();
		$('.popupContact').hide();
		$('.btns.main').show();
		$('.btns.time.contact').hide();
	});
	$('.shadow').removeClass('popup').css({
		'opacity': 0,
		'transition': 'all 0.1s linear',
		'-webkit-transition': 'all 0.1s linear'
	}).fadeOut(200);
	//화면 롤백
	$('.shadow').off('touchmove');
	//스크롤 초기화
	$('#popup').scrollTop(0);
})

$(document).on('click', '.back', function() {
	$('.popupMain').show();
	$('.popupOperationTime').hide();
	$('.popupContact').hide();
	$('.btns.main').show();
	$('.btns.time.contact').hide();
	//Iscroll
	popUpScroll.refresh();
	popUpScroll.scrollTo(0, 0);
})

$('.mainBoard').find('a').on('click', function() {
	var target = $(this).data('target');

	$('.menu').find('li').removeClass('on');
	$(this).parent().addClass('on');

	if (target == "news"){
		$('.list.news').show();
		$('.list.faq').hide();
	}
	else if (target == "faq"){
		$('.list.news').hide();
		$('.list.faq').show();
	}
})