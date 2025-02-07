// Условие: Написать функцию, которая принимает массив чисел и выполняет следующие операции:

// Находит среднее арифметическое четных элементов
// let arr = [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// let count = 0;
// let summ = 0;
// for(let i = 0;i<arr.length; i++){
// if(arr[i] % 2 == 0){ /*проверка на четность (кратно 2)*/
// count += 1; /* количество чётных цифр*/
// summ += arr[i]; /*сумма чётных цифр*/
// }
// }
// let itog = summ / count; // Выводим среднее - делим сумму на количество.
// console.log(itog);

// Возвращает новый массив без отрицательных чисел
// let arr = [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// let result = arr.filter(item => item > 0);
// console.log(result);

// Вычисляет сумму элементов, кратных 3
// let arr = [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// let summ = 0;
// for(let i = 0;i<arr.length; i++){
// if(arr[i] % 3 == 0){ /*проверка кратно ли 3*/
// summ += arr[i]; /*сумма цифр кратных 3-м*/
// }
// }
// console.log(summ);

// Найти элемент, наиболее близкий к среднему арифметическому массива
// let arr = [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// let arrLength = arr.length; /* узнаем длину массива*/
// let summ = 0; /* вводим изначальную сумму массива*/
// for(let i = 0;i<arr.length; i++)
// summ += arr[i]; /*сумма цифр массива*/
// let average = summ / arrLength; /* среднее арифметическое массива*/
// let blizkoAverage = average < 0 ? arr.filter(cur => cur < average)[0] : arr.filter(cur => cur > average)[0];
// console.log(average);
// console.log(blizkoAverage);

// Вычислить сумму элементов между первым и последним нулевыми элементами
// let arr = [-4,-3,-2,-1,0,1,2,3,4,5,0,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// let firstZero = arr.indexOf(0);
// let lastZero = arr.lastIndexOf(0);
// let summ = 0;
// for(let i = firstZero + 1; i < lastZero; i++) {
//     summ += arr[i];
// }
// console.log(summ); // 15

// Выполнить сдвиг массива на n элементов вправо, пустые элементы заполнить каким-либо значением
// let styles = [`Джаз`, `Блюз`];
// styles.push(...styles.slice(0, Math.floor((styles.length - 1) / 2)));
// styles.unshift(`Рэп`, `Регги`);
// console.log(styles);

// Найти максимальное количество подряд идущих одинаковых элементов
// let styles = [`Джаз`, `Блюз`,`Блюз`,`Блюз`,`Рэп`,`Рэп`,`Регги`,`Блюз`];
// let maxCount = 1;
// let currentCount = 1;
// for (let i = 1; i < styles.length; i++) {
//     if (styles[i] === styles[i - 1]) {
//         currentCount++;
//     } else {
//         maxCount = Math.max(maxCount, currentCount);
//         currentCount = 1;
//     }
// }   
// maxCount = Math.max(maxCount, currentCount);
// console.log(maxCount); // 3



