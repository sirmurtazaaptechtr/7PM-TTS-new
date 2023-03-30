var fullName = document.getElementById("name");
var emailAddress = document.querySelector("#emailAddress");
var h1 = document.querySelector("h1");
var message = document.getElementById("message");
var sBtn1 = document.querySelector("#sBtn1");

sBtn1.addEventListener("click",function(){
    h1.innerHTML = `Welcome ${fullName.value}`;
    // alert(fullName.value);
    // alert(emailAddress.value);
    // alert(message.value);
});