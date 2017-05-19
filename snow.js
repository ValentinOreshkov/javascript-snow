window.onload = function(){
	
	// get the canvas and context
	var canvas = document.getElementById("sky");
	var ctx = canvas.getContext("2d");
	
	// set canvas dimentions h and width.
	
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height =H;
	
	// generate snowflakes
	
	var mf = 175; // max number of flakes
	var flakes = [];
	
	// loop through the empty flakes
	
	for(var i = 0; i<mf; i++)
	{
		flakes.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: Math.random()*5+2, // min of 2px and max 7px
			d: Math.random() + 1 // density of the flake
		})
	}
	//draw flakes onto canvas
	
	function drawFlakes()
		{
		ctx.clearRect(0, 0, W, H);
		ctx.fillStyle = "white";
		ctx.beginPath();
		
		for(var i = 0; i < mf; i++)
		{
			var f = flakes[i];
			ctx.moveTo(f.x, f.y);
			ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
		}
		ctx.fill();
		moveFlakes();
	}
	// animation
	
	var angle = 0;
	function moveFlakes(){
		angle += 0.01;
		for(var i = 0; i < mf; i++)
		{
			// store current flakes
			var f = flakes[i];
			
			// update X and Y coordinates of each snowflakes
			f.y += Math.pow(f.d, 2) + 1;
			f.x += Math.sin(angle) * 2;
			
			//if snowflake reaches the bottom, send a new one
			if(f.y > H){
				flakes[i] = {x: Math.random()*W, y: 0, r: f.r,d: f.d};
			}
		}
	}
		setInterval(drawFlakes, 25);
	
	}