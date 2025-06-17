//creating a secret number:

let secretNumber=Math.trunc(Math.random()*20+1);
console.log(secretNumber);


let score=20;
let highscore=0;

//logic:
document.getElementById("checkBtn").addEventListener("click",()=>{

	const guessedNo=Number(document.getElementById("guess").value);

//console.log(guessedNo)


// if there is no input:

if (!guessedNo){
	document.querySelector(".message").textContent="No Number!"
}


// when player wins:

else if(guessedNo===secretNumber){
 	document.querySelector(".message").textContent="correct Number!";
 	document.querySelector(".number").textContent= secretNumber; 

 	document.querySelector("body").style.backgroundColor="green";


 	 //for highscore:

 	if(score>highscore){
 		highscore=score;
 		document.getElementById("highscore").textContent=highscore;

 	}
 }



//when the guess is too high(main logic):

 else if(guessedNo >secretNumber){
 	if(score>1){
 		document.querySelector(".message").textContent="too high!";
 		score=score-1
 		document.getElementById('score').textContent=score;
 		
 	} else{
 		document.querySelector(".message").textContent="you lost the game!";
 		document.getElementById('score').textContent=0;

 		document.querySelector("body").style.backgroundColor="red";
 		
 	}
 	}
// when the guess is too low:

 else if(guessedNo <secretNumber){
 	if(score>1){
 		document.querySelector(".message").textContent="too low!";
 		score=score-1;
 		document.getElementById('score').textContent=score;
 	} else{
 		document.querySelector(".message").textContent="you lost the game";
 		document.getElementById('score').textContent=0;


 		document.querySelector("body").style.backgroundColor="red";
 		
 	}
 }

});



//for agian button:
document.querySelector(".again").addEventListener("click",()=>{
	score=20;
	secretNumber=Math.trunc(Math.random()*20+1);
	console.log(secretNumber);
	

	document.querySelector(".message").textContent="start guessing...";
	document.getElementById('score').textContent=score;
	document.querySelector(".number").textContent="?";
	document.getElementById("guess").value="";


	document.querySelector("body").style.backgroundColor="black";
	
});
