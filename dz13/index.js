// 1. Создайте массив с дубликатами и напишите код, 
// который удаляет все дубликаты, оставляя только уникальные значения. 
// Выведите новый массив в консоль.

// let cloudServices = [`IaaS`,`PaaS`,`SaaS `,`DRaaS`,`BaaS`,`PaaS`,`IaaS`];
// let uniquecloudServicesNew = [...new Set(cloudServices)];
// console.log(uniquecloudServicesNew); // `IaaS`,`PaaS`,`SaaS `,`DRaaS`,`BaaS`]

// 2. Создайте переменную с числом и используйте цикл для вычисления его факториала.

// function factorial(n) {
//     return n?n*factorial(n-1):1;
//   }
//     console.log(factorial(3));

// function factorial(n){
//     let result = 1;
//     while(n){
//         result *= n--;
//     }
//     return result;
// }
// console.log(factorial(5))

// 3.Создайте переменную с годом и используйте условие для проверки, 
// является ли этот год високосным. 
// Выведите соответствующее сообщение в консоль.

// let date = new Date(2025, 2, 0);
// if (date.getDate() == 29) {
// 	console.log('високосный');
// } else {
// 	console.log('обычный');
// }

// 4. Создайте массив и используйте цикл для подсчета 
// количества вхождений каждого элемента. 
// Выведите результат в консоль.

// const cloudServices = [`IaaS`,`PaaS`,`SaaS `,`DRaaS`,`DRaaS`,`DRaaS`,`BaaS`,`PaaS`,`IaaS`];
// const count = new Map();
// cloudServices.forEach(Services => count.set(Services, (count.get(Services) || 0) + 1));
// for (const [key, value] of count.entries()) {
//   console.log(`${key}: ${value}`);
// }

// 5. Создайте объект с несколькими свойствами.
// Напишите код для подсчета количества свойств в этом объекте. 
// Выведите результат в консоль.

// let somebody = {     // объект
//     name: `Helen`, // свойство 1
//     age: `30`, // свойство 2
//     gender: `femail`, // свойство 3
//     city: `Minsk`, // свойство 4 
//   };
//   let localKeys = Object.keys(somebody);
//   let keyCount = localKeys.length;
//   console.log(Object.keys(somebody)); /*(4) ['name', 'age', 'gender', 'city']*/

// 6. Создайте массив объектов пользователей с именем и возрастом. 
// Используйте цикл для создания нового массива, 
// содержащего только пользователей старше определенного возраста. 
// Выведите новый массив в консоль.

// let users = [
//     {age: 17, name: `Вася`},
//     {age: 9, name: `Петя`},
//     {age: 21, name: `Маша`},
//     {age: 35, name: `Катя`},
//     {age: 68, name: `Захар`},
//   ];
//   let usersMoreThan = users.filter(user => user.age > 18);
//   console.log(usersMoreThan);    
  
// 7. создать массив, заполнить его случайными числами от 0 до 100, 
// чтобы длина массива была равна 10
// random = Math.floor(Math.random() * 101)
// 101- максимальное число рандома, не включительно

// let array = []
// for (let i = 0; i < 10; i++) {
//     array.push(-100 + Math.random() * ((100 - (-100)) + 1))
// };
// console.log(array)

// 8.Дана произвольная строка. разверните ее используя цикл for

// function reverseString(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//   }
//   return reversed;
// }
// const newStr = reverseString('мама мыла милу мылом');
// console.log(newStr);
