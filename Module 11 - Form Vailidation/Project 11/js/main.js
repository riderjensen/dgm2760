/*jslint browser:true */
 
"use strict";
 

 
function validateForm(){
 
  var trueFalse = true;
 

 
  //reset CSS to narmal if section is right
 
  var requiredSections = ["fullName", "phoneNumber", "payMethod", "ccNumber", "vehicle"];
 
  for (var i = 0; i < requiredSections.length; i++) {
 
    document.getElementById(requiredSections[i]).className = "normal";
 
  }
 

 
  //variables
 
  var name;
 
  var phoneNumber;
 
  var payMethod;
 
  var foundChecked = false;
 
  var creditCard;
 
  var vehicle;
 

 
  //get information and set variables to user input
 
  //name
 
  name = document.forms.myForm.fullName.value;
 
  //phone number
 
  phoneNumber = document.forms.myForm.phoneNumber.value;
 
  phoneNumber = phoneNumber.replace(/-/g, "");
 
  //paymethod
 
  payMethod = document.getElementsByName("payMethod");
 
  for (var j = 0; j < payMethod.length; j++) {
 
    if (payMethod[j].checked){
 
      foundChecked = true;
 
      break;
 
    }
 
  }
 
  //credit card
 
  creditCard = document.forms.myForm.ccNumber.value;
 
  creditCard = creditCard.replace(/ /g, "");
 
  //vehicle
 
  vehicle = document.forms.myForm.vehicle.selectedIndex;
 

 

 
  
 
  //check to see if the correct information was gathered, if not then dont move pages
 
  if (name == "" || name == null){
 
    trueFalse = false;
 
    document.getElementById("fullName").className = "error";
 

 
  }
 
  if(phoneNumber.length < 10 || phoneNumber.length > 15){
 
    trueFalse = false;
 
    document.getElementById("phoneNumber").className = "error";
 
  }
 
  if(foundChecked == false){
 
    trueFalse = false;
 
    document.getElementById("payMethod").className = "error";
 
  }
 
  if(creditCard.length != 15){
 
    trueFalse = false;
 
    document.getElementById("ccNumber").className = "error";
 
  }
 
  if(vehicle == 0){
 
    trueFalse = false;
 
    document.getElementById("vehicle").className = "error";
 
  }
 
  if (trueFalse == false){
 
    document.getElementById("formProblems").className = "showErrorMsg";
 
  }
 

 

 
  return trueFalse;
 
}