// function for scrollY axis, when scroll down and reach
// 20px, the background will change the color.

$(document).ready(function() {
	$(window).scroll(function() {
		if(this.scrollY > 20) {
			$('.navbar').addClass("sticky");

		} 
		else {
			$('.navbar').removeClass("sticky");
		}
	});

	// function for for smooth behavior when 
	// click navigational links.
	$(".navbar .menu li a").click(function() {
		$("html").css("scrollBehavior", "smooth");
	});

// function to toggle menu button (to apear the navigational links)
// when the device being adjusted to small screen.
	// 
	$(".menu-btn").click(function() {
		$(".navbar .menu").toggleClass("active");
	});
});

