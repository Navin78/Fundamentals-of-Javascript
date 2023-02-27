'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getcountrydata=function(country){
const request=new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
request.send();
// console.log(request.responseText);

request.addEventListener('load',function(){
   const [data] =JSON.parse(this.responseText);
   console.log(data);

   const html= `
   <article class="country">
        <img class="country__img" src="${data.flags}" />
        <div class="country__data">
        <h3 class="country__name">${data.altSpellings[1]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/10000000).toFixed(1)}population</p>
        <p class="country__row"><span>🗣️</span>${data.capital}</p>
        <p class="country__row"><span>💰</span>${data.borders}</p>
        </div>
   </article>`;

   countriesContainer.insertAdjacentHTML('beforeend',html);
   countriesContainer.style.opacity=1;  

    
});
};

getcountrydata('Portugal');   
getcountrydata('USA');

// const user=fetch('https://restcountries.com/v3.1/name');
// console.log(user);

// const cart=["pants","Dhoties","Shirt","tracks"];
// createorder(cart)
// .then(function(orderid){
//     console.log(orderid);
// })

// function createorder(cart)
// const pr=new Promise(function(resolve,reject){
//     if(!validatecart(cart)){
//         const err=new Error('cart is empty');
//         reject(err);
//     }
//     const orderid="12345";
//     if(orderid){
//       setTimeout(function(){
//          resolve(orderid);
//     },5000);
//     }
// })

const whereAmI = function(lat,lang){
   fetch('https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key')
   .then(res=>res.api_key())
   .then(data=>{
      console.log(data);
   });

};

// whereAmI(52.508,13.381);
navigator.geolocation.getCurrentPosition(
   position=>console.log(position),
   error=>console.log(error)
);

const dego= function(lat,lang)
{
   fetch()
}

console.log();

const format = async function(){
   const res=await fetch('https://restcountries.com/v3.1/name/India');
   const data=await res.json();
   console.log(data);
};
format();

