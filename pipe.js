function Pipe(x, y1, y2)
{
	this.x = x;
	this.y1 = y1;
	this.y2 = y2;
	
	this.tick = function(width, height, bird)
	{
		this.x -= scrollSpeed;
		if((this.x + pipeWidth) < 0)
		{
			this.x = width;
			this.y1 = Math.floor((Math.random() * (height / 2)));
			this.y2 = Math.floor((Math.random() * (height / 2)));
			bird.score++;
		}
	}
	
	this.draw = function(context, width, height)
	{
		context.fillStyle = "#00FF00";
		context.fillRect(this.x, 0, pipeWidth, this.y1);
		context.fillRect(this.x, height-this.y2, pipeWidth, height);
	}
}