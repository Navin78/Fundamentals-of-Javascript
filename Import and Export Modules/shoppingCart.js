//Exporting the module
console.log('Login form created');
const shipping=[10];
const cart=[];
export const shippingcart=function(quantity,product)
{
    cart.push({quantity,product});
    console.log(`${quantity} ${product} added in shippingcart`);
};

const totalprice=500;
const totalQuantity=10;
export{totalprice,totalQuantity};