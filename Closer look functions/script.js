'use strict';
// Passing arguments works : values and primitives .X. Topics
// const flight='B23546';
// const rocky={
//     name:'Navin',
//     passport :'73538929036',
// };

// const checkin=function(flightnum,passenger){
//     flightnum='B23546';
//     passenger.name ='Mr .' + passenger.name;

// if(passenger.passport==='735389290360'){
//    alert(' CheckIn successsfully');
// }
//     else{
//         alert(' Wrong Password ');
//     }
//     };
//     checkin(flight,rocky)
//     console.log(flight);
//     console.log(rocky);

// const flightnum=flight;
// const passenger=rocky;

// const newpassport=function(person){
//     person.passport=Math.trunc(Math.random()*1000000000);
// };

// newpassport(rocky);
// checkin(flight,rocky);

// Callback functions in Js topics
//Inside the function there is an anthoer function to pass an argument
//parameters 1st arguments 2nd
function Userinput(callback) {
  const data = console.log("Enter the name ");
  callback(data);
}

function display(data) {
  console.log(`Name : ${data}`);
}
Userinput(display);

// anotherexample for function call

function sum(val1, val2, callback) {
  let out = val1 + val2;
  callback(out);
}
function display(out) {
  console.log(`sum:${out}`);
}
sum(100, 30, display);

//Functions returning the another functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting},${name}`);
  };
};

//calling the function using the another variable type

const greeterHey = greet("Hey");
greeterHey("navin");
greeterHey("kumar");

greet("Hey")("Man");

// using arrow functions for the above statement

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("hi")("navin");

// Call and apply methods

// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function() {
//     console.log(this.getPokeName() + 'I choose you!');
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon(); // 'Pika Chu I choose you!'

// another example for call method  (it can give as a commma operator and separately  )

const name1 = {
  firstname: "Navinkumar",
  lastname: "Developer",
};
const printfullname = function (city) {
  console.log(this.firstname + " " + this.lastname + " from " + city);
};

// Function borrowing
printfullname.call(name1, "Dharmapuri."); // call method

const name2 = {
  firstname: "Suryakumar",
  lastname: "Cricketer",
};

printfullname.call(name2, "Mumbai.");

// apply method also same type of the call method (it can declare as an array [])

const value = {
  value1: "100",
  value2: "200",
};
const allvalue = function () {
  console.log(
    "The first value is ",
    this.value1 + " " + "the second value is ",
    this.value2
  );
};
allvalue.apply(value, [value]);

// Bind Method

const printmyname = printfullname.bind(name2, "Mumbai", "canada");
printmyname();

// bind function is bind between the call and the apply function values .This is known as the bind function:

//Partial application using the bind method

// const addtax=(rate,value)=>value+value*rate ;
// console.log(addtax(10,20));

const addtaxrate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addvat2 = addtaxrate(0.23);
console.log(addvat2(100));
console.log(addvat2(23));

// coding challenge 1
const poll = {
  questions: "what is the programming language used?",
  options: ["0: C++", "1:Java", "2:python", "3:angular"],

  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.questions} \n ${this.options.join("\n")}
               (Write option number)`
      )
    );
    console.log(answer);

    // poll.registerNewAnswer();
    //2. register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
  },
};


// Immediately invoking Function expressions (IIFE);
// once the function is declared we can give their () brackets and to give their result
const runonce=function(){
    console.log('This is the javascript process');
}
runonce();


//IIFE

(function(){
    console.log('This is the example type of javascript');
})();

//IIFE using arrow function:
  (()=> console.log('My favourite cricketer is MSD '))
  ();

  //Closure functions in js 

  function myfunction(){
    const a=4;
    console.log(a*a);
  }
  myfunction();


  //closure example 1
  let f;
  const g =function(){
    const a = 4;
    f=function(){
      console.log(a*2);
    }
  }

  const h=function(){
    const b=144;
    f=function(){
      console.log(b*4);
    }
  }


  g();         // g variable closure is 4;
  f();

  console.dir(f) 

  //Reassigning function f it can gives the parent of the f
  h();         // h variable closure is 144;
  f();
  // closure example 2


  (function(){
    const header=document.querySelector('h2')
    header.style.color='red';
    document.querySelector('body').addEventListener('click', function(){
      header.style.color='green'
    }
    )
  })();  // immediately invoked function ();

