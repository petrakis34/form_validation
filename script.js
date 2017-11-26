// JS Validation Form

// At this first function we check the text names in our form

 function checkNameInput(){ //here we set the fuction to check our texts

	var namePattern =/^[Α-Ωα-ωA-Za-z\s]+$/; //here we set our variable with regular espression matching to all letters from a to z and greek both capitals and small letters and white space with s 
	var inputCheck1 = document.getElementById("nameToCheck").value; //here we set our variables which take the value from our id input in our form
	var inputCheck2 = document.getElementById("addressToCheck").value;
	var inputCheck3 = document.getElementById("addressAreaToCheck").value;
	
	// here we check the name input
	if(inputCheck1 == "" || inputCheck1 == " "){ //here we check if the input field is blank and inform the user to input data
		document.getElementById("namechecked").innerHTML = "Παρακαλώ πληκτρολογείστε κάτι";
	} else {
		if(namePattern.test(inputCheck1)==true){ //here we .test our variable with true or false and print result to user if it matches our regular expression
			document.getElementById("namechecked").innerHTML = "Είναι όνομα σωστά!";
		}else{ // here is what we show to user if it does not match the reg exp variable
			document.getElementById("namechecked").innerHTML = "Λάθος! Παρακαλώ πληκτρολογείστε ένα όνομα";
		}
	}

	// here we ckeck the address address input
	if(inputCheck2 == "" || inputCheck2 == " "){ //here we check if the input field is blank and inform the user to input data
		document.getElementById("addresschecked").innerHTML = "Παρακαλώ πληκτρολογείστε κάτι";
	} else {
		if(namePattern.test(inputCheck2)==true){ //here we .test our variable with true or false and print result to user if it matches our regular expression
			document.getElementById("addresschecked").innerHTML = "Είναι σωστή διεύθυνση!";
		}else{ // here is what we show to user if it does not match the reg exp variable
			document.getElementById("addresschecked").innerHTML = "Λάθος! Εισάγετε μια σωστή διεύθυνση";
		}
	}

	// here we check the name of the address area name
	if(inputCheck3 == "" || inputCheck3 == " "){ //here we check if the input field is blank and inform the user to input data
		document.getElementById("addressareachecked").innerHTML = "Παρακαλώ πληκτρολογείστε κάτι";
	} else {
		if(namePattern.test(inputCheck3)==true){ //here we .test our variable with true or false and print result to user if it matches our regular expression
			document.getElementById("addressareachecked").innerHTML = "Είναι σωστό όνομα Περιοχής!";
		}else{ // here is what we show to user if it does not match the reg exp variable
			document.getElementById("addressareachecked").innerHTML = "Λάθος! Εισάγετε μια σωστή Περιοχή";
		}
	}
}


function checkEmail(){ //here set the fuction to check the email adress
	var emailPosition=0; //we set a variable to set to 0 to start checking where the @ symbol is later 
	var emailForm = document.getElementById("emailToCheck").value; //we set a variable to get the input value from our form
	emailPosition = emailForm.indexOf("@"); //here we set the above variable to returns the position of the first occurrence of @ symbol
	
	if(emailPosition==-1){ // here we check that user will actually writes something in our input form because this method returns -1 if the value to search for never occurs
		document.getElementById("emailchecked").innerHTML="Λάθος! Εισάγετε ένα email";
	}else{
		if(emailForm.length<6){ //  here we check the length of our input with minimum of 6 characters of our input to match at least a valid email /  exmpl a@a.it
			document.getElementById("emailchecked").innerHTML="Λάθος! Εισάγετε ένα σωστό email";
		}else{	// here we output to user the results of our check
			document.getElementById("emailchecked").innerHTML="Είναι email σωστά!";
		}
	}
	
}

function checkEmailDupl(){ // here we check the email input that is identical to the above
	
	if(document.getElementById("emailToCheck").value === document.getElementById("emailToCheckDupl").value){ // here we set to absolute equality with === that the emails' .value are identical

		document.getElementById("emailcheckeddupl").innerHTML="Τα Email είναι σωστά!"; //here is the input result if email is correct
	}else{
		document.getElementById("emailcheckeddupl").innerHTML="Λάθος!Τα Email δεν είναι ίδια!";	
	}
}

function numbersToCheck() { // here we set the function to set our numbers

	var numberPattern1 =/^[0-9.-.+]{10,13}$/; // here we search with reg exp numbers from 0 to 9 plus accpetable sign + and zero with digits 10 to 13. exm 13digit(+3069...) / 10digit(210-96...)
	var numberPattern2 =/^[0-9]{5}$/; // here we search with reg exp numbers from 0 to 9 and exactly 5 numbers no more or less due postal codes in Greece
	var numberPattern3 =/^[0-9]{1,3}$/; // here we search with reg exp numbers from 0 to 9 for address from 1 to 3 digits.. 4 digit number address in greece does not exist
 
	var numberCheck1 = document.getElementById("telephoneToCheck").value; // here we set the variables to check our input values
	var numberCheck2 = document.getElementById("postalcodeToCheck").value;
	var numberCheck3 = document.getElementById("addressnumToCheck").value;
	
	// here we check the telephone number
	if(numberCheck1 == "" || numberCheck1 == " "){ //here we check if the input field is blank and inform the user to input data
		document.getElementById("telephonechecked").innerHTML = "Παρακαλώ πληκτρολογείστε κάτι";
	} else {
		if(numberPattern1.test(numberCheck1)==true){ //here we .test our variable with true or false and print result to user if it matches our regular expression
			document.getElementById("telephonechecked").innerHTML = "Είναι τηλέφωνο σωστά!";
		}else{ // here is what we show to user if it does not match the reg exp variable
			document.getElementById("telephonechecked").innerHTML = "Λάθος! Παρακαλώ πληκτρολογείστε ένα αριθμό τηλεφώνου";
		}
	}

	// here we check the postal code number
	if(numberCheck2 == "" || numberCheck2 == " "){ //here we check if the input field is blank and inform the user to input data
		document.getElementById("postalcodecheck").innerHTML = "Παρακαλώ πληκτρολογείστε κάτι";
	} else {
		if(numberPattern2.test(numberCheck2)==true){ //here we .test our variable with true or false and print result to user if it matches our regular expression
			document.getElementById("postalcodecheck").innerHTML = "Είναι Ταχυδρομικός Κώδικας σωστά!";
		}else{ // here is what we show to user if it does not match the reg exp variable
			document.getElementById("postalcodecheck").innerHTML = "Λάθος! Παρακαλώ πληκτρολογείστε ένα Τ.Κ.";
		}
	}

	// here we check the address number
	if(numberCheck3 == "" || numberCheck3 == " "){ //here we check if the input field is blank and inform the user to input data
		document.getElementById("addressnumbercheck").innerHTML = "Παρακαλώ πληκτρολογείστε κάτι";
	} else {
		if(numberPattern3.test(numberCheck3)==true){ //here we .test our variable with true or false and print result to user if it matches our regular expression
			document.getElementById("addressnumbercheck").innerHTML = "Είναι Αριθμός διεύθυνσης σωστά!";
		}else{ // here is what we show to user if it does not match the reg exp variable
			document.getElementById("addressnumbercheck").innerHTML = "Λάθος! Δεν υπάρχει τέτοιος Αριθμός διεύθυνσης";
		}
	}
}

//Javascript End