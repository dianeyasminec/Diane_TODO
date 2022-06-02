//1. Select All our element

const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')
//2.when i submit the form add a new element

form.addEventListener('submit', e =>{
    e.preventDefault()

   //Create a new element 
   const item = document.createElement('div')
   item.innerText = input.value
   item.classList.add('list-item')
//    console.log(item)

   // add the item to the list
   list.appendChild(item)

   //clear input after we add items
   input.value = ''

   // remove item add 
   item.addEventListener('click', () =>{
       item.remove()
   })
})
 