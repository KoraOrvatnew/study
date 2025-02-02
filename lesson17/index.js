// const pTextId = document.getElementById(`text`);
// // console.log(pText);
// // const pTextClass = document.getElementsByClassName(`text`);
// // console.log(pTextClass);
// // const pTag = document.getElementsByTagName(`p`);
// // console.log(pTag);
// // const pQuery = document.querySelector(`.c3`);
// // console.log(pQuery);
// // const pQueryAll = document.querySelectorAll(`.text`);
// // console.log(pQueryAll);

// // pTextId.innerText = `new text`;
// // setTimeout (() =>{
// //     pTextId.innerText = `new inner Text`;
// //     pTextId.style.color = `red`;
// //         },
// //          2000);
// // setTimeout (()=>{
// //     pTextId.textContent = `new textContent`;
// //     pTextId.classList.add(`p-style`)
// // }, 
// // 4000);
// // setTimeout (() =>{
// //     pTextId.innerHTML =`new innerHTML`;
// //     pTextId.classList.remove(`p-style`);
// // }, 
// //   6000);

// const helloBtn = document.querySelector(`#hello`)
// // helloBtn.onclick = () =>{
// //     alert(`Hello`)
// // };
// helloBtn.addEventListener(`click`,(event)=>{
//     alert(event.target.id);
// });

// const inputText = document.querySelector(`#inp-text`);
// inputText.addEventListener(`change`,() => {
//     console.log(inputText.value);
    
// });
// // window.addEventListener(`mousemove`, event =>{
// //     console.log(event.clientX,event.clientY);
    
// // });

// // const addMouse = document.querySelector(`#add-mouse-move`);
// // const addRemoveMouse = document.querySelector(`#remove-mouse-move`);
// // addMouse.onclick = () => {
// //     window.addEventListener(`mousemove`,LogMousePosition);

// // }

// // addRemoveMouse.onclick = () => {
// //     window.removeEventListener(`mousemove`,LogMousePosition);
// // }

// // function LogMousePosition (event) {
// //     console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    
// // };
// const list = document.querySelector('ul');
// const addItem = document.querySelector('#add-button');
// const removeItem = document.querySelector('#remove-button');

// addItem.onclick = () => {
//   const newItem = document.createElement('li');
  
//   newItem.innerText = 'New Item';
//   list.appendChild(newItem);
// };

// const items = [`Item 1`,`Item 2`,`Item 3`];
// items.forEach (item => {
//     const newItem = document.createElement(`li`);
//     newItem.innerText = item;
//     list.appendChild(newItem);
// });

const divItems = document.querySelector (`.items`)