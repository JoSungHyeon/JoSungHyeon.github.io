const ui = {
	init: function() {
		this.header();
		this.mobileMenu();
		this.randomText();
		this.specE();
		this.workE();
		this.contactE();
	},
	header: function() {
		let menuList = document.querySelectorAll(".pc_menu > ul > li");
		let sectionList = document.querySelectorAll("section");

		let sectionOffset = [];

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
	randomText: function() {
		function randomText(str, dom){
			let fake="abcdefghijklmnopqrstuvwxyz#%&^+=-";
			let text=str;
			let speed=50;
			let increment=2;
	
			let length=text.length;
			let si=0;
			let stri=0;
			let block="";
			let fixed="";
	
			(function rustle(i){
				setTimeout(function(){
					if(--i){
						rustle(i);
					}
	
					nextFrame(i);
					si=si+1;
				}, speed);
			})(length*increment+1);
	
			function nextFrame(pos){
				for(let i=0; i<length-stri; i++){
					let num=Math.floor(fake.length * Math.random());
					let letter=fake.charAt(num);
					block=block+letter;
				}
	
				if(si == (increment-1)){
					stri++;
				}
	
				if(si == increment){
					fixed=fixed+text.charAt(stri-1);
					si=0;
				}
	
				dom.innerHTML=fixed+block;
	
				block="";
			}
		}
	
		let dom=document.getElementById("output");
	
		randomText("FRONTEND DEVELOPER", dom);
	

		const titleText=new TypeIt("#sub", {
			speed: 50,
			waitUntilVisible: true,
			afterComplete: function(instance){
				instance.destroy();
			}
		});

		setTimeout(() => {
			titleText.type("Constantly Changing", { delay: 300 })
			.move(0)
			.pause(300)
			.delete(8)
			.type(" Challenging", {delay: 300})
			.move(null, {to: "END"})
			.type("<br><span>JoSungHyeon</span>")
			.go();
		}, 2000);	
	},
	specE: function() {
		let header = document.querySelector("header");
		let body = document.querySelector("body");

		const specTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#section1",
				pin: true,
				onEnter(){
					body.classList.remove("dark");
					header.classList.add('active');
				},
				onLeaveBack(){
					body.classList.add("dark");
					header.classList.remove('active');
				},
				start: "top top",
				end: "+=1200",
				scrub: true
			}
		});
	
		let specText = document.querySelectorAll("#section1 .title > h2");
	
		specTl.fromTo(specText, {
			y: 200,
			opacity: 0
		}, {
			y: 0,
			opacity: 1,
			duration: 0.3,
			stagger: 0.5
		})
	
		function specMove(element, container, prevy, nexty, playtime=2) {
			gsap.fromTo(element, {
				y: prevy
			}, {
				y: nexty,
				duration: playtime,
				ease: "none",
				scrollTrigger: {
					trigger: container,
					scrub: true,
					start: "top 30%",
				}
			});
		}
	
		specMove(".html", "#section1", 1000, -2000);
	
		specMove(".css", "#section1", 3000, -2000);
	
		specMove(".javascript", "#section1", 3000, -2000);
	
		specMove(".sass", "#section1", 2000, -2000);
	
		specMove(".react", "#section1", 6000, -2000);
	
		specMove(".node", "#section1", 4000, -2000);
	},
	workE: function() {
		let header = document.querySelector("header");
		let body = document.querySelector("body");
		let work = document.querySelector("#work");
		let cursor = document.querySelector("#work #cursor");
		let titleW;
		let titleH;

		const workTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#work",
				start: "top center",
				end: "bottom 20%",
				onEnter: function() {
					header.classList.remove('active');
					body.classList.add("dark");
					document.querySelector("#work .title").classList.add("dark")
				},
				onEnterBack: function() {
					header.classList.remove('active');
					body.classList.add("dark");
					document.querySelector("#work .title").classList.add("dark")
				},
				onLeaveBack: function() {
					header.classList.add('active');
					body.classList.remove("dark");
					document.querySelector("#work .title").classList.remove("dark")
				}
			}	
		});
	
		let workItem = document.querySelector("#work .title");
	
		workItem.addEventListener("mouseenter", function() {
			workItem.lastElementChild.classList.add("active");
			cursor.classList.add("on");
		});
	
		workItem.addEventListener("mouseleave", function() {
			workItem.lastElementChild.classList.remove("active");
			cursor.classList.remove("on");
		});

		workItem.addEventListener("mousemove", function(e) {

			if(cursor.classList.contains("on")) {
				titleW = workItem.clientWidth;
				titleH = workItem.clientHeight;
				let mouseX = e.pageX - titleW;
				let mouseY = e.pageY - work.offsetTop - titleH;

				 cursor.style.transform = `translate(${mouseX}px, ${mouseY - 100}px)`
			} else {
				return;
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


