var swiper = new Swiper(".testi-sec", {
	slidesPerView: 1,
	grabCursor: true,
	loop: true,
	centerSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
