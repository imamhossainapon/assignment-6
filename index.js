let categories_section = document.getElementById('adopt')


let view = ()=>{
    categories_section.classList.remove('hidden');

}

// main function
let load_all_data = async()=>{
console.log('load_all_data');
    let promise =  await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    let category = await promise.json()


   display_catagory(category.categories)

   
}



//  function 2
let display_catagory =(data)=>{
console.log(data);
    let categories_section1 = document.getElementById('card-4')
    // spiner(data)
let two_item = data.slice(0,2)



two_item.sort((a,b) => b.category.localeCompare(a.category))


two_item.forEach((item) => {


// console.log(item);
let div = document.createElement('div');

div.classList ="flex"
div.innerHTML =`
<button  id="btn-${item.category}"   onclick="pet_click('${item.category}')" class="btn flex items-center remove-btn"><img class="w-10 mr-4 " src="${item.category_icon}" alt=""> ${item.category}</button>

`

categories_section1.append(div)

});


let remaining_item = data.slice(2)

remaining_item.forEach((item) => {
// console.log(item);
let div = document.createElement('div');

div.classList ="flex px-2"
div.innerHTML =`
<button id="btn-${item.category}"   onclick="pet_click('${item.category}')"  class="remove-btn btn flex items-center"><img class="w-8 " src="${item.category_icon}" alt=""> ${item.category}</button>

`

categories_section1.append(div)
    
  });
}


// function_3


let load_dog_card = async(r)=>{

    let promise =  await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    let category = await promise.json()

// console.log(category);
let x = category.pets



dog_card (x);


   
}


// function_4

let dog_card = (cards)=>{
// 
let card_section = document.getElementById('card_mama')
card_section.innerHTML ="";
if(cards.length == 0){
    card_section.classList.remove('grid')
    card_section.innerHTML =`

    <div class="min-h-screen flex flex-col justify-center items-center gap-4 ">
    <img src="./images/error.webp" alt="">
<h1 class="text-center text-xl font-bold text-yellow-50">No Information Available</h1>
<p class="text-center text-yellow-50">It is a long established fact that a reade will be distracted by the readable content ofr <p class="text-white"> a page when looking at
    its layout. The point of using</p> Lorem Ipsum is that it has a. </p></p>

    </div>
    `;
    return;
}
else{
    card_section.classList.add('grid')
}

cards.forEach((card)=>{
  
    // console.log(card);
let card2 = document.createElement('div')
card2.classList ="card-body shadow-2xl p-2 rounded-lg" 
card2.innerHTML =`
 <div>
        <div class="card-body shadow-2xl rounded-lg text-white bg-[#aca89d] ">
            <img  src="${card.image ?card.image:'N/AV'  }" alt="">

      <h1>${card.pet_name?card.pet_name:'N/AV'}</h1>

      <p><span class="mr-2"><i class="fa-solid fa-folder-tree"></i></span>Breed:${card.breed?card.breed:'N/AV'}</p>

        <div class="flex gap-1 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
          </svg>
          Birth: ${card.date_of_birth?card.date_of_birth:'N/Av'} </div>
         <p><span class="mr-2"><i class="fa-solid fa-mars-stroke"></i></span>Gender:${card.gender?card.gender:'N/AV'}</p>
          
         <p><span class="mr-2"><i class="fa-solid fa-dollar-sign"></i></span>price: ${card.price?card.price:'N/AV'}  </p>
        </div>

          <div class="flex items-center justify-between mb-5 w-[100%] mx-auto mt-6">
            <div class="bg-white rounded-lg"><button onclick="like_show('${card.petId}')" class="py-2 font-bold text-[#2bcdc8]   lg:px-6 px-2 shadow-lg rounded-lg"><i class="fa-regular fa-thumbs-up"></i></button></div>

            <div class="bg-white rounded-lg"><button onclick="adopt('${card.petId}')"  class="text-[#cda72b] font-bold  py-1 px-2  lg:py-2 lg:px-4 shadow-lg rounded-lg ">Adopt</button></div>

            <div  class="bg-white rounded-lg"><button onclick="pet_details('${card.petId}')" class="text-[#0e811f] font-bold py-1 px-2 lg:py-2 lg:px-4 shadow-lg rounded-lg">details</button></div>
    </div>

</div>
   
`
card_section.append(card2 )

}
)


}

