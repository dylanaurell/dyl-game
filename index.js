//body
window.onbeforeunload = function () {
window.scrollTo(0,0);
}


//menu
function menu_open(){
	document.getElementById("menu").classList.add("menu-animation");
	document.getElementById("menu-outside").style.display = "block";
}
function menu_close(){
	document.getElementById("menu").classList.remove("menu-animation");
	document.getElementById("menu-outside").style.display = "none";
}
function dark_mode(){
	document.getElementById("dark-mode-off").classList.toggle("dark-mode-close");
	document.getElementById("dark-mode-on").classList.toggle("dark-mode-open");
}

