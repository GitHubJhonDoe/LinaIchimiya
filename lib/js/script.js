$(".header__navigation__button").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
	$(".header__navigation__navigation").toggleClass('active');
	//$(".header__navigation__navigation__ul--wrapper").toggleClass('active');
	$(".header__navigation__navigation__ul__li").toggleClass('active');
	$(".u-navLiAnime").toggleClass('active');
	$(".header__navigation__navigationBg").toggleClass('active');
	$(".body").toggleClass('fixed');
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});// JavaScript Document

/*$(function(){
	var state = false;
	var pos;
	$(".header__navigation__button").click(function(){
		if (state == false) {
			pos = $(window).scrollTop();
			$(".body").addClass("fixed").css({"top": -pos});
			state = true;
		} else {
			$(".body").removeClass("fixed").css({"top": 0});
			window.scrollTo(0, pos);
			state = false;
		}
		});
	});*/