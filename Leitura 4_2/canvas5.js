function init(){
	updateCanvas();
}
function updateCanvas(){

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.font = "30px Arial";
	ctx.fillText("Hello World", 10, 50);
}