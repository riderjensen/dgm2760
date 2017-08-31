// JavaScript Document
/*jslint browser:true */
"use strict()";
var userName = prompt("What is your name?");

document.getElementById("company").innerHTML = "Joe's Bed and Breakfast";
document.getElementById("slogan").innerHTML = "For the comfort and rest you deserve";
var neededDate = new Date();
document.getElementById("date").innerHTML = neededDate.getDate();
var neededMonth = new Date();
document.getElementById("month").innerHTML = neededMonth.getMonth();
var neededYear = new Date();
document.getElementById("year").innerHTML = neededYear.getFullYear();
document.getElementById("userName").innerHTML = userName;