function init(){
updateCanvas();
}
function updateCanvas(){
 //rest of the code in the next steps will go in here
 var width = 500;
 var height = 500;
 var cnvPalau = document.getElementById("palau");
 var wid = cnvPalau.width;
 var hei = cnvPalau.height;
 var context = cnvPalau.getContext("2d");
 context.fillStyle = "#FFDE00";
 context.fillRect(0,0,wid,hei);
 context.fillStyle = "#4AADD6";
 context.arc(wid/2.3, hei/2, 40, 0, 2 * Math.PI, false);
 context.fill();
}
