let addButton = document.getElementById("addToDo");
let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");

addButton.addEventListener("click",function(){
   console.log(inputField.value); 
   let paragraph = document.createElement("p");
   paragraph.classList.add("paragraph-styling");
   paragraph.innerText = inputField.value;   
   
   toDoContainer.appendChild(paragraph);

   paragraph.addEventListener("click",function(){
     paragraph.style.textDecoration = "line-through";                         
   });

   paragraph.addEventListener("dblclick",function(){
     toDoContainer.removeChild(paragraph);                         
   });


})