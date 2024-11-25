function init(){
setInterval(updateCanvas,1000);
updateCanvas();
}
function updateCanvas(){
 //rest of the code in the next steps will go in here
var width = 500;
var height = 500;
 var myCanvas = document.getElementById("myCanvas");
myCanvas.width = width;
myCanvas.height = height;
var context = myCanvas.getContext("2d");
 var circleSize=10;
var gaps= circleSize+10;
var widthCount = parseInt(width/gaps);
var heightCount = parseInt(height/gaps);
var aColors=["#43A9D1","#EFA63B","#EF7625","#5E4130"];
var aColorsLength = aColors.length;
for(var x=0; x<widthCount;x++){
 for(var y=0; y<heightCount;y++){
 context.fillStyle = aColors[parseInt(Math.random()*aColorsLength)];
 context.beginPath();
 context.arc(circleSize+gaps*x,circleSize+ gaps*y,
 circleSize, 0, Math.PI*2, true);
 context.closePath();
 context.fill();
 }
 }
}