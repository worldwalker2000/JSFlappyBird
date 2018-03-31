var canvas;
var ctx;
var width;
var height;

var bird;
var pipe;

function intersects(a, b)
{
	return ((a.x + a.width > b.x && a.x + a.width <= b.x + b.width) || (b.x + b.width > a.x && b.x + b.width <= a.x + a.width)) && ((a.y + a.height > b.y && a.y + a.height <= b.y + b.height) || (b.y + b.height > a.y && b.y + b.height <= a.y + a.height));
}

function draw()
{
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, width, height);
	
	pipe.draw(ctx, width, height);
	bird.draw(ctx);
}

function tick()
{
	var gameOver = false;
	
	if(intersects({x: pipe.x, y: 0, width: pipeWidth, height: pipe.y1}, {x: bird.x, y: bird.y, width: bird.w, height: bird.h}))
	{
		gameOver = true;
	}
	if(intersects({x: pipe.x, y: height-pipe.y2, width: pipeWidth, height: height}, {x: bird.x, y: bird.y, width: bird.w, height: bird.h}))
	{
		gameOver = true;
	}
	
	bird.tick();
	pipe.tick(width, height, bird);
	
	if(gameOver)
	{
		alert("Game Over");
		location.reload();
	}
}

window.onload = function()
{
	canvas = document.getElementById("cc");
	ctx = canvas.getContext("2d");
	
	width = canvas.width;
	height = canvas.height;
	
	bird = new FlappyBird(null, (width/2)-20, (height/2)-20, 40, 40);
	pipe = new Pipe(300, 200, 200);
	
	setInterval(tick, 1000/30);
	setInterval(draw, 1000/30);
};

window.onkeydown = function(ev)
{
	bird.keyDownEvent(ev.keyCode);
};

window.onkeyup = function(ev)
{
	bird.keyUpEvent(ev.keyCode);
};