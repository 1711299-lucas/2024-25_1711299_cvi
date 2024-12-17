function init(){
	updateCanvas();
}
function updateCanvas(){
	var canvas = document.getElementById("canada");
	var wid = canvas.width;
	var hei = canvas.height;
	var context = canvas.getContext("2d");

	
	context.fillStyle="#FF0000";
	context.fillRect(0,0,50,100);
	context.fillRect(wid-150,0,50,100);
	context.beginPath();
	context.moveTo(84,19);
	context.bezierCurveTo(90,24,92,24,99,8);
	context.bezierCurveTo(106,23,107,23,113,19);
	context.bezierCurveTo(108,43,110,44,121,31);
	context.bezierCurveTo(122,37,124,38,135,35);
	context.bezierCurveTo(130,48,131,50,136,51);
	context.bezierCurveTo(117,66,116,67,118,73);
	context.bezierCurveTo(100,71,99,72,100,93);
	context.lineTo(97,93);
	context.bezierCurveTo(97,72,97,71,79,74);
	context.bezierCurveTo(81,67,80,66,62,51);
	context.bezierCurveTo(67,49,67,48,63,35);
	context.bezierCurveTo(74,38,75,37,77,31);
	context.bezierCurveTo(88,44,89,43,84,19);
	context.closePath();
	context.fill();

}