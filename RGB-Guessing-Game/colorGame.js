var numSquares = 6;
var colors =[];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
  colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();
function init(){
	setUpModeBtn();
	setUpSquares();
	reStart();
}
function setUpModeBtn(){
	for(i=0; i<mode.length; i++){
		mode[i].addEventListener("click",function(){
		 mode[0].classList.remove("selected");
		  mode[1].classList.remove("selected");
		  this.classList.add("selected"); 
		 this.textContent === "Easy"? numSquares = 3:numSquares = 6;
		reStart();
     })
   }
}
function setUpSquares(){
	for (i = 0; i < square.length; i++){
		square[i].style.backgroundColor = colors[i];
		  square[i].addEventListener("click", function(){
		    var clickedColor = this.style.backgroundColor;
			 if( clickedColor === pickedColor){
			  message.textContent = "Correct!!"
			   resetBtn.textContent = "Play Again?";
			  changeColor(clickedColor);
			 h1.style.background = clickedColor;
			 }
			else{
			message.textContent = "Try again!!"
		 this.style.backgroundColor="black";
		 }
	  });
	}
}
function changeColor(color){
	for(i=0; i<square.length;i++){
		square[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random];
}
function generateColor(num){
	var arr =[];
	for(i=0; i < num; i++){
		arr.push(randonColor());
	}
	return arr;
}
function randonColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
   resetBtn.addEventListener("click",function(){
    reStart();
   })

function reStart(){
	//generate new colors
	colors = generateColor(numSquares);
    //pick a new color
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//looping through the new colors and change the squares
	  for(i=0; i< square.length; i++){
		if(colors[i]){
			square[i].style.display ="block";
			square[i].style.background = colors[i];
		  }
		else{
			square[i].style.display = "none";
		  }		
      };
     message.textContent="";
    h1.style.background = "#3be820";
   resetBtn.textContent = "New Game"
}

