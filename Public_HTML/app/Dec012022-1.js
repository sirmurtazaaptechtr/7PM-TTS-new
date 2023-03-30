let x = 10, y = 5;
console.log(`X = ${x}, Y = ${y}`);

x = y;
console.log(`X = ${x}, Y = ${y}`);

x += y
console.log(`X = ${x}, Y = ${y}`);

x -= y
console.log(`X = ${x}, Y = ${y}`);

x *= y
console.log(`X = ${x}, Y = ${y}`);

x /= y
console.log(`X = ${x}, Y = ${y}`);

x **= y
console.log(`X = ${x}, Y = ${y}`);

x %= y
console.log(`X = ${x}, Y = ${y}`);

x = 10;
y = 5;

x <<= y
console.log(`X = ${x}, Y = ${y}`);

x  >>= y
console.log(`X = ${x}, Y = ${y}`);

let data;
console.log(`${data} is ${typeof(data)}`);
console.log(data+" is "+typeof(data));

data = null;
console.log(`${data} is ${typeof(data)}`);

data = 3.14;
console.log(`${data} is ${typeof(data)}`);

data = "Dua Naeem";
console.log(`${data} is ${typeof(data)}`);

data = true;
console.log(`${data} is ${typeof(data)}`);

data = ["Dua Naeem",24];
console.log(`${data} is ${typeof(data)}`);

data = {fullName:"Dua",age:24};
console.log(`${data} is ${typeof(data)}`);

data = function () {

};
console.log(`${data} is ${typeof(data)}`);

data = () => {

};
console.log(`${data} is ${typeof(data)}`);

function myFun () {
    
}

data = "hi there how are you?";
console.log(data);

const p1 = document.getElementById('p1');
console.log(`${p1} is ${typeof(p1)}`);

p1.innerText = data;
p1.style.color = 'red';