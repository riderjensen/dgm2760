// JavaScript Document
/*jslint browser:true */
"use strict()";
var userName = prompt("What is your name?");
var neededDate = new Date();
var neededMonth = new Date();
var neededYear = new Date();

document.getElementById("company").innerHTML = "Joe's Bed and Breakfast";
document.getElementById("slogan").innerHTML = "For the comfort and rest you deserve";


document.getElementById("userName").innerHTML = "Hello, " + userName + "! Welcome to the best bed and breakfast you will ever have.";

document.getElementById("Money").innerHTML = "The date is " + neededMonth.getMonth() + "/" + neededDate.getDate() + "/" + neededYear.getFullYear();