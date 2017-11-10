//获取轮播图部分的高度
		$(function(){
			var banulHeight=parseFloat($('.banner-ul li img').css('width'))/2.56+'px';
			$('.banner-ul').css('height',banulHeight);
			$('.banner-box').css('height',banulHeight);
			var glassesHeight=$('.glasses-01-left').css('height');
			$('.glasses-01-right').css('height',glassesHeight);
			var gal03Height=$('.glasses-03 img').css('height');
			$('.glasses-03').css('height',gal03Height);
		})
		$(window).resize(function(){
			var banulHeight=parseFloat($('.banner-ul li img').css('width'))/2.56+'px';
			$('.banner-ul').css('height',banulHeight);
			$('.banner-box').css('height',banulHeight);
			var glassesHeight=$('.glasses-01-left').css('height');
			$('.glasses-01-right').css('height',glassesHeight);
			var gal03Height=$('.glasses-03 img').css('height');
			$('.glasses-03').css('height',gal03Height);
		})
		
//		轮播图
		var i=0;
		var timer;
		showTime();
		function show(){
			$('.banner-ul li').eq(i).fadeIn(800).siblings('.banner-ul li').fadeOut(800);
			$('.banner-point li').eq(i).addClass('active').siblings('.banner-point li').removeClass('active')
		}
		function showTime(){
			timer=setInterval(function(){
				show()
				i++;
				if(i==3){
					i=0;
				}
			},3000);
		}
		$('.banner-point li').hover(function(){
				i=$(this).index();
				show();
				clearInterval(timer);
			},function(){
				show()
				showTime();
			});
			
//鼠标指压效果
 $(function() {
  $(".glasses-03").mouseenter(function() {
    var thisPX = $(this).offset().left;
    var thisPY = $(this).offset().top;
    var boxWidth = $(this).outerWidth();
    var boxHeight = $(this).outerHeight();
    $(this).addClass("threeD");
    $(".threeD").mousemove(function(event) {
      var mouseX = event.pageX - thisPX;
      var mouseY = event.pageY - thisPY;
      var X;
      var Y;
      if (mouseX > boxWidth / 2) {
        X = mouseX - boxWidth/2;
      } else {
        X = mouseX - boxWidth/2;
      }
      if (mouseY > boxHeight / 2) {
        Y = boxHeight/2 - mouseY;
      } else {
        Y = boxHeight/2 - mouseY;
      }
      $(".threeD").css({
        "-webkit-transform": "rotateY(" + X / 50 + "deg) " + "rotateX(" + Y / 50 + "deg)"
      });
    });
  });
  $(".glasses-03").mouseleave(function() {
    $(this).removeClass("threeD");
    $(this).css({
      "-webkit-transform": "rotateY(0deg) rotateX(0deg)"
    });
  });
});