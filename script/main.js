$(".arrow_icon").click(function(){
	var page2=$('.page2').offset();
	$('html,body').animate({scrollTop:page2.top},200);
});