// //Importing the module 
// import {shippingcart,totalprice as tp,totalQuantity as tq} from './shoppingCart.js';
// console.log('Importing the module');
// shippingcart('5','apple');
// console.log(tp,tq);

// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq); this is for my coding

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);




const cart1 = [
  
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 52},
    { product: 'fried', quantity: 152},
];
let test_array =cart1;

for (let i = 0; i < test_array.length; i++){
    var cc = test_array[i].quantity ;
    console.log(cc);
}


// if(module.hot)
// {
// module.hot.accept();
// }




// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);

// state.user.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);


//Imperative in js 
const arr=[2,4,6,8,10]
const doubled=[]
for (let i=0;i<arr.length;i++)
doubled[i]=arr[i]*2;
console.log(doubled);

const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];
console.log(persons);

const person=persons;
for (let i=0;i<person.length;i++){
  const test2=person[i].lastname;
  console.log(test2);
}
