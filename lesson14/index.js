// let str = "SOME random stRinG!";

// const arr = str.split (" ");
// console.log(arr);
// arr[1] = arr[1].toUpperCase();
// console.log(arr);
// str = arr.join();
// console.log(str);

// function sayHi(username){
//     console.log("Hello World!");
       
// }
// sayHi();
// sayHi();
// sayHi();

// function sayHi(username){ НЕ РАБОТАЕТ 
//     console.log('Hello, ${username}!');
       
// }
// sayHi('aLENA');
// sayHi();
// sayHi();

// function sum(a, b) {
//     console.log("a+b=", a + b);
// }
//     sum (10, 20);
//     sum (154, 110);


    // function sum(a, b, c) {
    //     console.log("a+b*c=", a + b);
    // }

    // sum (10, 20, 3);
    // sum (20, 10, 3);
    // sum (3, 20, 10);

// function f (a,...rest) {
//     console.log(a);
//     console.log(rest);
    
//     // console.log(arguments);
    
    
// }
// f(1,2,35,5,45);

// function f (...rest) {
   
//     console.log(rest);
//     console.log(...rest);
    
    
    // console.log(arguments);
    
    
// }
// f(1,2,35,5,45);

// function sum(a, b) {
//     return a + b;
// }
//     console.log(sum (1,2));

 
// const sumVar = sum (4,5);
// console.log(sumVar);

// const sum = function (a,b) {
//     return a + b;
// }
// console.log(sum(1,2));

// const sum = (a, b = 0) => a + b
// console.log(sum(2));
// console.log(sum(2, 10));

    

// (function () {
//     console.log("Hi");
    
// })()

// let str = 'qwErty'

// function strUp (str) {

//     let arr = str.split('')
//     console.log(arr);
    

//     for (let i = 0; i < arr.length; i++) {

//         if (i%2===0) {
//             arr[i] = arr[i].toLowerCase()
//         } else {
//             arr[i] = arr[i].toUpperCase()
//         }

//     }

//     return arr.join('') 
    
// }

// str = strUp (str)

// console.log(str);

// const people = [
//     { name: "John", age: 20 },
//     { name: "Jane", age: 16 },
//     { name: "Jessica", age: 25 },
//   ];
//   function isAdult(arr) {
//     const names = [];
  
//     for (const element of people) {
//       if (element.age > 18) {
//         names.push(element.name);
//         // console.log(element.name);
//       }
//     }
//     return names
//   }
//   console.log(isAdult(people));
  
//   isAdult(people);



let x = 0;
for (let i = 0; i < num.length; i++) {
  x = x + Number(num[i]);
}
console.log(`Сумма всех цифр числа: ${x}`);