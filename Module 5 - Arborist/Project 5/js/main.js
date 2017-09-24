// JavaScript Document
/*jslint browser:true */
"use strict()";

var treeArray = ["Apple", "Peach", "Gum"];

document.getElementById("company").innerHTML = "The Arborist";
document.getElementById("slogan").innerHTML = "Event Listeners and Handlers";

function displayArrayItems(){
	var myString = "";
	var i;

	for(i=0; i < treeArray.length; i++){
		myString += treeArray[i] + "<br>";

	}
	document.getElementById("treeList").innerHTML = myString + "<br>" + treeArray.length + " elements long";

}

//add RedWood

var addRedwood = function(){
	treeArray.push("Redwood");
	displayArrayItems();	
};

var x = document.getElementById("addRedwood");
x.onclick = addRedwood;

//Add pear to start
var addPear = function(){
	treeArray.unshift("Pear");
	displayArrayItems();	
};

var x = document.getElementById("addPear");
x.onclick = addPear;

//remove first element
var removeFirst = function(){
	treeArray.shift();
	if(treeArray.length == 0){
		document.getElementById("errors").innerHTML = "There are no items in this list!";
	}
	displayArrayItems();	
};

var x = document.getElementById("removeFirst");
x.onclick = removeFirst;

//remove second element
var removeSecond = function(){
	treeArray.splice(1, 1);
	if(treeArray.length < 2){
		document.getElementById("errors").innerHTML = "There are no items in that position!";
	}
	displayArrayItems();	
};

var x = document.getElementById("removeSecond");
x.onclick = removeSecond;

//remove last element
var removeLast = function(){
	treeArray.pop();
	if(treeArray.length == 0){
		document.getElementById("errors").innerHTML = "There are no items in this list!";
	}
	displayArrayItems();	
};

var x = document.getElementById("removeLast");
x.onclick = removeLast;

//Sorts the array
var sortTrees = function(){
	treeArray.sort();
	displayArrayItems();	
};

var x = document.getElementById("sortTrees");
x.onclick = sortTrees;

//Lowercase the array
//FIXME
var lowerCase = function(){
	for (var i = 0; i < treeArray.length; i++) {
		treeArray[i] = treeArray[i].toLowerCase();
	}
	displayArrayItems();	
};

var x = document.getElementById("lowerCase");
x.onclick = lowerCase;

//Returns third item
var nameThree = function(){
	if(treeArray.length < 3){
		document.getElementById("errors").innerHTML = "There is no third element!";
	}	
	else{
		document.getElementById("errors").innerHTML = treeArray[2];
	}
};

var x = document.getElementById("nameThree");
x.onclick = nameThree;

//Returns fourth item
var nameFour = function(){
	if(treeArray.length < 4){
		document.getElementById("errors").innerHTML = "There is no fourth element!";
	}	
	else{
		document.getElementById("errors").innerHTML = treeArray[3];
	}
};

var x = document.getElementById("nameFour");
x.onclick = nameFour;