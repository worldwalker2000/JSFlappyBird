function FlappyBird(img, x, y, w, h)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.img = img;
	this.score = 0;
	
	this.jump = false;
	this.jumpStart = 0;
	
	this.keyUpEvent = function(keyCode)
	{
	}
	
	this.keyDownEvent = function(keyCode)
	{
		if(keyCode == keyUp)
		{
			this.jump = true;
			this.jumpStart = this.y;
		}
	}
	
	this.tick = function()
	{
		if(this.jump)
		{
			this.y -= jumpSpeed;
			if(this.y < (this.jumpStart - jumpPower)) this.jump = false;
		}
		if(!this.jump) this.y += gravity;
	}
	
	this.draw = function(context)
	{
		//context.drawImage(this.img, this.x, this.y, this.w, this.h);
		context.fillStyle = "#FF0000";
		context.fillRect(this.x, this.y, this.w, this.h);
		context.font = "30px Arial";
		context.fillText("Score: " + this.score.toString(), 10, 30);
	}
}
