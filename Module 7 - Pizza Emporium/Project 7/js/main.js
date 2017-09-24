// JavaScript Document
/*jslint browser:true */
"use strict()";


document.getElementById("company").innerHTML = "Pizza Emporium";
document.getElementById("slogan").innerHTML = "Literal Objects";
document.getElementById("pageName").innerHTML = "Pizza Order Form";


var pizzaOrder ={
	crustType: "thin",
	toppingType: "sausage",
	sizeType: "small",

	timeToEat: function(){
		document.getElementById("userOutput").innerHTML = "Baking a " + pizzaOrder.sizeType + " pizza on a " + pizzaOrder.crustType + " crust with " + pizzaOrder.toppingType + " and cheese just for you!";
	},//end timeToEat

	shoppingList: function(){
		if (pizzaOrder.sizeType == "small") {
			document.getElementById("userOutput").innerHTML = "You will need two cups of flour and 1 lbs of " + pizzaOrder.toppingType + " for this pizza!";
		}
		else{
			document.getElementById("userOutput").innerHTML = "You will need four cups of flour and 1 lbs of " + pizzaOrder.toppingType + " for this pizza!";
		}
		
	}//end shoppingList
}; //end object
