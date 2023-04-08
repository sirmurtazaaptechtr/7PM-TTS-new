const numErrText = document.getElementById('numErrText');
const webErrText = document.getElementById('webErrText');
const phoneNum = document.getElementById('phoneNum');
const webUrl = document.getElementById('webUrl');
const chkBtn = document.getElementById('chkBtn');
function isPhone(userInput){
    let regPhoneL = /^[+]\d{2}-\d{3}-\d{7}$/;            
    let isMatchPhoneL = regPhoneL.test(userInput);                
    console.log(isMatchPhoneL);
return isMatchPhoneL;
}
function isWeb(userInput){
    let regWebL = /^[https?]+:\/\/((w{3}\.)?[\w+]+)\.[\w+]+$/i;            
    let isMatchWebL = regWebL.test(userInput);                
    console.log(isMatchWebL);
return isMatchWebL;
}
chkBtn.addEventListener("click", function () {
    let num = phoneNum.value;
    let web = webUrl.value;
    if(isPhone(num))
    {
        numErrText.innerText = `Valid`;
        numErrText.classList.remove("text-danger");
        numErrText.classList.add("text-success");
    }else{
        numErrText.innerText = `Invalid!`;
        numErrText.classList.remove("text-success");
        numErrText.classList.add("text-danger");
    }
    if(isWeb(web))
    {
        webErrText.innerText = `Valid`;
        webErrText.classList.remove("text-danger");
        webErrText.classList.add("text-success");
    }else{
        webErrText.innerText = `Invalid!`;
        webErrText.classList.remove("text-success");
        webErrText.classList.add("text-danger");
    }
});