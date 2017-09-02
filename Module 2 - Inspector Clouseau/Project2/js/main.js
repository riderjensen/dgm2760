// JavaScript Document
/*jslint browser:true */
"use strict()";

function windowSize(){
	var width = window.outerWidth;
	var height = window.outerHeight;
	document.getElementById("windowSize").innerHTML = "Window size is " + width + " wide and " + height + " tall.";
}

var lastMod = document.lastModified;
var docTitle = document.getElementById("myAbbr").title;
var pageURL = location.href;


document.getElementById("company").innerHTML = "Inspector Clouseau";
document.getElementById("slogan").innerHTML = "Properties";

windowSize();
document.getElementById("windowOffset").innerHTML = "This window is " + window.screenLeft + " from the left edge and " + window.screenTop + " from the top of the display.";
document.getElementById("pageURL").innerHTML = "This page is located at: "+ pageURL;


document.getElementById("docTitle").innerHTML = "Document title is " + docTitle + ".";
document.getElementById("lastUpdate").innerHTML = "This page was last updated on " + lastMod;