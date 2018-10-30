var btnPopup = document.querySelector(".search-btn")
var popup = document.querySelector(".popup-search");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var adults = popup.querySelector("[name=adults]");
var form = popup.querySelector("form");

btnPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-open");
  if (popup.classList.contains("popup-error")) {
    popup.classList.remove("popup-error");
  }
  arrival.focus();
});

form.addEventListener("submit", function(evt) {
	if (!arrival.value || !arrival.value || !adults.value) {
		evt.preventDefault();
		popup.classList.remove("popup-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("popup-error");
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("popup-open")) {
			popup.classList.remove("popup-open");
			popup.classList.remove("popup-error");
		}
	}
});