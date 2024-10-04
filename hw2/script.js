let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canMove=0;
let x = 0, y = 0, dx = 5, dy = 5, r = 15; 
let color="#"+Math.floor(Math.random()*16777215).toString(16);

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

document.addEventListener("mousedown", mousedown);
document.addEventListener("mouseup", mouseup);
function mousedown()
{
    canMove=1;
	color = "#"+Math.floor(Math.random()*16777215).toString(16);
}
function mouseup()
{
    canMove=0;
}

function draw()
{
    //ctx.clearRect(0, 0, canvas.width, canvas.height); 如果要抹除路徑，只讓滑鼠在按下時跟著移動//
    drawBall();
    requestAnimationFrame(draw);
	
}

draw();