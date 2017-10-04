// JavaScript Document
"use strict()";



function myMiniMenuFunction(){
	var menuHrefLocation = document.querySelectorAll("ul#primeNav li a");
	for (var i = 0; i < menuHrefLocation.length; i++) {
		var menuHref = menuHrefLocation[i].getAttribute("href");
		var menuText = menuHrefLocation[i].text;

		var  diaper = document.createElement("LI");
		var bottle = document.createElement("A");
		bottle.setAttribute('href', menuHref);
		bottle.innerHTML = menuText;

		document.getElementById('smallNavArea').appendChild(diaper);
		diaper.appendChild(bottle);
	}

}


myMiniMenuFunction();


