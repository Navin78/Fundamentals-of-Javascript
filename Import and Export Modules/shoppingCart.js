//Exporting the module
// console.log('Login form created');
// const shipping=[10];
// const cart=[];
// export const shippingcart=function(quantity,product)
// { this my coding 
//     cart.push({quantity,product});
//     console.log(`${quantity} ${product} added in shippingcart`);
// };

// const totalprice=500;
// const totalQuantity=10;
// export{totalprice,totalQuantity};


// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}