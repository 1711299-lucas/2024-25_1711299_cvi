function init(){
updateCanvas();
}
function updateCanvas(){
 //rest of the code in the next steps will go in here
var width = 500;
var height = 500;
var canvas = document.getElementById("greece");
 var wid = canvas.width;
var hei = canvas.height;
var context = canvas.getContext("2d");
 context.fillStyle = "#000080";
context.fillRect(0,0,wid,hei);
var lineHeight = hei/9;
context.lineWidth = lineHeight;
context.strokeStyle = "#ffffff";
 var offset = lineHeight/2;
 for(var i=1; i<8; i+=2){
context.moveTo(0,i*lineHeight + offset);
context.lineTo(wid,i*lineHeight+offset);
}
context.stroke();
context.fillRect(0,0,lineHeight*5,lineHeight*5);
context.moveTo(0, lineHeight*2.5);
context.lineTo(lineHeight*5,lineHeight*2.5);
 context.moveTo(lineHeight*2.5,0);
 context.lineTo(lineHeight*2.5,lineHeight*5+1);
 context.stroke();
context.fillRect(0,0,lineHeight*5,lineHeight*5);
context.beginPath();
context.moveTo(0, lineHeight*2.5);
context.lineTo(lineHeight*5,lineHeight*2.5);
context.moveTo(lineHeight*2.5,0);
context.lineTo(lineHeight*2.5,lineHeight*5+1);
context.stroke();
}
