!This function will allow the viewer to play music when they click on an image!
function playsong1(e){
  document.getElementById("badboy").play();
  document.getElementById("poppa").pause();
  document.getElementById("momoney").pause();
}
function playsong2(e){
  document.getElementById("poppa").play();
  document.getElementById("badboy").pause();
  document.getElementById("hypnotize").pause();
  document.getElementById("momoney").pause();
}
function playsong3(e){
  document.getElementById("badboy").pause();
  document.getElementById("poppa").pause();
  document.getElementById("momoney").pause();
}
function playsong4(e){
  document.getElementById("momoney").play();
  document.getElementById("badboy").pause();
  document.getElementById("poppa").pause();
  document.getElementById("hypnotize").pause();
}
