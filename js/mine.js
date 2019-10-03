var scrollButton = $("#scroll-top");
  $(window).scroll(function()
     {
       $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });
          // click on button scroll
      scrollButton.click(function()
      {
          $("html,body").animate({scrollTop: 0}, 2000);
      });
			//2-aside work
			
		//
		$('#icon').click(function(){
	    	$('#icon').toggleClass('active');
	    });


        
$(window).scroll(function(){


    var windoScroll =$(window).scrollTop();
    var aboutOffset =$("#About").offset().top;

    if(windoScroll > aboutOffset)
    {
        $(".customNav").css("backgroundColor","rgba(0,0,0,0.8)")
   }
   else {
    $(".customNav").css("backgroundColor","transparent")
   }


});

$(document).ready(function(){

$("#loading").fadeOut(2000 , function(){

    $("body").css("overflow","auto")
})



})


$(document).ready(function (){
    var scrollLink = $('.SCROLL');
    // smooth scroll
    scrollLink.click(function (e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});