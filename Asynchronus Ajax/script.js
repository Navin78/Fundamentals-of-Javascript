'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/name/India');
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
        <p class="country__row"><span>👫</span>${(+data.population/10000000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.symbol}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
        </div>
   </article>`;

   countriesContainer.insertAdjacentHTML('beforeend',html);
   countriesContainer.style.opacity=1;  

    
});