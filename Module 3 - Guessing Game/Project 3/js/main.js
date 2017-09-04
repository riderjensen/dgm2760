// JavaScript Document
/*jslint browser:true */
"use strict()";

var userInput = -1;
var randNum = 0;
var userTries = 0;
randNum = Math.floor(Math.random() * (16 - 1)) + 1;


document.getElementById("company").innerHTML = "Guessing Game";
document.getElementById("slogan").innerHTML = "Loops";


function randNumFunction(){
	
	userInput = document.getElementById("userInput").value;
	
	if (userInput != randNum){
		if(userInput < 1 || userInput > 15){
		document.getElementById("gameFeedback").innerHTML = "Please choose a number between 1 and 15";
		}
		else{
			userTries++;
			document.getElementById("numTries").innerHTML = "User guesses: " + userTries;
			if(userInput > randNum){
				document.getElementById("gameFeedback").innerHTML = "Your guess was too high!";
			}
			if(userInput < randNum){
				document.getElementById("gameFeedback").innerHTML = "Your guess was too low!";
			}
			
		}

	}//End first if
	else{
		winnerFunction();
	}	
} //End Function

function winnerFunction(){
	userTries++;
	document.getElementById("numTries").innerHTML = "User guesses: " + userTries;
	document.getElementById("gameFeedback").innerHTML = "Your guess was just right! The number was " + randNum + ". If you want to play again, hit refresh!";
	switch(userTries){
		case 1:
		case 2:
		case 3:
			var pathToImage = "css/images/blue.png";
			var awardImage = document.createElement("IMG");
			awardImage.setAttribute('src', pathToImage);
			console.log(awardImage);
			document.getElementById("ribbonInsert").appendChild(awardImage);
			break;
		case 4:
		case 5:
		case 6:
			pathToImage = "css/images/red.png";
			awardImage = document.createElement("IMG");
			awardImage.setAttribute('src', pathToImage);
			console.log(awardImage);
			document.getElementById("ribbonInsert").appendChild(awardImage);
			break;
	}
	if(userTries > 6){
		pathToImage = "css/images/green.png";
			awardImage = document.createElement("IMG");
			awardImage.setAttribute('src', pathToImage);
			console.log(awardImage);
			document.getElementById("ribbonInsert").appendChild(awardImage);
	}
}