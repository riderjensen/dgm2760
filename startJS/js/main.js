// JavaScript Document
/*jslint browser:true */
"use strict()";
var userName = prompt("What is your name?");

document.getElementByID("company").innerHTML = "Joe's Bed and Breakfast";
document.getElementByID("slogan").innerHTML = "For the comfort and rest you deserve";
var neededDate = new Date();
document.getElementByID("date").innerHTML = neededDate.getDate();
var neededMonth = new Date();
document.getElementByID("month").innerHTML = neededMonth.getMonth();
var neededYear = new Date();
document.getElementByID("year").innerHTML = neededYear.getFullYear();
document.getElementByID("userName").innerHTML = userName;