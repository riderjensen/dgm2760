// JavaScript Document
"use strict()";


var hrefLocation = location.href;
var pageLocation = hrefLocation.split('/');
var pageName = pageLocation[pageLocation.length-1];
console.log(pageLocation);
console.log(pageName);


var menuHrefLocation = document.querySelectorAll("ul#mainmenu li");
console.log(menuHrefLocation);


for(var i = 0; i < menuHrefLocation.length; i++){
	var myMenuMatch = menuHrefLocation[i].firstChild.getAttribute('href');
	console.log(myMenuMatch);
	if(pageName == myMenuMatch){
		menuHrefLocation[i].parentNode.className = "active";
		if (menuHrefLocation[i].parentNode.parentNode.parentNode.className == "") {}
			menuHrefLocation[i].parentNode.parentNode.parentNode.className = "parent";
	}
	else{
		menuHrefLocation[i].parentNode.className="";
	}

}
