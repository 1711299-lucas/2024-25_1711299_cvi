function init(){
	updateCanvas();
}
function updateCanvas(){


	var canvas = document.getElementById("pacman");
	var wid = canvas.width;
	var hei = canvas.height;

	var radian = Math.PI/180;

	var context = canvas.getContext("2d");
	context.fillStyle = "#000000";
	context.fillRect(0,0,wid,hei);
	context.beginPath();
	context.fillStyle = "#F3F100";
	context.moveTo(wid/2,hei/2);
	context.arc(wid / 2, hei / 2, 40, 40*radian, 320*radian,false);
	context.lineTo(wid/2,hei/2);
	context.closePath();
	context.fill();
}