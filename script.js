// Look for .hamburger
let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

// On click
hamburger.addEventListener("click", function () {
	// Toggle class "is-active"
	hamburger.classList.toggle("is-active");
	// Do something else, like open/close menu

	setTimeout(() => {
		if (menu.style.display === "") {
			menu.style.display = "flex";
		} else {
			menu.style.display = "";
		}
	}, 200);
});
