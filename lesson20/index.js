// // // const obj = {
// // //     obg[1] =  `number`;
// // //     obg[1] =  `string`; 
// // // }
// // // console.log(obg);
// // // const map = new Map();

// // // // map.set(1, 'number');
// // // //  map.set(1, 'string');
// // // //  console.log(map);
// // // //  console.log(map.get(1));
// // // //  console.log(map.has(1));
// // // //  console.log(map.size);
// // // //  map.delete(`1`);
// // // //  map.clear();

// // // // map.forEach((value, key, map)=>{
// // // //     console.log(`value`,value);
// // // //     console.log(`key`, key);
// // // //     console.log(`map`,map);
     
// // // // });
 
// // // // const arr = []
// // // // arr.push(1);
// // // // arr.push(1);
// // // // arr.push(1);
// // // // console.log(arr);

// // // // const set = new Set();

// // // // set.add(1);
// // // // set.add(1);
// // // // set.add(1);

// // // // console.log(set);

// // // // console.log(set);
// // // // console.log(set.has(1));

// // // // set.forEach((value, key, set) =>{
// // // //     console.log(`value`,value);
// // // //     console.log(`key`, key);
// // // //     console.log(`set`,set);
// // // // });

// // // document.querySelector(a).addEventListener(`click`, event =>{
   
// // //     event.preventDefault();
// // //   console.log(event.target.href);
  
// // // })


// // document.querySelector(`html`).addEventListener (`click`, event => {
// //     console.log(`html`);
    
// // });

// // document.querySelector(`#parent`).addEventListener(`click`, event =>{
// //     console.log(`parent`);
// // });

// // document.querySelector(`#child-1`).addEventListener(`click`, event =>{
// //     event.stopPropagation();
// //     console.log(`child-1`);
// // });

// // document.querySelector(`#child-2`).addEventListener(`click`, event =>{
// //     console.log(`child-2`);
// // });

// document.querySelector(`.question`).onclick = event => {
//     event.stopPropagation();
//     // console.log(event.target.nodeName);
//     const li = event.target.nodeName;
//     if (li.nodeName !== `LI`) {
//         return;
//         if (li.getAttribute (`data-a` === `c`)) {
//             li.classList.add(`correct`);
//         } else{
//             li.classList.add(`wrong`);
//         }
                              
//                 }
//             }
        
// const message = "JavaScript is a fun programming language.";
// const exp = /programming/;
// let result = message.match(exp);
// console.log(result); // ['programming', index: 20, input: 'JavaScript is a fun programming language.', groups: undefined]

// const string = "I am learning JavaScript not Java.";
// const re1 = /Java/g;
// let result1 = string.match(re1);
// console.log(result1); // ['Java', 'Java']

// const str = “Hello, world!”;
// const pattern = /Hello/;
// if (pattern.test(str)) {
// console.log(“Строка содержит ‘Hello’);
// } else {
// console.log(“Строка не содержит ‘Hello’);
// }

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    }
    console.log(validateEmail(`example@example.com`)); // true
    console.log(validateEmail(`invalid_email`)); // false
