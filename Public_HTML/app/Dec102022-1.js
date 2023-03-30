console.log("JS is working");
const p1 = document.getElementById('p1');
let x = ["Anas",26,"Dua",24,"Hamza",17,"Saad",16,"Jahanzeb",21];

console.log(x);

x.pop();
x.pop();
console.log(x);

x.push("Murtaza");
x.push(40);
console.log(x);

let text =  x.toString();
console.log(text);
console.log(x);

let text2 = x.join(" <|> ");
console.log(text2);

x.shift();
x.shift();

console.log(x);

x.unshift(26);
x.unshift("Muhammad Anas");
console.log(x);

x[2] = "Dua Naeem";
console.log(x);

console.log(`Dear ${x[0]}, you are ${x[1]} years old.`);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 0, "Lemon", "Kiwi");

console.log(fruits);

fruits.splice(2,1);
console.log(fruits);


let s;
console.log(s);

s = fruits.slice(1,4);
console.log(fruits);
console.log(s);