// function 4

let pet_click = async(categoryName)=>{

   
fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
.then((res)=> res.json())
.then((data)=>{
    active_remove()
    let active_button = document.getElementById(`btn-${categoryName}`)
    active_button.classList.add('Active')
    dog_card(data.data)
})
.catch((error)=> console.log(error));

    
}

// active button style

let active_remove =()=>{
let remove_btn = document.getElementsByClassName("remove-btn")
for(let btn of remove_btn) {
    
    btn.classList.remove("Active");

    let spinner =document.getElementById('spinner')

    spinner.classList.remove('hidden');
  

    setTimeout(()=>{
        
        
        spinner.classList.add('hidden');
    },2000);
}
}
// all pet card fetch

let pet_details = async( pet_details)=>{

let u = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${pet_details}`)
let data = await u.json()

details_show(data)

// 
}

// all pet card

let details_show =(data)=>{
// console.log(data);

let pet = data.petData
    let modal_div =document.getElementById('modal_div')
    modal_div.innerHTML =`
<div class="flex flex-col justify-center items-center">
 <img src="${pet.image ?pet.image:'N/AV'  }" alt="">
      <h1 class="text-xl font-bold">${pet.pet_name?pet.pet_name:'N/AV'}</h1>
      <p><span class="mr-2"><i class="fa-solid fa-folder-tree"></i></span>Breed:${pet.breed?pet.breed:'N/AV'}</p>
        <div class="flex gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
          </svg>
          Birth: ${pet.date_of_birth?pet.date_of_birth:'N/Av'} </div>
         <p><span class="mr-2"><i class="fa-solid fa-mars-stroke"></i></span>Gender:${pet.gender?pet.gender:'N/AV'}</p>
          
         <p><span class="mr-2"><i class="fa-solid fa-dollar-sign"></i></span>price: ${pet.price?pet.price:'N/AV'}  </p>
        </div>

        <div class="w-[90%] mx-auto shadow-lg rounded-lg p-2">
        <p>${pet.pet_details}</p>
        </div>
    `  
document.getElementById('customModal').showModal()

}

// like clicker and image add
 
let like_show = async (petId) => {
let pet_img =document.getElementById('pet_img')

let response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)

let data = await response.json()

let pet = data.petData
let div=document.createElement('div');
div.classList =" w-full "
div.innerHTML=`
 <img class="mb-3 rounded-lg lg:mb-1 bg-[#aca89d] p-3"  src="${pet.image ?pet.image:'N/AV'}" alt="">
`
pet_img.append(div)
}

// adopt fetch

let adopt = async(adopt_details)=>{
    let u = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${adopt_details}`)
    let data = await u.json()

    adopt_show(data)
}


// adopt timer show

let adopt_show =(data)=>{

    document.getElementById('my_modal_3').showModal();
    let seconds =3;

    let countdown = setInterval(() => {
        if(seconds > 0){
            seconds--;
            secondsElement.style.setProperty('--value',seconds )
        }
        else{
            clearInterval(countdown);
        }
    }, 3000);
    let secondsElement =document.getElementById('seconds');
    secondsElement.textContent = seconds;
    clearInterval(window.countdown);
window.countdown =setInterval(() =>{
    seconds--;
    secondsElement.textContent =seconds;
    if (seconds <=1) {
        clearInterval(window.countdown)
    
        document.getElementById('my_modal_3').close();
        
    }

},1000)

}
// all pet sort clicker

    let short_price =document.getElementById('short_price').addEventListener('click',function(){

        let spinner =document.getElementById('spinner')

        spinner.classList.remove('hidden');

        setTimeout(()=>{
            load_pet_card()
            spinner.classList.add('hidden');
        },2000);
     
    });
    
    //   all pet sort

let load_pet_card = async(r)=>{

    let promise =  await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    let category = await promise.json()
// console.log(category);
let x = category.pets
let cards =category.pets
cards.sort((a,b)=> b.price - a.price)
dog_card (x);  
}






let etc = ()=>{

    let spinner2 =document.getElementById('spinner2')

        spinner2.classList.remove('hidden');
    setTimeout(()=>{
        load_dog_card()
    spinner2.classList.add('hidden');
   
},2000);}

load_all_data ()
etc()