let arr = [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0,20,21,22,23,24]; /*массив для заданий*/
function getArithmeticMean(){ /* Находит среднее арифметическое четных элементов*/
let count = 0;
let summ = 0;
for(let i = 0;i<arr.length; i++){
if(arr[i] % 2 == 0){ /*проверка на четность (кратно 2)*/
count += 1; /* количество чётных цифр*/
summ += arr[i]; /*сумма чётных цифр*/
}
}
let itog = summ / count; // Выводим среднее - делим сумму на количество.
console.log(itog);
}
getArithmeticMean();

function getNewWithoutMinusMean(){ /*Возвращает новый массив без отрицательных чисел*/
let result = arr.filter(item => item > 0);
console.log(result);
}
getNewWithoutMinusMean();

function getMultiple3 (){ /* Вычисляет сумму элементов, кратных 3*/
let summ = 0;
for(let i = 0;i<arr.length; i++){
if(arr[i] % 3 == 0){ /*проверка кратно ли 3*/
summ += arr[i]; /*сумма цифр кратных 3-м*/
}
}
console.log(summ);
}
getMultiple3();

function getBlizkoAverage() { /*Находит элемент, наиболее близкий к среднему арифметическому массива*/
let arrLength = arr.length; /* узнаем длину массива*/
let summ = 0; /* вводим изначальную сумму массива*/
for(let i = 0;i<arr.length; i++)
summ += arr[i]; /*сумма цифр массива*/
let average = summ / arrLength; /* среднее арифметическое массива*/
let blizkoAverage = average < 0 ? arr.filter(cur => cur < average)[0] : arr.filter(cur => cur > average)[0];
// console.log(average);/*10/
console.log(blizkoAverage);
}
getBlizkoAverage();

function getSummBetween0(){ /*Вычисляет сумму элементов между первым и последним нулевыми элементами*/
let firstZero = arr.indexOf(0);
let lastZero = arr.lastIndexOf(0);
let summ = 0;
for(let i = firstZero + 1; i < lastZero; i++) {
    summ += arr[i];
}
console.log(summ); 
}
getSummBetween0();

let arr2 = [`Джаз`, `Блюз`]; /*новый массив*/
function moveToRightPut(){ /*Выполняет сдвиг массива на n элементов вправо, пустые элементы заполнить каким-либо значением*/
arr2.push(...arr2.slice(0, Math.floor((arr2.length - 1) / 2)));
arr2.unshift(`Рэп`, `Регги`);
console.log(arr2);
}
moveToRightPut();

let arr3 = [`Джаз`, `Блюз`,`Блюз`,`Блюз`,`Рэп`,`Рэп`,`Регги`,`Блюз`];/*новый массив*/
function numberIdenticalElements(){ /*Найти максимальное количество подряд идущих одинаковых элементов*/
let maxCount = 1;
let currentCount = 1;
for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] === arr3[i - 1]) {
        currentCount++;
    } else {
        maxCount = Math.max(maxCount, currentCount);
        currentCount = 1;
    }
}   
maxCount = Math.max(maxCount, currentCount);
console.log(maxCount); // 3
}
numberIdenticalElements()