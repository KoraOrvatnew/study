// const arr = [13, 214, 224, 666, 1321];
// let max = arr [0];
// let min = arr [0];
// for (let i = 1; i < arr.length; i++){
//     if (arr[i] > max) {
//         max = arr [1];

//     }
//     if (arr[i] < min) {
//         min = arr [1];

//     }
// }
// console.log(max);
// console.log(min);


// function hello(name) {
//     console.log(`Hello ${name}`);
//     }
    
//     function input (callback) {
//          const name = prompt (`Введите имя`);
//          callback(name);
//     }

// input (hello);


// function AtoB(nextPoint) {
//     const transport = `bus`;
//     const friend = `Jo`;
//    nextPoint(transport, friend);
// }
// function BtoC(transport, friend) {
//     console.log(`travalling whith ${friend} on ${transport}`);  
// }
// AtoB(BtoC);

// const createPlayer = (initialScore) => {
//     let score = initialScore; // Приватная переменная**
//         return {
//         getScore: function() {    
//     return score;
//         },
//         addScore: function(amount) {
//         score += amount;
//      }
//      };
    
//     }
//     const player1 = createPlayer(100);
//     console.log(player1.getScore()); // 100
//     player1.addScore(50);
//     console.log(player1.getScore()); // 150

const arr = [31, 456, 554, 12, 15, 45, 446];
// const resultSome = arr.some(el => el % 3 === 0);
// const resultSome2 = arr.some (function(el)
// {
//  return el % 3 === 0   
// }
// )
// let res = false;
// for (let i = 0; i < arr.length; i++) {
//     if (f(arr[i]) === true) {
//         break
//     }

// }
//    function f (element) {
//     return element % 3 ===0
//    }
// //    console.log(resultSome2);
//    console.log(res);
   


// const resultEvery = arr.every (el => el > 0);
// console.log(resultEvery);


// const resultFilter = arr.filter (ell => el %3 === 0);
// console.log(resultFilter);

// const resultSort = arr.sort();
// console.log(resultSort);

// const flatArr = [[1, 2,3],[5,6],[7,8,9]];
// const flatArr = toFlatArr.flat();
// console.log(flatArr);

// const resultForEach = arr.forEach(el => el * 2);
// console.log(resultForEach);

// const resultMap = arr.map (el => el * 2);
// console.log(resultMap);

// const flatMatArr = [[2],[4], [9], [7], [9]];
// const resultFlatMap = flatMatArr.flatMap(el => el * 8);
// console.log(resultFlatMap);

const sum = arr.reduce((acc, el) => acc + el, 0);
console.log(sum);

 