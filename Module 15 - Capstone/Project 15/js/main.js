/*jslint browser:true */
"use strict()";

var userUserName;
var userUserSignUp;
var blizzRealmSize;
var bookArrayLength;


function checkUserName(){
	if(sessvars.myObj.name != "" && sessvars.myObj.name != undefined){
		document.getElementById("logInButton").className = "hidden";
		document.getElementById("signUpButton").className = "hidden";
		document.getElementById("ulClassHeader").className = "nav navbar-nav navbar-right";
		document.getElementById("greetingMessage").innerHTML = "Welcome back " + sessvars.myObj.name;
		if (location.href == "http://riderjensen.com/wowApp/buying.html") {
		document.getElementById("cartModal").className = "btn btn-default navbar-btn navbar-right";
		}
	}
}
checkUserName();


function logInFunction(){

	var logInPass;
	userUserName = document.getElementById("userNameUserInput").value;
	logInPass = document.getElementById("logInPass").value;

	sessvars.myObj = {name: userUserName};	

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
		document.getElementById("greetingMessage").innerHTML = "Welcome back " + userUserName;
		if (location.href == "http://riderjensen.com/wowApp/buying.html") {
		document.getElementById("cartModal").className = "btn btn-default navbar-btn navbar-right";
		}
	}
}

function signUpFunction(){
	var userEmail;
	var userPass;
	
	userUserSignUp = document.getElementById("userUserSignUp").value;
	userEmail = document.getElementById("emailInputField").value;
	userPass = document.getElementById("userInputPassword").value;

	sessvars.myObj = {name: userUserSignUp};
	

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
		if (location.href == "http://riderjensen.com/wowApp/buying.html") {
		document.getElementById("cartModal").className = "btn btn-default navbar-btn navbar-right";
		}
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
		" inches, the width "+userWidth+ " inches, and the the length is " +userLength + " inches. That means the volume of your book is " 
		+ getvolume + " cubic inches. You also selected that the issue was " +userDamageText +". With all this in mind, we may charge close to $"
		+ fixedCost + ". For a more specific quote, please bring your book into our shop and we will take a look at it!";
	}//end print

};//end object


//Getting realm names
var askRealmList = new XMLHttpRequest();

function blizzAPI(){

	if (location.href == "http://riderjensen.com/wowApp/buying.html") {
		var requestURL = "https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=ez9mqbh86f3sugau2fg4anumnjk67zmp";
		askRealmList.open('GET', requestURL, true);
		askRealmList.responseType = "text";
		askRealmList.send(null);
	}
	

}

var blizzChecker = 0;

askRealmList.onload = function(){

	if (location.href == "http://riderjensen.com/wowApp/buying.html") {
		if (askRealmList.status == 200) {
			rObj = JSON.parse(askRealmList.responseText);
			blizzRealmSize = rObj.realms.length;
			for (var i = 0; i < rObj.realms.length; i++){
				//create list element
				var listElement = document.createElement("LI");
				//create input tag
				var inputTag = document.createElement("INPUT");
				//create p tag
				var paraTag = document.createElement("p");

				var pNode = document.createTextNode("A story of " + rObj.realms[i].battlegroup + " written in " + rObj.realms[i].timezone + " depicting the story of " + rObj.realms[i].slug + " and his life.");
				//tell input tag it is a checkbox
				inputTag.setAttribute("type", "checkbox");
				var stringCheckedBox = "checkedBox" +i;
				inputTag.setAttribute("id", stringCheckedBox);
				inputTag.setAttribute("value", rObj.realms[i].name);
				//create contents text
				var node = document.createTextNode(rObj.realms[i].name);
				var labelElement = document.createElement("LABEL");
				//add text to LI
				labelElement.appendChild(node);

				labelElement.appendChild(inputTag);
				listElement.appendChild(labelElement);
				paraTag.appendChild(pNode);
				listElement.appendChild(paraTag);
				
				var element = document.getElementById("dataDump");
				element.appendChild(listElement);

			
				
			}
		}
	}
};

blizzAPI();

//check which are checked and get the value and display in modal
function checkChecked(){
	sessvars.myObj = {Array: []};
	var deleteElements = document.getElementById("modalCheckOut");
		while(deleteElements.hasChildNodes()){
			deleteElements.removeChild(deleteElements.lastChild);
		}
	for (var i = 0; i < blizzRealmSize; i++) {
		var idFinder = "checkedBox" + i;
		
		if (document.getElementById(idFinder).checked){
			var bookName = document.getElementById(idFinder).value;
			var paraTag = document.createElement("p");
			var pNode = document.createTextNode(bookName);
			paraTag.appendChild(pNode);
			var listElement = document.createElement("LI");
			listElement.appendChild(paraTag);
			var modalElement = document.getElementById("modalCheckOut");
			modalElement.appendChild(listElement);
			sessvars.myObj.Array.push(bookName);
			bookArrayLength = sessvars.myObj.Array.length;
		}
	}
}

function clearCart(){
	var deleteElements = document.getElementById("modalCheckOut");
		while(deleteElements.hasChildNodes()){
			deleteElements.removeChild(deleteElements.lastChild);
		}
		for (var i = 0; i < bookArrayLength; i++) {
			sessvars.myObj.Array.pop();
		}
}

function showCart(){
	var totalBook = 0;
	for (var i = 0; i < sessvars.myObj.Array.length; i++) {
		var randomBookNumber = randomNumber();
		var listElement = document.createElement("LI");
		var paraTag = document.createElement("p");
		var pNode = document.createTextNode("$" + randomBookNumber+ " for "+sessvars.myObj.Array[i]);
		paraTag.appendChild(pNode);
		listElement.appendChild(paraTag);
		var element = document.getElementById("cartID");
		element.appendChild(listElement);
		totalBook += randomBookNumber;
	}
		var paymentListElement = document.createElement("LI");
		var paymentParaTag = document.createElement("h4");
		var paymentNode = document.createTextNode("Your total cost is $" + totalBook);
		paymentParaTag.appendChild(paymentNode);
		paymentListElement.appendChild(paymentParaTag);
		var paymentElement = document.getElementById("cartID");
		paymentElement.appendChild(paymentListElement);

}

function randomNumber(){
	randNum = Math.floor(Math.random() * (31 - 1)) + 1;
	return randNum;
}

function displayCatalog(){
	sessvars.myObj = {name: ""};
	location.reload();
}