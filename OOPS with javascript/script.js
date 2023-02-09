'use strict';
// Instance method 
const Person=function(Name,Age)
{
this.Name=Name;
this.Age=Age;
}
const navin=new Person('Navinkumar',18);
console.log(navin);

//1.New {} is created
//2.function is called ,this={}
//3.{} linked a prototype 
//4.function automatically return

const some = new Person('Navinkumar',9360154574);
const more = new Person ('Nishvanth',9655822571);
console.log(navin instanceof Person);  // instance will return either true or false

