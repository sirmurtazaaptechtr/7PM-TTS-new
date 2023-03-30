// let num = parseInt(prompt("Enter any Number"));
// let num = Number(prompt("Enter any Number"));
// if(num%2 === 0)
// {
//     console.log(`${num} is Even`);    
// }
// else
// {
//     console.log(`${num} is Odd`);
// }
// let num1 = Number(prompt("Enter First Number"));
// let num2 = Number(prompt("Enter Second Number"));
// let op = Number(prompt(`1.Add\n2.Subtract\n3.Mul\n4.Div\nEnter You Choice(1-4) : `));
// if(op === 1)
// {console.log(`${num1} + ${num2} = ${num1+num2}`);}
// else if(op === 2)
// {console.log(`${num1} - ${num2} = ${num1-num2}`);}
// else if(op === 3)
// {console.log(`${num1} X ${num2} = ${num1*num2}`);}
// else if(op === 4)
// {console.log(`${num1} / ${num2} = ${num1/num2}`);}
// else
// {console.log("Invalid Input!");}
// switch(op)
// {
//     case 1:
//         console.log(`${num1} + ${num2} = ${num1+num2}`);
//     break;
//     case 2:
//         console.log(`${num1} - ${num2} = ${num1-num2}`);
//     break;
//     case 3:
//         console.log(`${num1} X ${num2} = ${num1*num2}`);
//     break;
//     case 4:
//         console.log(`${num1} / ${num2} = ${num1/num2}`);
//     break;
//     default:
//         console.log("Invalid Input!");
//     break;            
// }

const msg = document.getElementById('msg');

function login(id, pwd) {
    if (id === 'admin' && pwd === '1234') {
        msg.innerText = `Login Successful`;
        msg.style.color = 'green';
        window.open('../index.html')
    }
    else {
        msg.innerText = `Invalid Username or Password`;
        msg.style.color = 'red';
    }
}
const showdt = document.getElementById('showdt');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function showDateTime() {
    const dt = new Date();
    showdt.innerText = dt.getFullYear();
    showdt.innerText = months[dt.getMonth()];
    showdt.innerText = dt.getDate();
    showdt.innerText = dt.getHours();
    showdt.innerText = dt.getMinutes();
    showdt.innerText = dt.getSeconds();
    showdt.innerText = days[dt.getDay()];
    showdt.innerText = dt;   
    
    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let sec = date.getSeconds();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ':' + sec.toString().padStart(2, 0) + ' ' + ampm;
        return strTime;
    }    
    showdt.innerText = formatAMPM(dt);
}

setInterval(showDateTime, 1000);