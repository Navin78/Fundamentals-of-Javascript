"use strict";
// user login 4 persons :
const account1 = {
  owner: "Navin Kumar",
  movements: [200, 250, 600, 700, 8000, -1000, 2000, -4000],
  Interestrate: 1.1,
  pin:1111 ,
  movementsDates:[
    '2024-11-18t21:31:17.178Z',
    '2020-12-23T07:42:02.383Z',
    '2021-01-28T09:15:04.904Z',
    '2022-11-01T10:17:24.185Z',
    '2012-11-18t21:31:17.604Z',
    '2023-11-18t21:31:17.194Z',
    '2019-11-18t21:31:17.929Z',
  ]
};
const account2 = {
  owner: "Balaji sugumar",
  movements: [2000, -2500, 600, -7000, 500, -1000, 2000, 9000],
  Interestrate: 1.5,
  pin: 2222,
  movementsDates:[
    '2024-11-18t21:31:17.178Z',
    '2020-11-18t21:31:17.178Z',
    '2021-11-18t21:31:17.178Z',
    '2022-11-18t21:31:17.178Z',
    '2012-11-18t21:31:17.178Z',
    '2023-11-18t21:31:17.178Z',
    '2019-11-18t21:31:17.178Z',
  ]
};

const account3 = {
  owner: "Vignesh Kumar",
  movements: [1200, 2250, 3600, 2700, -1800, 100, 200, -400],
  Interestrate: 1.8,
  pin: 3333,
  movementsDates:[
    '2024-11-18t21:31:17.178Z',
    '2020-11-18t21:31:17.178Z',
    '2021-11-18t21:31:17.178Z',
    '2022-11-18t21:31:17.178Z',
    '2012-11-18t21:31:17.178Z',
    '2023-11-18t21:31:17.178Z',
    '2019-11-18t21:31:17.178Z',
  ]
};

const account4 = {
  owner: "Karthik Logesh",
  movements: [800, 1500, 1000, 1700, -2800, -100, 200, 400],
  Interestrate: 1.4,
  pin: 4444,
  movementsDates:[
    '2024-11-18t21:31:17.178Z',
    '2020-11-18t21:31:17.178Z',
    '2021-11-18t21:31:17.178Z',
    '2022-11-18t21:31:17.178Z',
    '2012-11-18t21:31:17.178Z',
    '2023-11-18t21:31:17.178Z',
    '2019-11-18t21:31:17.178Z',
  ]
};
// console.log(account1.movements);
const accounts = [account1, account2, account3, account4];

// class name using the queryselector

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Functions
// using function method and the for each method for iteration process
//mov is value of the first element a and i is the index
// using conditional operator value greatere than > 0 is display deposit otherwise withdrawls
// using insert  adjacent html (after begin method)


// Functions using in 3 days and 2 days 

const formatdateMovements=function(date){

  const calcdayspassed=(date1,date2)=>
 Math.round( Math.abs(date2-date1)/(1000 * 60 * 60 *24)) ;

  const dayspassed=calcdayspassed(new Date(),date);
  console.log(dayspassed);

  const day=`${date.getDate()}`.padStart(2,0);
  const month=`${date.getMonth()+1}`.padStart(2,0);
  const year=date.getFullYear();
  return `${day}/${month}/${year}`;
  
  

} 
// Sort method 
const displaymovements = function (acc,sort=false) {
  containerMovements.innerHTML = ''; 
  // textcontent

const movs =sort ?acc.movements.slice().sort((a,b)=> a-b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date=new Date( acc.movementsDates[i]);
    const Displaydate=formatdateMovements(date)

 
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
         <div class="movements__date">${Displaydate}</div>
          <div class="movements__value">${mov}₹</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displaying BALANCE IN BANK  in the total amount in my account right side  in numbers

const calcdisplaybalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}₹`;
};

// displaying summary in bankist app  IN method

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}₹`;

  // Displaying summary OUT Method ABS method=> minus values doesnot appear in the text content
  //example:-2345rs it gives to 2345rs:

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}₹`;

  //Displaying Interest method:

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)

    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}₹`;
};

//username login Navinkumar  as 'nk' camelcase text

// /-------MAP METHOD---------/
// intial letter should be a small letter first using split method after using map method
// and the array starting value is zero we can given name[0]; using join method lowercase nk
//using arrow  function name
// using for each method to access the username in small letters // accs is the keyword for accounts

const createusernames = function usernames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createusernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displaymovements(acc);

  // Display Balance
  calcdisplaybalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
};


//Event listeners for Login method 
//if the user login it can goes to the front page without the login  
let currentAccount;
currentAccount=account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// changing dates in the front page 

// labelDate.textContent=new Date();
//     // creating dates in the front page 
    const now=new Date();
  const day=`${now.getDay()}`.padStart(2,0);
  const month=`${now.getMonth()+1}`.padStart(2,0);
  const year=now.getFullYear();
  labelDate.textContent=`${day}/${month}/${year}`;





