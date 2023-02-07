// Function calling another function

function cutFruitpieces(fruit) {
  return fruit * 4;
}

function fruitprocessor(apples, oranges) {
  const applepieces = cutFruitpieces(apples);
  const orangepieces = cutFruitpieces(oranges);

  const Juice = `Juice with ${applepieces} pieces of apple ${orangepieces} pieces of orange`;
  return Juice;
}
console.log(fruitprocessor(2, 3));

//  function using variables
function calcAge(birthyear, place, firstname) {
  const age = 2037 - birthyear;
  console.log(
    `My name ${firstname} I was born in ${place} and dob ${birthyear} `
  );
  return age;
}

const age = calcAge(2002, "dharmapuri", "NAVI");

//*******ARRAY CONCEPTS ********/
// new is the keyword and Array is the function  we can also declare this method also

const years = new Array(1991, 1924, 8970);
console.log(years);

// this is the normal method the declare

const friends = ["navin", "Hari", "suresh"];
console.log(friends);

// replacing the text and array values
friends[1] = "rohit";
console.log(friends);

console.log(friends[1]); // selecting the array value

console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = "navin";
const rock = [firstName, "studying in SRMVCAS", 20, "Coder"];
console.log(rock);

//push adds the last element of the array

const friend = ["navin", "Hari", "suresh"];
friend.push("Somu", "Rakesh");
console.log(friend);

//pop method remove the last element of the array

friend.pop();
console.log(friend);

//unshift method  adds the first element of the array

friend.unshift("virat");
console.log(friend);

// index of method  checking the index value of the array
// if the array element is not there goes to -1;

console.log(friend);

// It will change the hari index value

friend[friend.indexOf("Hari")] = "Hari is avaliable in india";
console.log(friend);

// console.log(friend.indexOf('Somu'));

// console.log(friend.indexOf('raju'));

// Includes method if value available in array it gives true
// otherwise it gives the false value

console.log(friend.includes("navin"));

// another method  Includes

if (friend.includes("navin")) {
  console.log("NAVI is avaliable in next morning");
} else {
  console.log("Not avaliable ");    
}

const neighbours = ["Norway", "Sweden", "Russia"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
neighbours[neighbours.indexOf("Sweden")] = "Republic of sweden";
console.log(neighbours);

// objects in js

const myCountry = {
  Country: "India",
  Capital: "Delhi",
  Language: "Tamil",
  Population: 34638963,
};

console.log(myCountry);

// Dot and the bracket notation

// const group={
//     Name:'Rocky',
//     Lastname:'Sushanth',
//     age:25,
////     City:'kerala',
//     job:'cinema field',
//     friends:['ram','subbu','akash','pradheep','navin']
// };

// console.log(group);
// console.log(group.Name);
// console.log(group['Lastname']);

// const interestedIn= prompt('What do you know about the Rocky? Name,Lastname,age,City,job')
// console.log(group[interestedIn]);

// //NAVI has 5 friends and his best friend is pradheep

// console.log(`${group.Name} has friends ${group .friends.length} and his best friend is ${group.friends[3]}`);

// this keyword

const group = {
  Name: "Rocky",
  Lastname: "Sushanth",
  age: 25,
  City: "kerala",
  job: "cinema field",
  friends: ["ram", "akash", "pradheep", "navin"],
  function() {
    console.log(this.City);
  },
};
group.function();

// Looping statements (FOR LOOP);
for (let India = 1; India <= 10; India++)
  console.log(`Voter number  ${India} is currently working`);

for (name = 1; name <= 10; name++)
  console.log(`The original number is ${name} iteration`);

//for loop iteration process using continue and break;

const about = [
  "Rocky",
  "Sushanth",
  25,
  "kerala",
  "cinema field",
  ["ram", "subbu", "akash", "pradheep", "navin"],
];
for (let i = 0; i < about.length; i++) {
  console.log(about[i], typeof about[i]);
}

const noumn = [1020, 2010, 2014];
const atti = [];

for (let i = 0; i < noumn.length; i++) {
  atti.push(2037 - years[i]);
}
console.log(atti);

for (let i = 1; i < 20; i++) {
  if (i % 5 === 0)
    // divisible by 5  the loop will be iterative
    console.log(i);
}

//  Looping backwards loops in loop

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

const method = ["virat", "dinesh", "ashwin"];
console.log(method);

console.log(method.indexOf("ashwin"));

// const measureKelvin = function(){
//     const measurement= {
//         type:'temp',
//         unit:'celsius',
//         value:prompt('Degree of Celsius:')

//     };
//     console.log(measurement.value);
//     console.warn(measurement.value);
//     console.error(measurement.value);

//     const kelvin = measurement.value + 273;
//     return kelvin;
// };

// console.log(measureKelvin());
// Functions 1
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juicee = `Juice with ${apples} apples and ${oranges} oranges`;
  return juicee;
}
const apple = fruitProcessor(10, 20);
console.log(apple);

// 2) Functions
function bio(name, City, age) {
  const mydata = `My name is ${name} I am living in ${City} and my age is ${age}.`; // normal function
  return mydata;
}

const mydata = bio("Navinkumar", "Dharmapuri", 21); // invoking a function
console.log(mydata);


