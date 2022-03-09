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


//game
function start(){
	document.getElementById("start").style.display="none";
}
function layer_1_yes(){
	document.getElementById("layer-1").style.display="none";
	var newScore = document.getElementById("result-number").innerHTML;
	var value = parseInt(newScore,10) + 1;
	document.getElementById("result-number").innerHTML = value;
}
function layer_1_no(){
	document.getElementById("layer-1").style.display="none";
}
function layer_2_yes(){
	document.getElementById("layer-2").style.display="none";
	var newScore = document.getElementById("result-number").innerHTML;
	var value = parseInt(newScore,10) + 2;
	document.getElementById("result-number").innerHTML = value;
}
function layer_2_no(){
	document.getElementById("layer-2").style.display="none";
}
function layer_3_yes(){
	document.getElementById("layer-3").style.display="none";
	var newScore = document.getElementById("result-number").innerHTML;
	var value = parseInt(newScore,10) + 4;
	document.getElementById("result-number").innerHTML = value;
}
function layer_3_no(){
	document.getElementById("layer-3").style.display="none";
}
function layer_4_yes(){
	document.getElementById("layer-4").style.display="none";
	var newScore = document.getElementById("result-number").innerHTML;
	var value = parseInt(newScore,10) + 8;
	document.getElementById("result-number").innerHTML = value;
}
function layer_4_no(){
	document.getElementById("layer-4").style.display="none";
}
function layer_5_yes(){
	document.getElementById("layer-5").style.display="none";
	var newScore = document.getElementById("result-number").innerHTML;
	var value = parseInt(newScore,10) + 16;
	document.getElementById("result-number").innerHTML = value;
}
function layer_5_no(){
	document.getElementById("layer-5").style.display="none";
}
function replay(){
	document.getElementById("result-number").innerHTML="0";
	document.getElementById("layer-1").style.display="block";
	document.getElementById("layer-2").style.display="block";
	document.getElementById("layer-3").style.display="block";
	document.getElementById("layer-4").style.display="block";
	document.getElementById("layer-5").style.display="block";
}