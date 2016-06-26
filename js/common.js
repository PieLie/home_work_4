$(document).ready (function () {
	 $(".js-main-nav__list li").hover(function(){
    	$(this).find('ul').slideToggle(100);
    }, function () {
    	$(this).find('ul').slideToggle(100);
    })
  })
 
/*var list = $(this).find('li');
    	if(list.length > 0){
      	$($(this).find('a')[0]).attr("href", "javascript:;");*/