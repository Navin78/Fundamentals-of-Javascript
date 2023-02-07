// Functions
const calcage = function (birthyear) {
  return 2022 - birthyear;
};
const age = calcage(2015);
console.log(age);

// destructing objects

const restaurnant = {
  name: "Family restaurnant",
  location: "Chennai ,Coimbatore",
  Mainmenu: ["Pizza", "Burger", "chicken briyani", "Muttonbriyani"],
  Statermenu: ["Tea", "Coffee", "Pongal", "Vadai"],
  order: function (mainindex, staterindex) {
    return (this.Statermenu, [staterindex]), this.Mainmenu[mainindex];
  },
};
console.log(restaurnant);
// using spread operator  and joining the two arrays
const newmenu = [...restaurnant.Mainmenu, ...restaurnant.Statermenu];
console.log(newmenu);

// copy array
const mainmenucopy = [...restaurnant.Mainmenu];
console.log(mainmenucopy);

// js objects testing values

function name(ramu, somu) {
  x = ramu + somu;
  y = 20;
  z = x - y;
  return y;
}
const a = name(20, 15);
let b = a;
console.log(b);

// soccer game
const game = {
  team1: "Ashwanth",
  team2: "Pranesh",
  players: [
    [
      "Navin",
      "Ram",
      "somu",
      "saanthosh",
      "virat",
      "Messi",
      "Debjit",
      "Krishna",
      "balan",
      "victor",
    ],
    [
      "Ronaldo",
      "Burki",
      "rocky",
      "Bhai",
      "vijay",
      "narendar",
      "Kowshik",
      "Sundar",
      "abijit",
      "sachin",
    ],
  ],
  score: "10",
  scored: ["Mendozaa", "Messi", "Ronaldo", "Pawan"],
  date: "12 Nov 2022",
  odds: {
    team1: 8.0,
    x: 5.0,
    team2: 4.0,
  },
};

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}:${player}`);

// SETS in js
// defined as the duplicate values are ejected by the sets
const orderSet = new Set(["Pizza", "Pizza", "Cheese", "Risitoo", "Cheese"]);
console.log(orderSet);

console.log(new Set("Navin")); //defines as te string
console.log(orderSet.size); // sizeof the element
console.log(orderSet.has("Pizza")); // true// has is the one type of method we can identify the if the item in the menu
console.log(orderSet.has("omelet")); //false // if item is not here

// for (const order of orderSet);
// console.log(order);
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffunique = [...new Set(staff)]; //spread operator
console.log(staffunique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

//  maps and the fundamentals

const fruits = new Map([
  ["Apples", 500],
  ["Mangoes", 1000],
  ["Grapes", 200],
]);
console.log(fruits);

// Normally we can declare the maps using MAP functions
const rest = new Map();

rest.set(1, "Navin");
rest.set(2, "Hari");
rest.set(3, "Somu");
rest.set(4, "jinder");

console.log(rest);

// keys and the  values for maps
//Using For of    it can return the keys first after the values
//mostly we can  use this type of the method
for (let key of rest.keys()) {
  console.log(`key is ${key} `);
}

for (let value of rest.values()) {
  console.log(`The value is  ${value}`);
}

for (let [key, value] of rest) {
  console.log(`The key ${key} and the values is ${value}`);
}

//Using For Each it can return the values first :)

rest.forEach((key) => console.log(`${key}`)); // print the key it can return the values

rest.forEach((v, k) => console.log(`${v} and ${k}`));

rest.delete(2);
console.log(rest);

console.log(rest.get());

// Maps Iteration process it trends an error an the iteration

// const map2 =new Map([
// ['question','What is the programming language in the world'],
// [1,'C'],
// [2,'Java'],
// [3,'Phyton'],
// [4,'Angular']
// ['correct',4],
// [true,'correct'],
// [false,'Try again'],
// ]);
// console.log(map2);

const map1 = new Map([
  ["country", "Chile"],
  ["age", 30],
]);
console.log(map1);

//  Using forEach
map1.forEach((value, key) => {
  console.log(value, key);
});

//  Using for...of
for (const [key, value] of map1) {
  console.log(key, value);
}

//  Iterate over a Map's keys
for (const key of map1.keys()) {
  console.log(key);
}

//  Iterate over a Map's values
for (const value of map1.values()) {
  console.log(value);
}

console.log(map1);

// calculate the birthyear

function calcage1(birthyear) {
  return 2022 - birthyear;
}
const age3 = calcage1(1998);
console.log(age3);

const question = new Map([
  ["question", "What is the programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, " Phyton"],

  ["correct", 3],
  [true, "correct"],
  [false, "Try again"],
]);
console.log(question);

// convert object to maps (giving the object name and entries in the restarunat )
console.log(Object.entries(restaurnant));
const hoursMap = new Map(Object.entries(restaurnant));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`${key}:${value}`);
}

// coding challenge 3
// 1. Create an array 'events' of the different game events that happened (no
//   duplicates)
//   2. After the game has finished, is was found that the yellow card from minute 64
//   was unfair. So remove this event from the game events log.
//   3. Compute and log the following string to the console: "An event happened, on
//   average, every 9 minutes" (keep in mind that a game has 90 minutes)
//   4. Loop over 'gameEvents' and log each element to the console, marking
//   whether it's in the first half or second half (after 45 min) of the game, like this:
//   [FIRST HALF] 17:  GOAL

const gamevents = new Map([
  [1, "Start Game"],
  [10, "Goal"],
  [25, "Substution"],
  [45, "Half time"],
  [60, "Yellow Card"],
  [75, "Goal"],
  [80, "Substution"],
  [90, "Goal"],
  [92, " Yellow Card"],
]);

// 1.console.log(gamevents.values());
const events = new Set(gamevents.values()); // it can delete the dulipcate values bacause this is an SET
console.log(events);
//2. delete the yellow card
gamevents.delete(60); // we can delete the Yellow card 60th mintues

//3.compute the values and the event is happen
const time = [...gamevents.keys()].pop(); //POP also return the deleted values it delete the last element also
console.log(time);

console.log(
  `An the event happened on average ${time / gamevents.size} minutes`
);

//4. Looping the concept
for (const [min, events] of gamevents) {
  const half = min <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half}] ${min}:${events}`);
}

