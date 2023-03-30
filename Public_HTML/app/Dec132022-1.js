const p1 = document.getElementById('p1');
const students = [
    {
        fullName: "Hamza Ali Shah",
        age: 17,
        gender: "male",
        isPresent: true
    },
    {
        fullName: "Saad Khurram",
        age: 16,
        gender: "male",
        isPresent: true
    },
    {
        fullName: "Nabeel Shah",
        age: 16,
        gender: "male",
        isPresent: true
    },
    {
        fullName: "Anas",
        age: 26,
        gender: "male",
        isPresent: false
    },
    {
        fullName: "Dua",
        age: 24,
        gender: "female",
        isPresent: false
    },
    {
        fullName: "Jahanzeb",
        age: 21,
        gender: "male",
        isPresent: false
    }
];

console.log(students);
console.log(students[0]);
console.log(students[0].fullName);
console.log(students[0].age);
console.log(students[0].gender);

console.log(`Dear ${students[0].fullName}, you are ${students[0].age} years old and your gender is ${students[0].gender}`);
console.log(`Dear ${students[1].fullName}, you are ${students[1].age} years old and your gender is ${students[1].gender}`);

for (let i = 0; i < students.length; i++) {
    console.log(`${i+1}. Dear ${students[i].fullName}, you are ${students[i].age} years old and your gender is ${students[i].gender}`);    
}

function showStd() {
    for (let i = 0; i < students.length; i++) {
        console.log(`Dear ${students[i].fullName}, you are ${students[i].age} years old and your gender is ${students[i].gender}`);

        p1.innerText += `${i + 1}. Dear ${students[i].fullName}, you are ${students[i].age} years old and your gender is ${students[i].gender}`;
        p1.innerHTML += '<br>';
    }
}

let cnt = 0;
while(cnt < students.length)
{
    if(students[cnt].isPresent)
    {
        console.log(`${cnt+1}. Dear ${students[cnt].fullName}, you are ${students[cnt].age} years old and your gender is ${students[cnt].gender}`);
    }    
    cnt++;
}

cnt = 0;
do
{
    if(students[cnt].gender === 'female')
    {
        console.log(`${cnt+1}. Dear ${students[cnt].fullName}, you are ${students[cnt].age} years old and your gender is ${students[cnt].gender}`);
    }    
    cnt++;
}while(cnt < students.length);
