<!--Malakhye, Eric, Alex, Maya, Koby-->
function playsong1(e){
	<!--This code allows you to click on an image and the image will play a song-->
	document.getElementById("badboy").play();
	document.getElementById("bigpoppa2").pause();
	document.getElementById("hypnotize").pause();
	document.getElementById("missing").pause();
	
}
function play2song(e){
	document.getElementById("bigpoppa2").play();
	<!--This code allows you to click on a song and pause a song thats already playing-->
	document.getElementById("badboy").pause();
	document.getElementById("hypnotize").pause();
	document.getElementById("missing").pause();
}
function playsong3(e){
	document.getElementById("hypnotize").play();
	document.getElementById("bigpoppa2").pause();
	document.getElementById("badboy").pause();
	document.getElementById("missing").pause();
}
function playsong4(e){
	document.getElementById("missing").play();
	document.getElementById("hypnotize").pause();
	document.getElementById("bigpoppa2").pause();
	document.getElementById("badboy").pause();
}
function playsong5(e){
	document.getElementById("aintmad").play();
	document.getElementById("livediela").pause();
	document.getElementById("baby").pause();
	document.getElementById("headup").pause();
}
function playsong6(e){
	document.getElementById("livediela").play();
	document.getElementById("aintmad").pause();
	document.getElementById("baby").pause();
	document.getElementById("headup").pause();
}
function playsong7(e){
	document.getElementById("headup").play();
	document.getElementById("livediela").pause();
	document.getElementById("aintmad").pause();
	document.getElementById("baby").pause();
	
}
function playsong8(e){
	document.getElementById("baby").play();
	document.getElementById("livediela").pause();
	document.getElementById("aintmad").pause();
	document.getElementById("headup").pause();
}
