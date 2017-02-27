var c = document.getElementById('c');
var circlebutton = document.getElementById('circle');
var dvdbutton = document.getElementById('dvd');
var stop = document.getElementById('stop');
var rid;

var ctx = c.getContext('2d');
ctx.fillStyle = "#0AD3FF";

var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, c.width, c.height);
};

var animatecircle = function() {

	var radius = 25;
	var min;
	var max;

	window.cancelAnimationFrame(rid);
	
	var grow = function() {
		radius++;
	}

	var shrink = function() {
		radius--;
	}	

	var drawDot = function() {
	console.log(rid);
	console.log(radius);

	ctx.clearRect( 0, 0, c.width, c.height );

	if (radius == 25) {
		min = true;
		max = false;
	}

	if (radius == 75) {
		min = false;
		max = true;
	}

	if (min) {
		grow();
	}

	if (max) {
		shrink();
	}

	ctx.beginPath();
	ctx.arc(c.width/2,c.height/2, radius, 0, 2 * Math.PI );
	ctx.stroke();
	ctx.fill();

	rid = window.requestAnimationFrame( drawDot );
    };
    drawDot();
};

var animateDVD = function() {
	window.cancelAnimationFrame(rid);
	
	var x = 1;
	var y = 1;	

	var left;
	var right;
	var top;
	var bot;	

	var drawDVD = function() {
		console.log(rid);
		console.log(x);
		console.log(y);

		if (x == 1) {
			left = true;
			right = false;
		}
	
		if (y == 1) {
			top = true;
			bot = false;
		}

		if (x+50 == c.width) {
			right = true;
			left = false;
		}

		if (y+20 == c.height) {
			bot = true;
			top = false;
		}

		if (left) {
			x++;
		}

		if (right) {
			x--;
		}

		if (top) {
			y++;
		}

		if (bot) {
			y--;
		}
		
		ctx.clearRect( 0, 0, c.width, c.height );

		ctx.beginPath();
		ctx.rect(x,y,50,20);
		ctx.stroke();
		ctx.fill();

		rid = window.requestAnimationFrame(drawDVD);
	};
	drawDVD();
}

var stopIt = function() {
    console.log(rid);
    window.cancelAnimationFrame(rid);
};

circlebutton.addEventListener("click", animatecircle);

dvdbutton.addEventListener("click", animateDVD);

stop.addEventListener("click", stopIt);



