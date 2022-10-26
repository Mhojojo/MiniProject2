function validation() {

    var un = document.getElementById("uname").value;
    var ps = document.getElementById("psw").value;
   

    if (un == "admin" && ps == "admin123") {
        window.location.href = "adminpage.html"
      return false;
    }
      else if(un == "user" && ps == "user123"){
        window.location.href = "log-in-page.html"
        return false;
      }

    else {
      alert("Incorrect Username or Password!");
      return false;
    }

  }