function myFun () {
    console.log("My name is Murtaza");    
}

myFun();

function numSquare(num) {
    let sqr = num*num;
    console.log(`The Square of ${num} is ${sqr}`);
    
    return sqr;    
}

let data = numSquare(12);
console.log(data);

// data = prompt("Enter any Number");
// console.log(numSquare(data));


function addTwoNums(a,b){
    document.getElementById('p1').innerText = `${a} + ${b} = ${Number(a) + parseInt(b)}`;
}

function showMsg (x,y)
{
    document.getElementById('p2').innerText = `Hi ${x}, you are ${y} years old`;
}