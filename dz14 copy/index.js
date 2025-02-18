// Напишите функцию isPrime(n), которая проверяет, является ли число n простым.
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
  
//   function printPrimes(limit) {
//     for (let i = 2; i <= limit; i++) {
//       if (isPrime(i)) {
//         console.log(i);
//       }
//     }
//   }
  
//   // Выведем все простые числа до 20
//   printPrimes(20);

// Напишите функцию isPalindrome(str), 
// // которая проверяет, является ли строка палиндромом 
// Вариант 1.
// function palindrome(str) {
//     let check = '';
//     for (let i = str.length - 1; i >= 0; --i) {
//       check += str[i];
//     }
//     return str == check;
//   }
//   console.log(palindrome('шалаш'));
//   console.log(palindrome('а роза упалана лапу азора'));
//   console.log(palindrome('311113'));

// Вариант 2.
// function isPalindrome(str) { 
//     const cleaned = str.replace(/\s+/g, '').toLowerCase();/* Удаляем все пробелы и приводим строку к нижнему регистру*/ 
//     const reversed = cleaned.split('').reverse().join(''); /*Разворачиваем очищенную строку */
//     return cleaned === reversed;  /*Сравниваем оригинальную очищенную строку с её перевёрнутой версией*/ 
//   }    
// console.log(isPalindrome("Шалаш")); 
// console.log(isPalindrome("А роза упалана лапу азора")); 
// console.log(isPalindrome("311113")); 

// Создайте функцию uniqueValues(arr), 
// которая возвращает новый массив с уникальными значениями 
// из исходного массива arr.
// const cloudeServises = ['PaaS', 'DaaS', 'IaaS', 'PaaS', 'DaaS'];
// const uniqueServises = new Set(cloudeServises);
// console.log(Array.from(uniqueServises)); 


// Напишите функцию sumRange(start, end), 
// которая возвращает сумму всех целых чисел от start до end.

// function sumRange(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   console.log(sumRange(1, 10)); // 55

// Напишите функцию, которая принимает целое число, обозначающее длину массива. 
// Заполните этот массив случайными целыми числами от 0 до 100.
// Выведите в консоль получившийся массив. 
// Затем найдите и выведите в консоль максимальное значение, минимальное значение, сумму всех элементов и среднее арифметическое значение элементов в массиве.
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
//   }
//   let arr = [];
//   for (let i = 0; i < 100; i++) {
//     arr.push(getRandomInt(0, 100));
//   } 
//   console.log(arr); /*получившийся массив*/
//   console.log(Math.max(...arr)); /*максимальное значение*/
//   console.log(Math.min(...arr)); /*минимальное значение*/
//   console.log(arr.reduce((a, b) => a + b, 0)); /*сумма всех элементов*/
//   console.log(arr.reduce((a, b) => a + b, 0) / arr.length); /*среднее арифметическое значение*/
  
//   Напишите функцию, которая принимает целое число n, обозначающее длину массива. 
// Создайте массив длиной n, заполненный последовательностью Фибоначчи, начиная с чисел 0 и 1. 
//   function fibonacci(n) {
//     let fibArr = [0, 1];
//     while (fibArr.length < n) {
//       fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
//     }
//     return fibArr;
//   }
//   console.log(fibonacci(10)); 

// Напишите функцию, которая принимает любую строку и выводит в консоль массив, 
// содержащий только те символы, которые встречаются в строке только один раз.

// function uniqueChars(str) {
//     let charCount = {};
//     let uniqueChars = [];
//     for (let char of str) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     for (let char in charCount) {
//         if (charCount[char] === 1) {
//             uniqueChars.push(char);
//         }
//     }
//     return uniqueChars;
// }
// console.log(uniqueChars('шалаш')); 
