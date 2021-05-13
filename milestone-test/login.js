


//Input checker

var email = document.forms['check_in']['email'];
var password = document.forms['check_in']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',email_Verify);
//If the length is small than 1, return false, as it's not valid
function validate(){
	if(email.value.length<9){
		email.style.border = "1px solid red";
		email_error.style.display="block";
		email.focus();
		return false;
	}
	//The smallest password will be 6 digits
	if(password.value.length<6){
		password.style.border = "1px solid red";
		pass_error.style.display="block";
		password.focus();
		return false;
	}
}

function email_Verify(){
	if(email.value.length >= 8){
		email.style.border = "1px solid silver";
		email_error.style.display="none";
		return true;
	}
}

function pass_Verify(){
	if(email.value.length >= 5){
		email.style.border = "1px solid silver";
		email_error.style.display="none";
		return true;
	}
}