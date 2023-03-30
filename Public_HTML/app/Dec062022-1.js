const p1 = document.getElementById('p1');
let text = "Hi, how are you?";

text = "";
text = '';
text = ' ';
text = '1';
text = 'a';
text = 'this';
text = "it's alright";
p1.innerText = text;
text = 'My company name is "Midware Technologies Pvt Ltd."';

text = "My company name is \"Midware Technologies Pvt Ltd.\"";

p1.innerText = text;

let numOfChars = text.length;
p1.innerHTML += '<br>';
p1.innerText += `My text has ${numOfChars} characters in it.`;

let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = text2.length;
console.log(`${text2} has ${num} characters in it.`);

let smallText = text.slice(20,40);
console.log(smallText);

text = "Apple, Banana, Kiwi";

smallText = text.slice(7,13);
console.log(smallText);

smallText = text.substring(0,5);
console.log(smallText);

smallText = text.substr(15,4);
console.log(smallText);

text = "I work at Aptech, Aptech is an MNC";
// console.log(text);

let repdText = text.replace("Aptech","Midware Technologies Pvt Ltd.");

repdText = text.replace(/Aptech/,"Midware Technologies Pvt Ltd.");
repdText = text.replace(/Aptech/g,"Midware Technologies Pvt Ltd.");
repdText = text.replace(/Aptech/gi,"Midware Technologies Pvt Ltd.");
console.log(text);
console.log(repdText);

let resStr = text.substr(10,6);
console.log(resStr);

console.log(resStr.toLocaleUpperCase());
console.log(resStr.toLocaleLowerCase());

let str1 = "Hello";
let str2 = "World";
let str3 = str1.concat(" ", str2);

console.log(str3);

text = "5";
let sPadded = text.padStart(4,"$");
let ePadded = text.padEnd(4,"X");

console.log(sPadded);
console.log(ePadded);