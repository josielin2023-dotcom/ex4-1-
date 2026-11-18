// JavaScript Document

$(document).ready(function(){

	//menu：點擊漢堡按鈕，水滑式展開／收合導覽列
	$(".menu").click(function(){ 
		$("nav").slideToggle();
	});

//menu rwd：桌機一律顯示導覽列，手機預設收起
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});

	
//first but + content：預設亮起第一顆果凍按鈕並顯示第一段內容
	$(".list").eq(0).addClass("ch_bg");
	$(".content").hide().eq(0).show();





//click event：切換果凍按鈕與對應內容（淡入）
	$(".list").click(function(){
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		
		var _index = $(this).index();
		$(".content").stop(true, true).hide().eq(_index).fadeIn(600);

		
	});

//swiper：自動輪播的泡泡主視覺
	 var swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

//mouse：滑鼠泡泡軌跡（僅限有滑鼠的裝置）
	if(window.matchMedia("(hover: hover) and (pointer: fine)").matches){
		var _last = 0;
		$(document).on("mousemove", function(e){
			var now = Date.now();
			if(now - _last < 60) return;   // 節流，避免泡泡過多
			_last = now;

			var size = 8 + Math.random() * 14;
			var $b = $("<span class='bubble-trail'></span>").css({
				left: e.clientX - size / 2,
				top: e.clientY - size / 2,
				width: size,
				height: size,
				"--dx": (Math.random() * 40 - 20) + "px"
			}).appendTo("body");

			setTimeout(function(){ $b.remove(); }, 900);
		});
	}


});