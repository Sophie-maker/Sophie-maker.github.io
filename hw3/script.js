let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canMove=0;
let x1 = 0, y1 = 0, dx1 = 5, dy1 = 5, r1 = 30,color1="red"; 
let x2 = canvas.width, y2 = 0, dx2 = 5, dy2 = 5, r2 = 30,color2="blue"; 
function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}


document.addEventListener("keydown", keydownHandler);

function keydownHandler(e)

{

     if(e.key=="ArrowRight")   x+=dx;
     else if(e.key=="ArrowLeft")   x-=dx;
     else if(e.key=="ArrowUp")   y-=dy;
     else if(e.key=="ArrowUp")   y+=dy;

}

document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(e)
{
    if(canMove)
     {
         x=e.clientX-canvas.offsetLeft;
         y=e.clientY-canvas.offsetTop;
     }
}

document.addEventListener("mousedown", mousemoveHandler);
document.addEventListener("mouseup", mousemoveHandler);
function mousedown()
{
    canMove=1;
	color="#"+Math.floor(Math.random()*16777215).toString(16);
}
function mouseup()
{
    canMove=0;
}

function draw()

{

    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    x=x+dy;
	y=y+dy;
	if(x1<0||x1>canvas.width)  dx1=-dx1;
	if(y1<0||y1>canvas.width)  dy1=-dy1;
	
	if(x2<0||x2>canvas.width)  dx2=-dx2;
	if(y2<0||y2>canvas.width)  dy2=-dy2;
	
	if((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))<=(r1+r2)*(r1+r2)   [dx1,dy1,dx2,dy2]=[dx2,dy2,dx1,dy1]
	
    drawBall(x1,y1,r1,color1);
    drawBall(x2,y2,r2,color2);
    requestAnimationFrame(draw);
	
}

draw();