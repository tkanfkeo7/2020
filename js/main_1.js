$(document).ready(function(){


var isVisible = false;

$(window).on('scroll',function() {
    if (checkVisible($('#about-section'))&&!isVisible) {
        /*alert("Visible!!!");*/
        $(".class_my li .skill_bar li").addClass("bar_ani");
        isVisible=true;
    }
});

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}
	});
/*



$(document).ready(function(){
    
    var sections = $('#header_main nav li a');
    var sec001 = sections.attr()

		$('#header_main nav li').each(function(){
            $(this).click(function(){

			var offset = $('#about-section').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	        $('html').animate({scrollTop : offset.top}, 400);

		});

	});
*/