"use strict";
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const nav = document.querySelector('.nav');

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// selecting the dom events

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector(".header");
const allsections = document.querySelectorAll(".section");
console.log(allsections);
document.getElementById(".section--1");
const allbuttons = document.getElementsByTagName("button");
console.log(allbuttons);

// inserting and deleting elements in dom events

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.innerHTML =
//   'We used cookies for improved our functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';
// header.append(message);
// message.style.color = "";
// console.log(message);

// deleting the dom elements use remove or remove child

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// styles  using the dom events

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// it will assigning the which button is set as color primary chnage into
// document.documentElement.style.setProperty("--color-primary", "lightblue");
// console.log(logo.src);

// classes attributes

// logo.classList.add('c');
// logo.classList.contains('c');
// logo.classlist.toggle('c');

const div = document.createElement("div");

div.classList.add("abc");

const value = document.createTextNode("Hello Minimalm project");

div.append("value");

console.log(div);

// smooth scrolling

const btnScrollTo = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// Creating the button using classname and the innertext
const button = document.createElement("button");

button.classList.add("container");

const textnode2 = document.createTextNode("How are you");

button.append(textnode2);

console.log(button);

//------------------------- Event propagation----------------------------------//
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   // Stop propagation
//   // e.stopPropagation();
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("CONTAINER", e.target, e.currentTarget);
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("NAV", e.target, e.currentTarget);
// });

//---------Event target -----Event delegation------page navigation-----------//

document.querySelector('.nav__links').addEventListener('click',function(e)
{
e.preventDefault();


if(e.target.classList.contains('nav__link'))
{
const id=e.target.getAttribute('href');
document.querySelector(id).scrollIntoView({
  behavior:'smooth'});
}

 
});


// ----------------DOM traversing-----------//

const h1=document.querySelector('h1');

console.log(h1.querySelector('.highlight'));
h1.closest('.header').style.backgroundColor='var(--color-primary)';
// h1.closest('h1').style.background='var(--color-tertiary)';
console.log(h1.childNodes);
h1.firstElementChild.style.color='green';
h1.lastElementChild.style.color='blue';



/// Tabbed component 

const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');

});



// Sticky navigation

const initialcords=section1.getBoundingClientRect();

// console.log(initialcords);
  
// window.addEventListener('scroll',function()
// {
//   // console.log(window.scrollY);

//   if(window.scrollY > initialcords.top) 
//   nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })

const header1=document.querySelector(".header");
const navheight=nav.getBoundingClientRect().height;

const stickynav=function(entries)
{
  const[entry]=entries;
  // console.log(entry);


if(!entry.isIntersecting)nav.classList.add('sticky');
else nav.classList.remove('sticky');
};

const header1observer= new IntersectionObserver(stickynav,{
  root:null,
  threshold:0.1,
  rootMargin:`${navheight}px`,


});
header1observer.observe(header1);



//Revealing the scroll with slow animation using API observer

const Allsections  =document.querySelectorAll('.section')
const revealsection=function(entries,observer) {
  const[entry]=entries;
  // console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionobserver= new IntersectionObserver(revealsection,
  {
   root:null,
  threshold:0.15,
  });
Allsections.forEach(function(section){
  sectionobserver.observe(section);
  section.classList.add('section--hidden');
});


// Lazy loading images 

const imgtargets=document.querySelectorAll('img[data-src]');
console.log(imgtargets);

const img=function(entries,observer)
{
  const[entry]=entries
  // console.log(entry);

  if(!entry.isIntersecting) return;

  // Replace the src with the data src 
  entry.target.src=entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');

}

 const observer=new IntersectionObserver(img,
  {
    root:null,
    threshold:0,
    rootMargin:'-100px',
  });

  imgtargets.forEach(img=>observer.observe(img));
 
//Life cycle of the DOM Events
document.addEventListener('DOMContentLoaded',function(e)
{
  console.log('DOM content loaded successfully',e);
});

window.addEventListener('beforeunload',function(e)
{
e.preventDefault();
console.log(e);
e.returnValue='';
})



