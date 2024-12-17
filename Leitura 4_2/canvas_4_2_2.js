function init(){
	updateCanvas();
}
function updateCanvas(){
    var canvas = document.getElementById("eye");
	var wid = canvas.width;
	var hei = canvas.height;
	var radian = Math.PI/180;
	var context = canvas.getContext("2d");
	context.fillStyle = "#dfdfdf";
	context.fillRect(0,0,wid,hei);
	context.beginPath();
	context.lineWidth = 1;
	context.strokeStyle = "#000000"; // line color
	context.fillStyle = "#ffffff";
	context.moveTo(0,hei/2);
	context.quadraticCurveTo(wid / 2, 0, wid,hei/2);
	context.quadraticCurveTo(wid / 2, hei, 0,hei/2);
	context.closePath();
	context.stroke();
	context.fill();
}