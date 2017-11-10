$(function(){
var i=1;

$('.up').click(function(){
	if(i==2){
		i=1
	}else
	{
		i++
	}
	$('.gla-img').attr('src',"img/details-img/glasses-"+i+".png")
	$('.span-box span').removeClass('active')
	$('.span-box span:eq('+(i-1)+')').addClass('active')
})

$('.dowm').click(function(){
	if(i==1){
		i=2
	}else
	{
		i--
	}
	$('.gla-img').attr('src',"img/details-img/glasses-"+i+".png")
	$('.span-box span').removeClass('active')
	$('.span-box span:eq('+(i-1)+')').addClass('active')
})

 $(".color-chose span").click(function(){
        $(this).addClass("color-active").siblings().removeClass("color-active");
    });


    $(".detail-ul li").click(function(){
        $(this).toggleClass("num-box");
    });
    $(".detail-ul li").eq(2).click(function(){
        $(".information").slideToggle(400);
    })
    
})