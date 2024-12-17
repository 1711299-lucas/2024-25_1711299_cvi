function init(){
	updateCanvas();
}
function updateCanvas(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(100,100);
	ctx.lineTo(100,50);
	ctx.stroke();   	
}