btnLogin.addEventListener("click", function (e) {
  //Prevent default defines
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // login to nk and pass 2222 using the create account
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message

    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;


    // clear input fileds in the next bank account
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, receiver);

  if (
    amount > 0 &&
    receiver &&
    currentAccount.balance >= amount &&
    receiver ?.username !== currentAccount.username
  ) {
    // doing transfer sender account gives to minus and receiver account (+)symbol
    currentAccount.movements.push(-amount);
    receiver.movements.push(amount);

    // Add transfer date in movements

    currentAccount.movementsDates.push(new Date().toISOString());
    receiver.movementsDates.push(new Date().toISOString());

    //Update UI

    updateUI(currentAccount);
  }
});


//Request loan 

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // add loan date
    currentAccount.movementsDates.push(new Date().toISOString());
    

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

      // Close button click the account will be closed if we can clicked the button

      btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Delete");
});


// Sort button click the sort button it can be ordered by the deposit by
let sorted=false;
btnSort.addEventListener("click",function(e){
  e.preventDefault();
  displaymovements(currentAccount.movements,!sorted);
  sorted=!sorted;
});










































// /------filter method ------/

const movements = [200, 250, 600, 700, 8000, -1000, 2000, -4000];

const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

//----- Reduce method

console.log(movements);

// normal functions
// const balance=movements.reduce((acc,curr){
//   console.log(`iteration ${i} and ${acc}`);
// return acc+curr;
// },0)
// console.log(balance);

//  using arrow functions
const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance);

let balance1 = 0; // another method
for (const mov of movements) balance1 += mov;
console.log(balance1);

//Maximum number in the movements

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

//find method it cannot return an new array
//it can return the boolean values (true or false) and return the first element in array

const find = movements.find((mov) => mov < 0);
console.log(movements);
console.log(find);

const account = accounts.find((acc) => acc.owner === "Navin Kumar");
console.log(account);

const items = [
  {
    id: 1,
    bookname: "bible",
    Cost: 10000,
    id: 2,
    bookname: "Bagahavt Geetha",
    Cost: 50000,
    id: 3,
    bookname: "Geethanjali",
    Cost: 20000,
    id: 4,
    bookname: "Khuran",
    Cost: 40000,
  },
];

const afforatable = items.findIndex(function (value) {
  return value.Cost < 20000;
});

console.log(afforatable);

    //Flat method  remove the nested array and gives the flattened array values

const arr = [[1, 2, 3], 4, 5, [6, 7, 8], 9, 10];
console.log(arr.flat());

// using arrow function and map selected type movements (it will display the accountMovements )
const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);

// using flat method all the movemnets will be given for one variable .
const AllMovements = accountMovements.flat();
console.log(AllMovements);

//using reduce method  for all the movements

const overBalance1 = AllMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overBalance1);

// Simplified code for Balance  FLAT METHOD
const overBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overBalance);

// FLAT MAP METHOD
const overBalance2 = accounts
  .flatMap((acc)=>acc.movements)
  .reduce((acc,mov)=>acc+mov,0);
  console.log(overBalance2);


  // Sort Method in js  sorting of the arrays 
  const players=['Livingstone','Maxwell','Kyle Abbot','Ali']
  console.log(players.sort());

  // Numbers order wise allotment 

  console.log(movements);
  console.log(movements.sort());
  
  movements.sort((a,b)=>a+b)
  console.log(movements);

  movements.sort((a,b)=>a-b)
  console.log(movements);
  


  // Fill Method it can be overwrites the original Array 
  function func()
  {
    const arr=[1,2,55,36,100]
    arr.fill(200);
    console.log(arr);
  }
  func()
  
  //From method in js 

  const friends=['Ram','Somu','Raju','Mohan','Somu','Raju','Arjun']
const friends1 =Array.from(new Set(friends));
console.log(friends1);

console.log(Array.from([1,2,3,4],x=>x*2));



//Coding Challenge 4

// Julia and Kate are still studying dogs, and this time they are studying if dogs are 
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the 
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% 
// above and 10% below the recommended portion (see hint).

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
// the recommended food portion and add it to the object as a new property. Do 
// not create a new array, simply loop over the array. Forumla: 
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
// food, and the weight needs to be in kg)

// 2. Find Sarah's dog and log to the console whether it's eating too much or too 
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
// the owners array, and so this one is a bit tricky (on purpose) �

// 3. Create an array containing all owners of dogs who eat too much 
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
// ('ownersEatTooLittle').

// 4. Log a string to the console for each array created in 3., like this: "Matilda and 
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
// too little!"

// 5. Log to the console whether there is any dog eating exactly the amount of food 
// that is recommended (just true or false)

// 6. Log to the console whether there is any dog eating an okay amount of food 
// (just true or false)

// 7. Create an array containing the dogs that are eating an okay amount of food (try 
// to reuse the condition used in 6.)

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
// portion in an ascending order (keep in mind that the portions are inside the 
// array's objects )


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ];

