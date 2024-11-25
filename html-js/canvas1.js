function init(){
updateCanvas();
}
function updateCanvas(){
 //rest of the code in the next steps will go in here
 //var width = window.innerWidth;
 var width = 200;
 var height = 100;
 var myCanvas = document.getElementById("myCanvas");
 myCanvas.width = width;
 myCanvas.height = height;
 var context = myCanvas.getContext("2d");
 context.fillStyle = "#0000FF";
 context.fillRect(0,0,width,height);
 context.fillStyle = "#0000FF";
 context.fillRect(0,100,100,200);
 context.fillRect(0, height, width, height);

}

