canvas=document.getElementById("mycanvas");
color = "red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 5;
ctx.arc(500 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();


 color = "black";
 ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 5;
ctx.arc(400 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();


 color = "blue";
 ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 5;
ctx.arc(300 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();


 color = "green";
 ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 5;
ctx.arc(450 , 240 , 40 , 0 , 2*Math.PI);
ctx.stroke();


 color = "yellow";
 ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 5;
ctx.arc(350 , 240 , 40 , 0 , 2*Math.PI);
ctx.stroke();
function clearArea(){
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 }