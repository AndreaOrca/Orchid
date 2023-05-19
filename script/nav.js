const navbar = document.querySelector(".navbar");
(navOpenBtn = document.querySelector(".navOpenBtn")),
	(navCloseBtn = document.querySelector(".navCloseBtn")),
	(searchToggle = document.querySelector(".searchToggle"));

navOpenBtn.addEventListener("click", () => {
	navbar.classList.add("openNav");
});

navCloseBtn.addEventListener("click", () => {
	navbar.classList.remove("openNav");
});

searchToggle.addEventListener("click", () => {
	searchToggle.classList.toggle("active");
});
