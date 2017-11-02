var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);


var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock'); });
pickPaper.addEventListener('click', function() { playerPick('paper') ;});
pickScissors.addEventListener('click', function() { playerPick('scissors') ;});

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
	name: '',
        score: 0
    };
namesForComputerToPick=['lovelyPC','TuringMachine','DreamOfHumanity','AI'];
var newGameElem = document.getElementById('js-newGameElement'),
   
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement'),
    playerPoints=document.getElementById("js-playerPoints"),
    computerPoints=document.getElementById("js-computerPoints");			


function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        break;
    case 'ended':
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
        newGameBtn.innerText = 'Play Again';
	break;
    case 'notStarted':
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
        break;
    default:
        break;
  }
}
//setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerNameElem = document.getElementById('js-computerName'),
    computerPointsElem = document.getElementById('js-computerPoints');



function newGame() {
  player.name = prompt('Please enter your name', 'imie gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();
    var indexOfComputerName=Math.floor(Math.random()*4);
    computer.name=namesForComputerToPick[indexOfComputerName];
    console.log(computer.name);
    playerNameElem.innerHTML = player.name;
    computerNameElem.innerHTML = computer.name;
    setGamePoints(); 
  }

}


function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
    setGameElements();
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
setGamePoints();
checkForTheWholeGameWinner();
}
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function checkForTheWholeGameWinner(){
	if(player.score===10||computer.score===10){
			if(player.score>computer.score){
				alert("The Winner Is: Player");
				gameState='ended';
				player.score=computer.score=0;
				playerResultElem.innerHTML = computerResultElem.innerHTML = '';
				playerPickElem.innerHTML = computerPickElem.innerHTML = '';
			}
			else{
				alert("The Winner Is: Computer");
				gameState='ended';
				player.score=computer.score=0;
				playerResultElem.innerHTML = computerResultElem.innerHTML = '';
				playerPickElem.innerHTML = computerPickElem.innerHTML = '';
			}
		
	}
	
}