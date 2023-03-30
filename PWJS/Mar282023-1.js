const numErrText = document.getElementById('numErrText');
const phoneNum = document.getElementById('phoneNum');
const chkBtn = document.getElementById('chkBtn');
// function isPattern(userInput) {
//     if (typeof userInput !== 'string' || userInput.length !== 15) {
//         return false;
//     }
//     for (let i = 0; i < userInput.length; i++) {
//         let c = userInput[i];
//         switch (i) {
//             case 0:
//             case 1:
//             case 2:
//             case 4:
//             case 5:
//             case 6:
//             case 8:
//             case 9:
//             case 10:
//             case 11:
//             case 12:
//             case 13:
//             case 14:
//                 if (c < 0 || c > 9) return false;
//                 break;
//             case 3:
//             case 7:
//                 if (c !== '-') return false;
//                 break;
//         }
//     }
//     return true;
// }
function isPattern(userInput){
    let regEx1 = /^\d{3}-\d{3}-\d{7}$/;
    let regEx2 = new RegExp('^\d{3}-\d{3}-\d{7}$');
    let isMatch = regEx1.test(userInput);
    console.log(regEx1);
    console.log(regEx2);
    console.log(userInput);
    console.log(isMatch);
    return isMatch;
}
chkBtn.addEventListener("click", function () {
    let num =  phoneNum.value;
    if(isPattern(num))
    {
        numErrText.innerText = `Valid`;
        numErrText.classList.remove("text-danger");
        numErrText.classList.add("text-success");

    }else{
        numErrText.innerText = `Invalid!`;
        numErrText.classList.remove("text-success");
        numErrText.classList.add("text-danger");
    }
});