function validateList() {
   
    var active = document.getElementById("active").value;
    var bed = document.getElementById("bed").value;
    var contact = document.getElementById("contact").value;
    var bath = document.getElementById("bath").value;
    var add = document.getElementById("add").value;
    var prop = document.getElementById("prop").value;
    var lot = document.getElementById("lot").value;
    var amount = document.getElementById("amount").value;
    var flr = document.getElementById("flr").value;
    var validContact, validVal=true;

    alert(active)
    console.log(email)
     if(isNaN(contact)){
        validContact = false;
        alert("please enter a valid contact number")
     }
     if(lot < 1 || flr < 1 || amount < 1 || bed < 1 || bath < 1){
        validVal = false;
        alert("value cannot be less than 1")
     }

    if(validContact,validVal){
        alert("Listing successful! One of our agents will contact you soon!")
        window.location.href="log-in-page.html"
    }
}