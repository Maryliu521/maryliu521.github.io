var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var gate = document.querySelector("#gate");
var result = document.querySelector(".result");

p1.addEventListener("click", function(){
	p1.style.background ="blue";
	
	if(!gameOver){
	 p1Score++;
		if(p1Score == gate.textContent){
		p1Display.classList.add("winner");
		gameOver = true;
		//alert("Game Over! Player 1 won.")
		}
	  p1Display.textContent = p1Score;
	}	
})

p2.addEventListener("click", function(){
	p2.style.background ="yellow";
  	if(!gameOver){
		p2Score++;
		if(p2Score == gate.textContent){
		p2Display.classList.add("winner");
		gameOver = true;
		//alert("Game Over! Player 2 won!");
		}
	  p2Display.textContent = p2Score;
	 
	}
})

var restart = document.querySelector("#reset");
restart.addEventListener("click",function(){
	p1Score = 0;
    p2Score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.textContent = 0;
	p2Display.classList.remove("winner");
	p1.style.background ="";
	p2.style.background ="";
	gameOver = false;
})

var numInput = document.querySelector("input");
 numInput.addEventListener("change",function(){
	gate.textContent = this.value;
})