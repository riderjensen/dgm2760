// JavaScript Document
/*jslint browser:true */
"use strict()";


var month = "";
var monthHigh = 13;
var dayHigh = 31;
var randHigh = 6;



document.getElementById("company").innerHTML = "Fortune Teller";
document.getElementById("slogan").innerHTML = "Switch Statements";


function randomNumber(top){
	randNum = Math.floor(Math.random() * (top - 1)) + 1;
	return randNum;
}


function randMonth(){
	var monthNum = randomNumber(monthHigh);
	switch(monthNum){
		case 1:
			month = "January";
			break;
		case 2:
			month = "February";
			break;
		case 3:
			month = "March";
			break;
		case 4:
			month = "April";
			break;
		case 5:
			month = "May";
			break;
		case 6:
			month = "June";
			break;
		case 7:
			month = "July";
			break;
		case 8:
			month = "August";
			break;
		case 9:
			month = "September";
			break;
		case 10:
			month = "October";
			break;
		case 11:
			month = "November";
			break;
		case 12:
			month = "December";
			break;

	}
	return month;
}


function fortuneTelling(){
	var randNumber = randomNumber(randHigh);
	var userOutput = "";
	console.log(userOutput);
	switch(randNumber){
		case 1:
			userOutput = "On " + randMonth() + " " + randomNumber(dayHigh) + ", you might get millions when your favorite great Uncle dies.";
			break;
		case 2:
			userOutput = "On " + randMonth() + " " + randomNumber(dayHigh) + ", you might lose $100 when your wallet is stolen.";
			break;
		case 3:
			userOutput = "On " + randMonth() + " " + randomNumber(dayHigh) + ", you might win a cake at the company party.";
			break;
		case 4:
			userOutput = "On " + randMonth() + " " + randomNumber(dayHigh) + ", you might be chased by a big hungry bear";
			break;
		case 5:
			userOutput = "On " + randMonth() + " " + randomNumber(dayHigh) + ", you might have a very, very normal day.";
			break;
		
	}
	document.getElementById("fortuneTelling").innerHTML = userOutput;

}