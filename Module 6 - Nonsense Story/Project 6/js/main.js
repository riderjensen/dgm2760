// JavaScript Document
/*jslint browser:true */
"use strict()";


document.getElementById("company").innerHTML = "Nonsense Story";
document.getElementById("slogan").innerHTML = "String Manipulation";
document.getElementById("pageName").innerHTML = "The Tale of Peter Rabbit";


//lowercase function
function lowerCase(insertFunction){
	for (var i = 0; i < insertFunction.length; i++) {
		insertFunction[i] = insertFunction[i].toLowerCase();
	}	
}


//main function
var storyTime = function(){
	//get text items
	var nounTextArea = document.getElementById("nounTextArea").value;
	var adjectiveTextArea = document.getElementById("adjectiveTextArea").value;
	var verbTextArea = document.getElementById("verbTextArea").value;

	//split them into strings
	var nounList = nounTextArea.split(/\s+/);
	var adjectiveList = adjectiveTextArea.split(/\s+/);
	var verbList = verbTextArea.split(/\s+/);

	lowerCase(nounList);
	lowerCase(adjectiveList);
	lowerCase(verbList);

	console.log(nounList[0]);
	console.log(adjectiveList[0]);
	console.log(verbList[0]);

	document.getElementById("storyArea1").innerHTML = "Once upon a time there were four " + adjectiveList[0] + " " + nounList[0].concat("s") + " named Flopsy, Mopsy, Cotton-tail and Peter. <br> They lived with their mother underneath a " + nounList[1] + " near a " + adjectiveList[1] + " " + nounList[2] + ".";
	document.getElementById("storyArea3").innerHTML = "Now, my dears, said " + adjectiveList[2] + " Mrs. Rabbit, you may go over the " + nounList[3] + " or around the " + nounList[4] + "but do not go into Mt. McGregor's " + nounList[5] + ", your Father had an accident there and he was put in a " + nounList[6] + " by Mrs. MecGrogor." ;
	document.getElementById("storyArea4").innerHTML = "Now " +  verbList[0] + " alond, and dont get into mischeief. I am going " + verbList[1] + " and " + verbList[2] + ".";
};


var x = document.getElementById("storyTime");
x.onclick = storyTime;