// working with arrays in js

const airplane = "Indigo plane";
const planenum = "CD1780";

console.log("Indigo plane".length);
console.log(planenum[3]);
console.log("CD1780"[4]);
console.log(airplane.indexOf("plane")); // strings are case sensitive

// Slice operator
console.log(airplane.slice(1));
console.log(airplane.slice(3, 5));

console.log(airplane.slice(0, airplane.indexOf(" ")));
console.log(airplane.slice(airplane.lastIndexOf(" ") + 1));

//in airplane seat allotment for passengers
const checkMiddleseat = function (seat) {
  // B and c are middle seat
  const s = seat.slice(-1);
  if (s === "A" || s === "B") console.log("You got a middle seat");
  else console.log("You are Lucky person");
};
checkMiddleseat("11B");
checkMiddleseat("10C");
checkMiddleseat("12A");

// upper case and lowercase
console.log(airplane.toUpperCase());
console.log(airplane.toLowerCase());

// Fix captilization in the name
const passenger = "NaVIn";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // start of the string it goes for last
console.log(passengerCorrect);

//Replace method we can replacing words numbers and content also
const name1 = "Navinkumar";
const name2 = name1.replace("Navinkumar", "Hariprasath");
console.log(name2);

const foods = "Mutton";
const correctfoods = foods.replace("Mutton", "Chicken Briyani");
console.log(correctfoods);

const visitors =
  "In Ladkh there is over snow .So the visitors are not allowed to visting the places snow ";
const visitorsnotallowed = visitors.replace(/snow/g, "mist"); // we can using reqular expressiions G stands for global
console.log(visitorsnotallowed);

// split and the join methods in js

const recursive = "StudentNotebook".toUpperCase();
const simple = recursive.split("  ");
console.log(simple);

// join method

const joined = ["navin".toUpperCase(), "kumar", "developer"];
const joins = joined.join(" ");
console.log(joins);

