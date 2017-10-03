// JavaScript Document
"use strict()";


var hrefLocation = location.href;
var pageLocation = hrefLocation.split('#', '?');
var pageName = pageLocation[pageLocation.length-1];
console.log(pageLocation);
console.log(pageName);


var menuHrefLocation = document.querySelectorAll("ul#mainmenu li");
var menuLocationSplit = menuHrefLocation.split('#', '?');
var menuName = menuLocationSplit[menuLocationSplit.length-1];
console.log(menuLocationSplit);
console.log(menuName);


for(var i = 0; i < menuLocationSplit.length; i++){

	if(pageName == menuLocationSplit[i]){
		menuLocationSplit[i].parentNode.className = "active";
		if (menuLocationSplit[i].parentNode.parentNode.parentNode.className == "") {}
			menuLocationSplit[i].parentNode.parentNode.parentNode.className = "parent";
	}
	else{
		menuLocationSplit[i].parentNode.className="";
	}

}
