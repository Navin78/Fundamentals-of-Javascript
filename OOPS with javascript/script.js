'use strict';
// Instance method 
// const Person=function(Name,Age)
// {
// this.Name=Name;
// this.Age=Age;
// }
// const navin=new Person('Navinkumar',18);
// console.log(navin);

//1.New {} is created
//2.function is called ,this={}
//3.{} linked a prototype 
//4.function automatically return

// const some = new Person('Navinkumar',9360154574);
// const more = new Person ('Nishvanth',9655822571);
// console.log(navin instanceof Person);  // instance will return either true or false

// console.log(navin.__proto__);
// console.dir(Person.prototype.constructor);

// ES6 Classes 

class PersonCl {
    constructor(firstname,birthyear){
    this.firstname=firstname;
    this.birthyear=birthyear;
}
calcage(){
console.log(2023-this.birthyear);
}
getage(){
    console.log(2023-this.birthyear);
}
}

const rocky=new PersonCl('Navin',2002);
console.log(rocky);
rocky.calcage();
rocky.getage();


// classes are not hoisted
//classes are the first -class citizes
//Classes are executed in the strict mode

// Getters and Setters 


// object.create 
    

// Inheritance between ES6 classes 

// extends is the keyword which using in the ES6
// super is also a keyword is to make in the Es6 
class StudentCl extends PersonCl{
    constructor (firstname,birthyear,course){
        super(firstname,birthyear);
        this.course=course;
    }

introduce(){
    console.log(`My name is ${this.firstname} and my birthyear is ${this.birthyear} and I studying ${this.course}`);
};
}
const partha = new StudentCl('Partha',2022,'Commerce');
partha.introduce();


// ES6 classes in the Inheritance classes using object .create

// class Student1Cl extends PersonCl{
//     constructor(firstname)
// }








