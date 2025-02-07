// Задача 1: Получение данных пользователя.
// Напишите функцию, которая получает данные пользователя с 
// https://jsonplaceholder.typicode.com/users/1 и выводит их в консоль.

// async function fetchUserData() {
// 	try {
// 		const response = await fetch(
// 			'https://jsonplaceholder.typicode.com/users/1'
// 		);
// 		if (!response.ok) {
// 			throw new Error('Network response was not ok');
// 		}
// 		const user = await response.json();
// 		console.log(user);
// 	} catch (error) {
// 		console.error('Error:', error);
// 	}
// }
// fetchUserData();

// Задача 2: Отправка данных
// Создайте функцию, которая отправляет данные на сервер 
// (например, новый пост) и выводит ответ.

// async function sendPostData(title, body) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title, body, userId: 1 }),
//     });
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;
//     // Возможно, нужно вернуть ответ сервера для дальнейшего использования
//     return response;
// }

// Задача 3: Обработка ошибок.
// Напишите функцию, которая обрабатывает ошибки при запросе к несуществующему URL.

const imgExists = document.createElement('img');
imgExists.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/PNG_Test.png/477px-PNG_Test.png"

imgExists.onerror = function(a) {
  console.log('imgExists не существует');
};

const imgNotExists = document.createElement('img');
imgNotExists.src = "https://google.com/invalid/address.png"

imgNotExists.onerror = function(a) {
  console.log('imgNotExists не существует');
};



