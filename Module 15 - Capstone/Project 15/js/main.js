/*jslint browser:true */
"use strict()";

function logInFunction(){
	var userUserName;
	var logInPass;
	userUserName = document.getElementById("userNameUserInput").value;
	logInPass = document.getElementById("logInPass").value;
	if(userUserName == "" || userUserName == null){
		document.getElementById("userNameUserInput").className += " errorMessage";
		document.getElementById("logInPass").className = "form-control";
		document.getElementById("modalLogInErrorMessage").className = "col-lg-12";
	}
	else if(logInPass == "" || logInPass == null){
		document.getElementById("userNameUserInput").className = "form-control";
		document.getElementById("logInPass").className += " errorMessage";
		document.getElementById("modalLogInErrorMessage").className = "col-lg-12";
	}
	else{
		//set classes to hide login and sign up buttons and display a welcome message
		document.getElementById("logInButton").className = "hidden";
		document.getElementById("signUpButton").className = "hidden";
		document.getElementById("ulClassHeader").className = "nav navbar-nav navbar-right";
		document.getElementById("greetingMessage").innerHTML = "Welcome back " + userUserName + ".";
	}
}

function signUpFunction(){
	var userEmail;
	var userUserSignUp;	
	var userPass;
	userUserSignUp = document.getElementById("userUserSignUp").value;
	userEmail = document.getElementById("emailInputField").value;
	userPass = document.getElementById("userInputPassword").value;
	

	if (userEmail == "" || userEmail == null){
		document.getElementById("emailInputField").className += " errorMessage";
		document.getElementById("userUserSignUp").className = "form-control";
		document.getElementById("userInputPassword").className = "form-control";
		document.getElementById("modalSignUpErrorMessage").className = "col-lg-12";
	}
	else if(userUserSignUp == "" || userUserSignUp == null){
		document.getElementById("emailInputField").className = "form-control";
		document.getElementById("userUserSignUp").className += " errorMessage";
		document.getElementById("userInputPassword").className = "form-control";
		document.getElementById("modalSignUpErrorMessage").className = "col-lg-12";
	}
	else if(userPass == "" || userPass == null){
		document.getElementById("emailInputField").className = "form-control";
		document.getElementById("userUserSignUp").className = "form-control";
		document.getElementById("userInputPassword").className += " errorMessage";
		document.getElementById("modalSignUpErrorMessage").className = "col-lg-12";
	}
	else{
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
		if (userLength == 0 || userLength == null){
			document.getElementById("userInputLength").className += " errorMessage";
			document.getElementById("userInputWidth").className = "form-control";
			document.getElementById("userInputHeight").className = "form-control";
			document.getElementById("bookRepairErrorMessage").className = "col-lg-12";
		}
		else if(userWidth == 0 || userWidth == null){
			document.getElementById("userInputLength").className = "form-control";
			document.getElementById("userInputWidth").className += " errorMessage";
			document.getElementById("userInputHeight").className = "form-control";
			document.getElementById("bookRepairErrorMessage").className = "col-lg-12";
		}
		else if( userHeight == 0 || userHeight == null){
			document.getElementById("userInputLength").className = "form-control";
			document.getElementById("userInputWidth").className = "form-control";
			document.getElementById("userInputHeight").className += " errorMessage";
			document.getElementById("bookRepairErrorMessage").className = "col-lg-12";
		}
		else{
		document.getElementById("userInputLength").className = "form-control";
		document.getElementById("userInputWidth").className = "form-control";
		document.getElementById("userInputHeight").className = "form-control";
		document.getElementById("bookRepairErrorMessage").className = "col-lg-12 hidden";
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

