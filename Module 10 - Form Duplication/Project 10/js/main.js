// JavaScript Document
/*jslint browser:true */
"use strict()";


document.getElementById("company").innerHTML = "Menu Duplication";
document.getElementById("slogan").innerHTML = "Append, Get, Set ";



var quiz ={
	answerOne: "mozzarella",
	answerTwo: "cheddar",
	answerThree: "pepper jack",
	answerFour: "grass",

	whatIsRight: function(x){
		if(x == 1){
			document.getElementById("userOutput").innerHTML = "Im sorry but " + quiz.answerOne + " is incorrect. Get back to basics! Think simple!";
		}
		else if (x == 2) {
			document.getElementById("userOutput").innerHTML = "Thats right! Simple but sweet, " + quiz.answerTwo + " is the best cheese to ever have been discovered. This has been your totally unbiased quiz.";
		}
		else if (x == 3) {
			document.getElementById("userOutput").innerHTML = "Alright take it easy there spice master, " + quiz.answerThree + " is good sometimes but you are missing the obivous answer!";
		}
		else{
			document.getElementById("userOutput").innerHTML = "Are you crazy? " + quiz.answerFour + " is not even a type of cheese! Did you even pay attention to the question?";
		}
	},//end timeToEat

	displayQuestion: function(){
		document.getElementById("question").innerHTML = "What is the best kind of cheese?";
		
	}//end shoppingList
}; //end object
