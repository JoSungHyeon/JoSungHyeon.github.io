const ui = {
	init: function() {
		this.header();
		this.mobileMenu();
		this.portList();
		this.sourceSwiper();
		this.contactE();
	},
	header: function() {
		let menuList = document.querySelectorAll(".pc_menu > ul > li");
		let sectionList = document.querySelectorAll("section");
		let sectionOffset = [];
		

		console.log(sectionList)

		sectionList.forEach(function(item, i) {
			sectionOffset.push(item);
		});
	
		menuList.forEach(function(item, i) {
			item.addEventListener("click", function(e) {
				e.preventDefault();
				if(i == 0) {
					gsap.to(window, {scrollTo: 0, duration: 0.3});
				} else {
					gsap.to(window, {scrollTo: sectionOffset[i], duration: 0.3});
				}
			});
	
			item.addEventListener("mouseenter", function() {
				menuList.forEach(function(item2, j) {
					if(j == i) {
						item2.classList.add("active");
					} else {
						item2.classList.remove("active");
					}
				});
			});
	
			item.addEventListener("mouseleave", function() {
				item.classList.remove("active");
			});
		});
	},
	mobileMenu: function() {
		let moOpen = document.querySelector(".mobile_menu .mobile_open");
		let moMenu = document.querySelector(".mobile_menu ul");
		let logo = document.querySelector(".logo");
		let menuList = document.querySelectorAll(".mobile_menu > ul > li");
		let sectionList = document.querySelectorAll("section");

		let sectionOffset = [];

		sectionList.forEach(function(item, i) {
			sectionOffset.push(item);
		});

		moOpen.addEventListener("click", function(e) {
			e.preventDefault();
			if(!moOpen.classList.contains("on")) {
				moOpen.classList.add("on");
				logo.classList.add("on");
				gsap.to(moMenu, {left: 0, duration: 0.3});
			} else {
				moOpen.classList.remove("on");
				logo.classList.remove("on");
				gsap.to(moMenu, {left: "100%", duration: 0.3});
			}
		});

		menuList.forEach(function(item, i) {
			item.addEventListener("click", function(e) {
				e.preventDefault();
				if(i == 0) {
					gsap.to(window, {scrollTo: 0, duration: 0.3});
					moOpen.classList.remove("on");
					logo.classList.remove("on");
					gsap.to(moMenu, {left: "100%", duration: 0.3});
				} else {
					gsap.to(window, {scrollTo: sectionOffset[i], duration: 0.3});
					moOpen.classList.remove("on");
					logo.classList.remove("on");
					gsap.to(moMenu, {left: "100%", duration: 0.3});
				}
			});
		});
	},
	portList: function() {
		const portTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#work",
				scrub: true,
				start: "top top",
				end: "+=1200"
			}
		});

		let portItem = document.querySelectorAll(".port_wrapper .port_wrap");

		portTl.fromTo(portItem, {y: 50, opacity: 0}, {y: 0, opacity:1, duration: 0.3, stagger: 0.5});
	},
	sourceSwiper: function() {
		var sourceSwiper = new Swiper(".sourceSwiper", {
			slidesPerView: 1,
			loop: true,
      		spaceBetween: 70,
			centeredSlides: true,
			scrollbar: {
			  el: ".swiper-scrollbar",
			  hide: true,
			},
			breakpoints: {
				640: {
					slidesPerView: 2
				},
				1199: {
					slidesPerView: 3.5
				},
				1599: {
					slidesPerView: 4.5
				}
			}
		  });
	},
	contactE: function() {
		const contTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#contact",
				start: "top 30%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
				onEnter: function() {
					document.querySelector("#contact .title").classList.add("dark")
				},
				onLeaveBack: function() {
					document.querySelector("#contact .title").classList.remove("dark")
				}
			}
		});
	
		let contactList = document.querySelectorAll(".contact_wrap > a");
	
		contTl.fromTo(contactList, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, stagger: 0.3});
	
		contactList.forEach(function(item, i) {
			item.addEventListener("mouseenter", function() {
				contactList.forEach(function(list, j) {
					if(j == i) {
						gsap.to(list, {y: -20, duration: 0.3});
					} else {
						gsap.to(list, {y: 0, duration: 0.3});
					}
				})
			});
			item.addEventListener("mouseleave", function() {
				gsap.to(item, {y: 0, duration: 0.3});
			});
		});
	}
}

window.addEventListener("load", function(){
	lenisAnimation();

	ui.init();
});