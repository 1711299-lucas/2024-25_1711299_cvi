function init(){
	updateCanvas();
}
function updateCanvas(){
	var canvas = document.getElementById("canada");
	var wid = canvas.width;
	var hei = canvas.height;
	var context = canvas.getContext("2d");
	
	context.beginPath();
	context.moveTo(84,19);
	context.lineTo(99,8);
	context.lineTo(113,19);
	context.lineTo(121,31);
	context.lineTo(135,35);
	context.lineTo(136,51);
	context.lineTo(118,73);
	context.lineTo(100,93);
	context.lineTo(97,93);
	context.lineTo(79,74);
	context.lineTo(62,51);
	context.lineTo(63,35);
	context.lineTo(77,31);
	context.lineTo(84,19);
	context.closePath();
	context.stroke();
	//context.fill();
	
}