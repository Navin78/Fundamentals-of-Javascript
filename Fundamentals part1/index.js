// alert("This is my favourite programming language");
// console.log("Navinkumar");

// let name = "navin";
// let msg = "hello" + name + "learning javascript";
// console.log(msg);

// let x = "10";
// let y = "20";

// let result = x * y;

// console.log(result);

// let name1 = "navin";
// number = "naviikumar";
// console.log(number);

//13 / 10 / 2022

// variables and convention//

// let variable = "hari";
// variable = "hariharan";
// let msg1 = "variable";z
// console.log(variable);

// let country = "India";
// let continent = "Asia";
// let population = "2,00,00,000";

// console.log(country);
// console.log(continent);
// console.log(population);

// // datatypes in js//
// // string

// let javascriptIsFavauorite = "navin";
// console.log(javascriptIsFavauorite);
// console.log(typeof javascriptIsFavauorite);

// // number or integer

// //  let age=100;
// //  console.log(typeof age);

// //boolean

// let Firstproject = true;
// Firstproject1 = "yes";
// console.log(typeof Firstproject1);

// let year;
// console.log(typeof year);
// console.log(typeof null);

// //Variables of javascript//

// var name = "hair";
// color = "red";

// let name1 = "hair";
// name1 = "color";

// // Basic Operations

// const age = 200;
// const navin = age - 50;
// const ram = age - 100;
// console.log(navin, ram);
// console.log(navin * 2, ram * 100);

// //division
// let average = 100;
// let nishnath = average / 100;
// console.log(nishnath);

// //addition
// let firstName = "Java";
// let lastName = "Script";

// console.log(firstName + " " + lastName);

// Assignment

//let x1 = 10 + 200;
//x1 += 10;
//x1 *= 10;
// x1/= 5;
//console.log(x1);



// // Arithmetic
// let number = 100;
// let number1 = 200;
// console.log(number + number1);

// // increment
// console.log(++number1);
// console.log(number++);
// //
// const now = 2037;
// const harish = now - 1991;
// const subbu = now - 2018;
// console.log(now-1991 > now-2018);

let name = "navinkumar";
let name1 = "hari";
let result = "name,name1";
console.log(name1, name);

let x = 100;
let y = 200;
result = x + y;
console.log(result);

// string Literals  this is very touch one too assign another way is Template literals

const firstName = "GpMuthu";
const age = 45;
const place = "udangudi";
const job = "Youtuber";

// const muthu= "I'm " + firstName + ', ' +age +' years old'+   ' ,favourite ' + job;
// console.log(muthu);

// template literals easy way to analayse

const muthu = `I'm ${firstName} from ${place} my age is ${age} and myjob ${job}`;
console.log(muthu);

let number = 200;
let number1 = 500;
let result1 = number + number1;
console.log(result1);

let number2 = `first number ${number}  
second number ${number1}  
result ${number + number1}`;
console.log(number2);

console.log(`navinkumar
joined episode technologies
in this month`);

// Conditional statements
let variable = 20;
let variable1 = 30;

if (variable > variable1) {
  console.log("The condition will be true");
} else {
  console.log("The condition will be false");
}

// type conversion type coreion

var object = String(3.14);
console.log(typeof object);
console.log(object);

var conversion = Boolean("");
console.log(typeof conversion);
console.log(conversion);

//truthy falsy values
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean("true"));
console.log(Boolean(0));
console.log(Boolean("navin"));

// Because it is a falsy values
let height = null;
if (height) {
  console.log("The height is different");
} else {
  console.log("The height is indifferent");
}

//Equality operator 

const ages = "18";
if (ages === 18) console.log("The condition will be true");

if (ages == 18) console.log("the condition will false");

// difference betweeen this operator
let value = 1;
console.log("1" == 1); // lose  equality operator first value is important if we assign the 1st value as string it takes another operand will  also assign string (==)

console.log(1 === 1); // strict operator both operands are equal it will become  true (===)

//  let variable4=prompt("this is normal company")

console.log(!true); //not
console.log(true && true); //and
console.log(false || false); // or

let color = "blue";
let defaultcolor = "orange";
let CurrentColor = color || defaultcolor;
console.log("selected : " + CurrentColor);

//switch statements

let grade = "D";

switch (grade) {
  case "A":
    console.log("Super Grade");
    break;

  case "D":
    console.log("Avearage grade");
    break;

  case "E":
    console.log("Fail");
    break;

  default:
    console.log("waste for degree");
}

// terneray Operator 

// let fruit = Apple ;


// let type= fruit === Apple ? "Apple is selected" : "orange is selected ";
// console.log(type);

let agee= 23;


let typee= agee > 18 ? "Adult is selected": "Child is selected"
console.log(typee);



// *************  Important******************//
// Functions in Javascript

function fruits( name ){
  console.log( name + ' is my' +' ' + 'favourite' +' ' +'fruit');
}

//invoking a function
fruits('Apple');
fruits('oranges');




// Another example for function


function fruitProcessor(mango, guava){
  // console.log(mango,guava);
  let juice=`Juice with ${mango} mangoes and ${guava} guavas `;
 return juice;

}

//invoking
                                           
 let mangojuice=fruitProcessor(10,20);
  console.log(mangojuice);

 let guavajuice= fruitProcessor(5,10);
   console.log(guavajuice);


// another example for Function 

   function multiple(name,number,address){

    const data=`My Name is ${name} mobile number ${number} 
    and my native place is ${address}`;
     return data;
   }

   const data=multiple('navin',9360154574,'dharmapuri');
   console.log(data);

  // function Declaration and Expressions

  // function decalarations 
 let no =200;
 let no1=700;

// function expressions
  const addNo1= function addNo1(){
  let final=no + no1;
  console.log(final);
  };

  //Anonyomous function

  const addNo2= function (){
    let final=no + no1;
    console.log(final);
    };
  

  addNo2();



  // Arrow functions we need to understand the concept by udemy course
  // simply we can use the arrow function

  let sub=(num1,num2) => num1 + num2;
  let res=sub(5,-6)
console.log(res);

// if statements 
a=10
if (10 < a) {
  console.log('success');
}else{
    console.log('failed')
}

// functions
function execution(name2){
  

  const data1=`${name2} is the process of good learning for full stack development `;
  return data1 ;
}
const data1=execution('javascript');
console.log(data1);
// Function expression

let add=function(num3,num4)
{
  return num3/num4;
}
let decision=add(100,300);
console.log(decision);

// another example for function expressions 

let adding=function (n1,n2){
  return n1+n2;}
let subt=function (n1,n2){
  return n1-n2;}
var restt=adding(5,7) + subt(7,5);
console.log(restt);




let sum = (num1,num2) => 
{
    if(num1>0 && num2>0)
    {
        return (num1+num2)
    }
    else{
        return ("enter positive numbers")
    }
}
console.log(sum(5,6));



// function and  arrow function

// let numbering=function(a,b)
// {
//   return a+b;
// }
// alert(numbering('navin','kumar'))


// arreow function

let subtra=(num1,num2) => num1+ num2;

alert(subtra(100,300));
