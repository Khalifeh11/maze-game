window.onload = function() {

  var score = 0;
	var isRed = false;
  var nextRound = false;
  var gameStart = false;



	// getting elements with class name boundary
	var boundaries = document.querySelectorAll(".boundary");
	var n = boundaries.length;

	//adding event listeners for elements with class name boundary

	for (var i = 0; i < n; i++) {
    {
      boundaries[i].addEventListener("mouseover", turnRed);
    }
	}

	// adding class name you lose (which has css property of background color red)
	function turnRed() {
    if (nextRound == true && gameStart==true){
      isRed = true;
      score -= 10;
      status.textContent = "You lose " + "Score: " + score;
      for (var i = 0; i < n; i++) {
        // boundaries[i].classList.add("youlose");
        boundaries[i].style.backgroundColor = 'red'
      }
      nextRound = false;
    }

	}

  // cheating

  var outOfBounds = document.getElementById("game");
  outOfBounds.addEventListener("mouseleave", gameStop)

  function gameStop () {
    gameStart = false;
  }


	//adding event listeners for elements with id start
	// reset color when start clicked

	var start = document.getElementById("start");
	start.addEventListener("click", reset);
  start.addEventListener("mouseover", newRound);



	function reset() {
    gameStart = true;
    nextRound = true;
		isRed = false;
    score = 0;
		status.textContent = 'Begin by clicking over the "S".';
		for (var i = 0; i < n; i++) {
			boundaries[i].style.backgroundColor = "#eeeeee";
		}
	}

  function newRound (){
    gameStart = true;
    nextRound = true;
    isRed = false;
    if (gameStart == true){
      status.textContent = 'New Round ' + 'Current Score ' + score
      for (var i = 0; i < n; i++) {
			boundaries[i].style.backgroundColor = "#eeeeee";
		}
    }
    
  }





	//add event listener to end div
	//change text content of status div upon winning 
	var start = document.getElementById("end");
	start.addEventListener("mouseover", youWin);
	var status = document.getElementById("status");



	function youWin() {
		if (isRed == false && nextRound == true && gameStart == true) {
      score += 5;
			status.textContent = "You win " + "Score: " + score;
      nextRound = false;
		}
	}



};