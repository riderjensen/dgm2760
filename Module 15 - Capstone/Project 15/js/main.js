/*jslint browser:true */
"use strict()";

function logInFunction(){
	var userUserName;
	userUserName = document.getElementById("userNameUserInput").value;
	console.log(userUserName);
	if(userUserName != "" && userUserName != null){
		//set classes to hide login and sign up buttons and display a welcome message
		document.getElementById("logInButton").className = "hidden";
		document.getElementById("signUpButton").className = "hidden";
		document.getElementById("ulClassHeader").className = "nav navbar-nav navbar-right";
		document.getElementById("greetingMessage").innerHTML = "Hello " + userUserName + ".";
	}
}

function signUpFunction(){
	var userUserSignUp;	
	userUserSignUp = document.getElementById("userUserSignUp").value;
	console.log(userUserSignUp);
	if(userUserSignUp != "" && userUserSignUp != null){
		//set classes to hide login and sign up buttons and display a welcome message
		document.getElementById("logInButton").className = "hidden";
		document.getElementById("signUpButton").className = "hidden";
		document.getElementById("ulClassHeader").className = "nav navbar-nav navbar-right";
		document.getElementById("greetingMessage").innerHTML = "Hello " + userUserSignUp + ", dont forget to verify your account.";
	}
}



var bookRepair={
	userLength: 0,
	userWidth: 0,
	userHeight: 0,
	userDamage: "",
	userDamageText: "",
	userDamageNum: 0,
	getvolume: 0,
	areaMoney: 0,
	totalCost: 0,
	fixedCost: 0,

	getElements: function(){
		userLength = document.getElementById("userInputLength").value;
		userWidth = document.getElementById("userInputWidth").value;
		userHeight = document.getElementById("userInputHeight").value;
		userDamage = document.getElementById("bookDamage");
		userDamageText = userDamage.options[userDamage.selectedIndex].text;
		userDamageNum = userDamage.options[userDamage.selectedIndex].value;
		if ((userLength == 0 || userLength == null) || (userWidth == 0 || userWidth == null) || ( userHeight == 0 || userHeight == null)){
			//display errors in red
		}
		else{
		bookRepair.calculateCosts(userDamageNum);
		}		
	},//end getElements

	calculateCosts: function(damageModifier){
		getvolume = userHeight * userWidth * userLength;
		areaMoney = getvolume * 0.2;
		totalCost = areaMoney * damageModifier;
		fixedCost = totalCost.toFixed(2);
		bookRepair.printCosts();
	},//end calculate costs

	printCosts: function(){
		document.getElementById("bookCalculations").innerHTML = "The length of your book is "+ userLength +
		" inches, the width "+userWidth+ " inches, and the th length is " +userLength + " inches. That means the volume of your book is " 
		+ getvolume + " cubic inches. You also selected that the issue was " +userDamageText +". With all this in mind, we may charge close to $"
		+ fixedCost + ". For a more specific quote, please bring your book into our shop and we will take a look at it!";
	}//end print

};//end object

