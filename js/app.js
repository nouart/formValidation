var information = document.querySelector('.informations');
var fullName = document.querySelector("#fullname");
var email = document.querySelector("#email");
var msg = document.querySelector("#message");
var nameErrors = document.querySelector("#nameerrors");
var emailErrors = document.querySelector("#emailerrors");
var numbs = document.querySelector("#numb");
var validName = false;
var validEmail = false;
var validMsg = false;

fullName.addEventListener('blur', function(event){

  var regex = /^[A-Z][a-z]+\s{1,3}[A-Z][a-z]+/ ;
  if(fullName.value === ""){
  		fullName.classList.add("emptyinput");
 		nameErrors.innerText = "'Name' is required";
 		//validName = false;
   }else if(fullName.value.match(regex)){
   		fullName.classList.remove("emptyinput");
 		fullName.style.borderColor = "#2ECC40";
 		document.querySelector('.name .star').style.display="none";
 		document.querySelector('.name .check').style.display="inline";
 		nameErrors.innerText = "";
 		validName = true;

   }else {
     	fullName.classList.add("emptyinput");
     	fullName.style.borderColor = "";
     	document.querySelector('.name .star').style.display="inline";
 		document.querySelector('.name .check').style.display="none";
 		nameErrors.innerText = "Enter a valid first name & last name, both must starts with Capital Letter.";
 		validName = false;
 		}
 	activateButton() ;
 	}, true);

email.addEventListener('blur', function(event){

	var regex = /^[a-z]+[a-z0-9-_]+@[a-z][a-z0-9-_]+\.[a-z]{2,3}/ ;
 	if(email.value === ""){
  		email.classList.add("emptyinput");
 		emailErrors.innerText = "'Email' is required";
 		//validEmail = false;

 	}else if(email.value.match(regex)){
 		email.classList.remove("emptyinput");
 		email.style.borderColor = "#2ECC40";
 		document.querySelector('.email .star').style.display="none";
 		document.querySelector('.email .check').style.display="inline";
 		emailErrors.innerText = "";
 		validEmail = true;


 	}else {
 		email.classList.add("emptyinput");
 		email.style.borderColor = "";
 		document.querySelector('.email .star').style.display="inline";
 		document.querySelector('.email .check').style.display="none";
 		emailErrors.innerText = "Enter a valid email,  ";
 		validEmail = false;

 		}
   activateButton()

}, true);

msg.addEventListener('keyup', function(event){

	numbs.innerText = msg.value.length;
	if(msg.value.length >= 20) {
		msg.style.borderColor = "#2ECC40";
		validMsg = true;

	  }else {
	    msg.style.borderColor = "";
	    validMsg = false;
	   }
	activateButton();
}, true);

function activateButton(){

if (validName === true && validEmail === true && validMsg === true) {
		document.querySelector('#btn').classList.remove('btndisabled');
		document.querySelector('#btn').classList.add('btn');
}else{
		document.querySelector('#btn').classList.remove('btn');
		document.querySelector('#btn').classList.add('btndisabled');
	}
};
