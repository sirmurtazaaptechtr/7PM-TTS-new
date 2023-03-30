console.log("JS is working...");

// for(var i=1;i<=5;i++){
//     document.getElementById("p1").innerHTML += `${i}. My name is Hussain.<br>`;
//     // document.querySelector("#p1").innerHTML += `${i}. My name is Hussain.<br>`;
//     console.log(`${i}. My name is Hussain.`);
// }

// var i = 1;
// var x = i+1;
// while(i<=x){
//     document.querySelector("#p1").innerHTML += `${i}. My name is Hussain.<br>`;
//     i++;
//     x = Number(prompt(`give value greater than ${i} if you want to continue and less than ${i} to terminate.`));
// }
// var answer = true;
// while(answer){
//     var tab = Number(prompt("which table you want to display?"));
//     document.querySelector("#p1").innerHTML += `Displaying table of ${tab}<br>`;
//     for(var i=1;i<=10;i++){
//         document.querySelector("#p1").innerHTML += `${tab} X ${i} = ${tab*i}<br>`;
//     }
//     answer = confirm("Do you want to print another table?");   
// }
// var answer = false;
// do{
//     var tab = Number(prompt("which table you want to display?"));
//     document.querySelector("#p1").innerHTML += `Displaying table of ${tab}<br>`;
//     for(var i=1;i<=10;i++){
//         document.querySelector("#p1").innerHTML += `${tab} X ${i} = ${tab*i}<br>`;
//     }
//     answer = confirm("Do you want to print another table?");   
// }while(answer);

var names = ["Dua","Talha","Saad","Hamza","Nabeel","Anas"];

// for(var i =0;i<names.length;i++){
//     document.querySelector("#p1").innerHTML += `${i+1}. Hello! ${names[i]}, how do you do?<br>`;
// }

// names.forEach(function(e,i){
//     document.querySelector("#p1").innerHTML += `${i+1}. Hello! ${e}, how do you do?<br>`;
// });

// for(e of names){
//     document.querySelector("#p1").innerHTML += `Hello! ${e}, how do you do?<br>`;
// }

for(i in names){
    document.querySelector("#p1").innerHTML += `${Number(i)+1}. Hello! ${names[i]}, how do you do?<br>`;
}