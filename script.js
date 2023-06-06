// Look for .hamburger
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

// On click
hamburger.addEventListener("click", function () {
	// Toggle class "is-active"
	hamburger.classList.toggle("is-active");
	// Do something else, like open/close menu

	setTimeout(() => {
		if (menu.style.contentVisibility === "") {
			menu.style.contentVisibility = "visible";
		} else {
			menu.style.contentVisibility = "";
		}
	}, 200);
});
