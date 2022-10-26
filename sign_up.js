function checkfirstName(name) {
  var valid = true;
  if (name == "") {
    valid = false;
    alert("Last name must not be empty!");
    return false;

  } else if (name.length < 2) {
    valid = false;
    alert("Last name too short!");
    return false;
  }
  let has_digit = false;
  for (let i = 0; i < name.length; i++) {
    if ("0123456789".includes(name.charAt(i))) {
      has_digit = true;
    }
  }
  if (has_digit) {
    valid = false;
    alert("First and Last Name Should not consist of numbers");
    return false;
  }
  return valid;
}

function containsAnyLetters(str) {
return /[a-zA-Z]/.test(str);
}


function checkPassword(password){

    var passValid = true;
      if (password.length < 8) {
        alert("Should have atleast 8 characters");
        passValid = false;
         } 
  return false;
}

function checkPhone(mobile){
  var phoneValid = true;

  let testPhone = containsAnyLetters(input_str);
  if(testPhone){
    alert("Please enter a valid Phone Number")
    phoneValid = false;
    return false;
  }
  return phoneValid
}


function validated() {
  var fname = document.forms["form"]["fname"].value;
  var lname = document.forms["form"]["lname"].value;
  var mobile = document.forms["form"]["mobileNumber"].value;
  var pass1 = document.forms["form"]["password"].value;
  var pass2 = document.forms["form"]["password2"].value;


  checkfirstName(fname);
  checkfirstName(lname);
  checkPassword(password);
  validatePhoneNumber(mobile);

  if(pass1!=pass2){
    alert("password does not match")
    return false;
  }



  alert(phoneValid)


}


