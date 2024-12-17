function init(){
	updateCanvas();
	
}
function updateCanvas(){
	var canvas = document.getElementById("haiti1");
	var wid = canvas.width;
	var hei = canvas.height;
	var context = canvas.getContext("2d");
    context.fillStyle="#00209F";
	context.fillRect(0,0,wid,hei/2);
	context.fillStyle="#D21034";
	context.fillRect(0,hei/2,wid,hei/2);
    
	var oIMG = new Image();
	oIMG.onload = function(){
			context.drawImage(this, (wid-this.width)/2, (hei-this.height)/2);
	};
    oIMG.src = "img/haiti.png";
    	
}