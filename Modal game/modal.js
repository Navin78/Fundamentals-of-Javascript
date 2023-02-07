'use script';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal ');
console.log(btnsOpenModal);

// we can identify the how many elements in the btnsopenmodal

for (let i=0;i<btnsOpenModal.length;i++)
btnsOpenModal[i].addEventListener('click', function(){
    // console.log("Button Clicked ");
    
    modal.classList.remove('hidden');       // classlist identify the css properties 
    overlay.classList.remove('hidden');     // if we click it will open 


});

btnCloseModal.addEventListener('click',function(){
    modal.classList.add('hidden');             // if we click it will close 
    overlay.classList.add('hidden');
});

overlay.addEventListener('click',function(){
    modal.classList.add('hidden');             // if we click it will close 
    overlay.classList.add('hidden');
});


document.addEventListener('keydown', function(e){
     console.log(e.key);

     
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
       
       }

});