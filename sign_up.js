function checkfirstName(name) {
  var valid = true;
  if (name == "") {
    valid = false;
    alert("Last name must not be empty!");
  } else if (name.fength < 2) {
    valid = false;
    alert("Last name too short!");
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
  }
  return valid;
}

function containsNumbers(str) {
return /[0-9]/.test(str);
    }

function validatePhoneNumber(input_str) {
var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    
      return re.test(input_str);
    }


function checkPassword(password){
  
    var passValid = true;
             if (password.length < 8) {
                alert("Should have atleast 8 characters");
                var passValid = false;
                } 
               let x= containsNumbers(password);
               if (!x){
                 passValid = false;
                alert("Password should contain atleast 1 number");
                }
                return passValid;
}

function checkPhone(mobile){
  var phoneValid = true;
  let testPhone = validatePhoneNumber(input_str);
  if(!testPhone){
    alert("Please enter a valid Phone Number")
    phoneValid = false;
  }
  return phoneValid
}


function checkPassword2 (pass1,pass2){
  var confirmPass = true; 
if(pass1 !== pass2){
  confirmPass =false;
  alert("password did not match!")
}
return confirmPass;
}

function validated() {
  var fname = document.forms["form"]["fname"].value;
  var lname = document.forms["form"]["lname"].value;
  var email = document.forms["form"]["email"].value;
  var mobile = document.forms["form"]["mobileNumber"].value;
  var pass1 = document.forms["form"]["password"].value;
  var pass2 = document.forms["form"]["password2"].value;

  var islnameValid = checkfirstName(fname);
  var islnameValid = checkfirstName(lname);
  var isPassValid = checkPassword(password);
  var isPhoneValid = validatePhoneNumber(mobile);
  var isConfirmPassValid = checkPassword2(pass1,pass2)

}


