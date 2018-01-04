var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var pickedColor=pickColor();
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");
var target=document.querySelector("#target");

easyButton.addEventListener("click", function() {
	numSquares=3;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	target.innerHTML=pickedColor;

	for (var i=0;i<squares.length;i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor=colors[i];	
		}
		else {
			squares[i].style.display="none";
		}
		
	}
});

hardButton.addEventListener("click", function() {
	numSquares=6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	target.innerHTML=pickedColor;

	for (var i=0;i<squares.length;i++) {
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";	
	}
});


for (var i=0;i<squares.length;i++) {
	//initial colors
	squares[i].style.backgroundColor=colors[i];
	// click listeners
	squares[i].addEventListener("click", function() {
		var clickedColor=this.style.backgroundColor;
		//comparing colors
		if (pickedColor===clickedColor) {
			message.innerHTML="Correct!";
			changeColor(pickedColor);
			h1.style.backgroundColor=pickedColor;
			reset.textContent="Play Again?";
		}
		else {
			this.style.backgroundColor="#232323";
			message.innerHTML="Try Again!";
		}
	});

}

function generateRandomColors(num) {
	var colors=[];
	for (var i=0;i<num;i++) {
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		color='rgb('+r+', '+g+', '+b+')';
		colors.push(color);
	}
	return(colors)
	
};


target.innerHTML=pickedColor;

function changeColor(color) {
	for (var i=0;i<squares.length;i++) {
		squares[i].style.backgroundColor=color;
	}
};

function pickColor() {
	var random=Math.floor(Math.random()*colors.length);
	return (colors[random]);
};

reset.addEventListener("click" , function() {
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Colors";
	message.textContent="";
	target.innerHTML=pickedColor;
	for (var i=0;i<squares.length;i++) {
		squares[i].style.backgroundColor=colors[i];
	}

});