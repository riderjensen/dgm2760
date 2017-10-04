// JavaScript Document
"use strict()";


var hrefLocation = location.href;
var pageLocation = hrefLocation.split('/');
var pageName = pageLocation[pageLocation.length-1];


var menuHrefLocation = document.querySelectorAll("ul#mainmenu li");


for(var i = 0; i < menuHrefLocation.length; i++){
	var myMenuMatch = menuHrefLocation[i].firstChild.getAttribute('href');
	if(pageName == myMenuMatch){
		menuHrefLocation[i].className = "active";
		if (menuHrefLocation[i].parentNode.parentNode.className == "" && (pageName == "hammer.php" || pageName == "drill.php" )){ 
		menuHrefLocation[i].parentNode.parentNode.className = "parent";
			}
	}
	else{
		menuHrefLocation[i].className="";
	}

}
