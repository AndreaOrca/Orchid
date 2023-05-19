const upwardArrow = document.querySelector("#upward-arrow");

window.addEventListener("scroll", scrollFunc);

function scrollFunc() {
	if (window.pageYOffset > 200) {
		if (!upwardArrow.classList.contains("arrowEnt")) {
			upwardArrow.classList.remove("arrowExt");
			upwardArrow.classList.add("arrowEnt");
			upwardArrow.style.display = "block";
		}
	} else {
		if (!upwardArrow.classList.contains("arrowExt")) {
			upwardArrow.classList.remove("arrowEnt");
			upwardArrow.classList.add("arrowExt");
			upwardArrow.style.display = "none";
		}
	}
}

upwardArrow.addEventListener("click", backToTop);

function backToTop() {
	window.scrollTo(0, 0);
}
