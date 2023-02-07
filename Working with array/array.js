// (function(){
//    const topic= document.querySelector('h2');
//     topic.style.color='grey';
// })();

"use strict";

// slice opeartor
const arr = ["navin", "hari", "lokesh", "ram", "abishek"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(2, -2));
console.log([...arr]);

//push operator  it can add the last element in the array
const arr1 = ["navin", "hari", "lokesh", "ram", "abishek"];
arr1.push("somu");
console.log(arr1);

// pop method it can remove the last element  in the array

const cricket = ["Dhoni", "virat", "rahul", "conway", "ferguson"];
cricket.pop(4);
console.log(cricket);

//shift remove the first element in the array
const crickets = ["Dhoni", "virat", "rahul", "conway", "ferguson"];
crickets.shift(4);
console.log(crickets);

//unshift  insert new element from start of the array
const arr2 = ["navin", "hari", "lokesh", "ram", "abishek"];
arr2.unshift("raju");
console.log(arr2);

// index of ()  it can return the first index elment of the array
//we can give two or more names same it take the 1st element otherwise(-1)
const names = ["navin", "hari", "lokesh", "ram", "abishek"];
console.log(names.indexOf("hari"));

// last index of array  gives the last index of te array

// const flow=['for','loop','extent','hjk','hfgkf']
// flow.lastIndexof('loop')
// console.log(flow);

// at method  (also we can use the string method also)
// use case is if the one array will display use AT method
const rocky = ["gandhi", "nehru", "Jhansi"];
console.log(rocky.at(1));

// we can declare this type also
console.log(rocky[2]);

// string  also work
console.log("raghuram".at(3));
console.log("raghuram".at(-3));

// foreach method
//1st element is the current element of the array it can select
//2nd element represent the  index value 0s and 1s;
console.log("--FOREACH--");
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
console.log(month);

month.forEach(function (month, index) {
  console.log(`Start with ${index + 1} and ${month}`);
});

// foreach with maps and sets
console.log("---MAP---");
const currencies = new Map([
  ["RS", "Rupees"],
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log("---SETS---");
const setunique = new Set(["RS", "USD", "RS", "EUR", "EUR"]);
console.log(setunique);
setunique.forEach(function (value, map) {
  console.log(`${value}: ${value}`);
});

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// coding challenge 1
// //Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
// 4. Run the function for both test dataset

const checkdogs = function (dogsJulia, dogskate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogskate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkdogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkdogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//MAPS

const arr3 = [10, 20, 30, 40, 50];

const output = arr3.map(function binary(x) {
  return x.toString(2);
});
console.log(output);

// maps using arow function
// binary values 
const output1=arr3.map((x)=>x.toString(2));
console.log(output1);

const output2 =arr3.filter((x)=> x>20);
console.log(output2);

// Coding challenge 2 

// const calcAverageHumanAge=function(ages){

//   const humanAges=ages.map(age=> age<=2 ? 2*age:16 + age *4)
//   const adultAge=humanAges.filter(age=> age >=18)
//   console.log(humanAges);
//   console.log(adultAge);

//   const average = adultAge.reduce((acc,age)=>acc+ age, 0)/adultAge.length;
//   return average;
// };
// const avg1=calcAverageHumanAge([5,6,7,1,2,15,6])
// const avg2=calcAverageHumanAge([3,5,8,7,10,9,4])

// console.log(avg1,avg2);


const calcAverageHumanAge=ages=>
ages.map(age=> age<=2 ? 2*age:16 + age *4)
 .filter(age=> age >=18)
 .reduce((acc,age,i,arr)=>acc+ age/arr.length, 0)

const avg1=calcAverageHumanAge([5,6,7,1,2,15,6])
const avg2=calcAverageHumanAge([3,5,8,7,10,9,4])

console.log(avg1,avg2);


let person={
  name:'Navin',
  age:20,
  place:'CBE',
  eyecolor:'black'
};
console.log(person);
console.log(person.name,person.age);
delete person.name;
console.log(person);

const items=[
  {id:1,title:'Redmi11pro',cost:80000},
  {id:2,title:'Iphone',cost:2000},
  {id:4,title:'Gaming PC',cost:102000},
  {id:8,title:'vivo 20pro',cost:50000},
  {id:50,title:'realmec50',cost:4000},
  {id:70,title:'techno89',cost:7000},
 ];

console.log(items);

const lowerprice=items.sort((a,b) => a.cost - b.cost)
console.log(lowerprice);

// const lowerprice=items.sort(function(a,b){
//   return a.cost-b.cost;
// })
// console.log(lowerprice);
//OBJECT 
let textile={
  id:12551,
  Name:'Sangam Silks',
  Location:'dharmapuri',
  Sarees:['Cotton', 'Silk', 'Embroid'],
  Rates:[120000,180000,2000000,222000],
  Discount:['20%','30%','40%'],
  Event:['Christmas','New year','Pongal']
};

console.log(textile);



const group = {
  Name: "Rocky",
  Lastname: "Sushanth",
  age: 25,
  City: "kerala",
  job: "cinema field",
  friends: ["ram", "akash", "pradheep", "navin"],
};

console.log(` ${group.Lastname} has ${group.friends.length} friends and selected friend is ${group.friends[2] }`);