//1.
  dogs.forEach(dog=>(dog.recfood=Math.trunc(dog.weight ** 0.75 * 28)));
  console.log(dogs);

  //2.
const dogSarah=dogs.find(dog=>dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah dog is eating too ${ dogSarah.curFood > dogSarah.recfood ?'much':'little'}`);
  
//3.
const ownersEatTooMuch=dogs
.filter(dog=>dog.curFood > dog.recfood)
.map(dog=>dog.owners)
.flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle =dogs
.filter(dog=>dog.curFood < dog.recfood)
.map(dog=>dog.owners)
.flat();
console.log(ownersEatTooLittle);

//4. 
 console.log(`${ownersEatTooMuch.join(' and ')}'s dogs  eat too much!`); 
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5.
console.log(dogs.some(dog=>dog.curFood===dog.recFood));

//6.
const CheckEatingdogs=dog=>dog.curFood > dog.recfood * 0.9 
  && dog.curFood < dog.recFood *1.1;
  console.log(dogs.some(CheckEatingdogs));

//7.

  console.log(dogs.filter(CheckEatingdogs));

//8. Sorted in ascending order by recfood 

const dogsorted=dogs.slice() .sort((a,b)=>a.recFood-b.curFood);
console.log(dogsorted);


// NUMBERS INIT AND DATES

//conversion 
// numbers are intrenally stored in the binary format
console.log(Number('30'));
console.log(+'30'); // it can changes in he values as a number

// parsing  this is also known as the type corecoin method little bit 

console.log(Number.parseInt('20px'));
console.log(Number.parseInt('ju20px')); // it can be a valid values

console.log(Number.parseFloat('4.1rem')); 
console.log(Number.parseInt('4.1em')); 

// checking if the value is number are not

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'))

// isfinite  checking the value number are not
//it could not use in some particular use cases

console.log(Number.isFinite(20));
console.log(Number.isFinite('120'));
console.log(Number.isInteger(20));

//MATH ROUNDING

console.log(Math.sqrt(25));
console.log(25 ** (1/2)); 
console.log(25 ** (1/3)); // cube root value taken 

// Max and minimum numbers find using function name

console.log(Math.max(20,1,23,85,100));
console.log(Math.max(20,1,23,85,'100'));
console.log(Math.max(20,1,'23px',85,100));

//Min 

console.log(Math.min(10,1,20,40,'100'));
console.log(Math.min(20,1,'5px',85,100));

console.log(Math.PI * parseFloat('10px')**2); // sqrt of the pi value 

// trunc , ceil,floor,round same as the rounded values 

// Rounding integers for numbers  

console.log( Number.parseFloat(24.9));
console.log(Math.ceil(25.9));
console.log(Math.round(26.9));
console.log(Math.trunc(29.9));
const random=(max,min)  =>(Math.random()* (max-min) +1 )+min;
console.log(random(1,20))

console.log(Math.trunc(-635.9));
console.log(Math.floor(-635.9));

//Remainder operator 

console.log(10 % 2);
console.log(5 % 4);
console.log(20 % 10);
console.log(37 % 5);

// click the balance it can change the color using the 
// spread operator function and selected balance class name 
//  divisible by 2 each second row change the color blue 

labelBalance.addEventListener('click',function(){
  [...document.querySelectorAll('.movements__row')].
  forEach(function(row,i)
  {
    //0,2,4,6....
    if( i % 2 === 0) row.style.backgroundColor='lightblue';
    //0,3,6,9....
    if( i % 3 === 0) row.style.backgroundColor='lightgreen';
  });
  
});

// BigInt operator 

console.log(2**53 -1);
console.log(Number.MAX_SAFE_INTEGER);
//It cannot be mix with the another expressions 
//we can use only the bigint values

console.log(200n/2n);
console.log(20n>5);
console.log(typeof(2n));
console.log(10n===2);

// Creating date constructor in the  bankist app
// there are 4 types available in the date method 
console.log(new Date());
console.log(new Date('Nov 20 2024 12:22:01'));
console.log(new Date (2023,1,7,4,10,3));

//date format in milli seconds 
console.log(new Date (1));
console.log((new Date ( 3 * 24 * 60 * 60 *1000 ))); // 3days 24hours 60min 60min 10000milli seconds 

//working with dates 

// const dates =new Date(2023,12,10,5,23);
// console.log(dates);
// console.log(dates.getFullYear());
// console.log(dates.getDate());
// console.log(dates.getHours());
// console.log(dates.getMinutes());
// console.log(dates.getMilliseconds());
// console.log(dates.getMonth());
// console.log(dates.toISOString());
// console.log(dates.toTimeString());

const calcdayspassed=(date1,date2)=>
  Math.abs(date2-date1)/(1000 * 60 * 60 *24) ;

  const days1=calcdayspassed(new Date(2023,2,1),new Date(2023,2,10))
  console.log(days1);
