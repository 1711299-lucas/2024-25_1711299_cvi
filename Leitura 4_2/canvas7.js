function init(){
	updateCanvas();
}
function updateCanvas(){

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	// Create gradient
	var grd = ctx.createLinearGradient(0, 0, 200, 0);
	grd.addColorStop(0, "red");
	grd.addColorStop(0.5, "blue");
	grd.addColorStop(1, "white");

	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(10, 10, 150, 80);
}