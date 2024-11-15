window.addEventListener("load", function() {
	const sourceSwiper = new Swiper(".sourceSwiper", {
		// effect: "coverflow",
		loop: true,
		slidesPerView: 3,
		autoplay: {
			delay: 500
		},
      	spaceBetween: 30,
		pagination: {
		  el: ".swiper-pagination",
		},
	});
})