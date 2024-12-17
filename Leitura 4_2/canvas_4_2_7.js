function init(){
	updateCanvas();
}

function updateCanvas(){
	var context;
	var imageData;
	var pixelData;
	var pixelLen;
	var currentLocation=0;
	var fadeOutImageInterval; 
	
	var canvas = document.getElementById("alterar-imagem");
	var wid = canvas.width;
	var hei = canvas.height;
	context = canvas.getContext("2d");
   
	var oIMG = new Image();
	oIMG.onload = function(){
		 // context.drawImage(this, (wid-this.width)/2, (hei-this.height)/2);
		   context.drawImage(this,0,0,this.width,this.height,0,0,wid,hei);
		   imageData = context.getImageData(0, 0, wid, hei);
		   pixelData = imageData.data;
		   pixelLen = pixelData.length;
		// const obj=[pixelData,imageData,pixelLen];
		   fadeOutImageInterval = setInterval(fadeOutImage(imageData), 25);
	};
	oIMG.src = "img/imagem-1.png";

} //end of init function


function fadeOutImage(imageData){
		 var pixelsChanged=0;
		 pixelData = imageData.data;
		 pixelLen = pixelData.length;
		 for (var i = 0; i < pixelLen; i +=4) {
			 if(pixelData[i]) {
			 pixelData[i] = pixelData[i]-1; // red
			 pixelsChanged++;
			 }
			 if(pixelData[i + 1]){
			 pixelData[i + 1] = pixelData[i+1]-1; // green
			 pixelsChanged++;
			 }
			 if(pixelData[i + 2]){
			 pixelData[i + 2] = pixelData[i+2]-1; // green
			 pixelsChanged++;
			 }
		 }
		 context.putImageData(imageData, 0, 0);
		 if(pixelsChanged==0){
		 clearInterval(fadeOutImageInterval);
		 alert("we are done fading out");
		 }
}
/*

function fadeOutImage(){
	 var pixelsChanged=0;
	 for (var i = 0; i < pixelLen; i +=4) {
		 if(pixelData[i]) {
			 pixelData[i] = pixelData[i]-1; // red
			 pixelsChanged++;
		 }
		 if(pixelData[i + 1]){
			 pixelData[i + 1] = pixelData[i+1]-1; // green
			 pixelsChanged++;
		 }
		 if(pixelData[i + 2]){
			 pixelData[i + 2] = pixelData[i+2]-1; // green
			 pixelsChanged++;
		 }
    }
}

function grayScaleImage(obj){

	 for (var i = 0; i < obj.pixelLen; i += 4) {
		 var brightness = 0.33 * obj.pixelData[i] + 0.33 * obj.pixelData[i + 1]+ 0.34 * obj.pixelData[i + 2];
		 obj.pixelData[i] = brightness; // red
		 obj.pixelData[i + 1] = brightness; // green
		 obj.pixelData[i + 2] = brightness; // blue
	 }
	 context.putImageData(obj.imageData, 0, 0);
}

function colorReverseImage(){
	 for (var i = 0; i < pixelLen; i += 4) {
		 pixelData[i] = 255-pixelData[i];
		 pixelData[i + 1] = 255-pixelData[i+1];
		 pixelData[i + 2] = 255-pixelData[i+2];
	 }
	 context.putImageData(imageData, 0, 0);
}
function colorReverseImage2(){
	 for (var i = 0; i < pixelLen; i += 4) {
		 pixelData[i] = 255;
		 pixelData[i + 1] = 255;
		 pixelData[i + 2] = 255;
	 }
	 context.putImageData(imageData, 100, 100);
}
*/