// console.log(this);

// function f() {
//     console.log(this);
// }
// f();

// const obj = {
//     name: `John`,
//     age: 30,
//     greet: function () {
//         console.log(this);
//     },
// }
// obj.greet();
    
// const objArrow = {
//     name: `John`,
//     age: 30,
//     greet: () => () {
//         return this.name;
//     },
// }
// obj.greet(objArrow.greet());



// const obj = {
//     name: `John`,
//     age: 30,
//     greet: function (a = 5) {
//         console.log(`Привет, мое имя ${this.name}`);
//         console.log(a);
        
//     },
// }
// const obg2 = {
//     name: `Nick`,
//     age: 54,
//     };
//     obj.greet.bind(obg2)();
// obj.greet.bind({name: `bind`, age: 30 })();
// obj.greet.call({name: `call`, age: 30 });
// obj.greet.apply({name: `apply`, age: 30 }, [10]);


// классы
// const obj = {};
// console.log(obj);

// class Person {
//     constructor(name) {
//     this.name = name;
//     }
//     greet() {
//     console.log(`Hello, my name is ${this.name}`);
//     }
//     }
//     const alice = new Person(`Alice`);
//     alice.greet(); // Hello, my name is Alice

// class Animal {
//         constructor (name) {
            
//         this.name = name;
        
//     }
//     greet () {
//         console.log(`My name is ${this.name}`);
        
//     }
// }
// class Dog extends Animal {
// constructor(name, 8type){
//     super (name);
//     this.type = type;
// }
//     bark () {
//         console.log(`${this.type} ${this.name} barks!`);
        
        
//     }
// }

// const Rex = new Dog (`Rex`, `такса`);
// Rex.greet ();/*Меня зовут*/
// Rex.bark (); /*Рекс лает*/

// асинхронный код
// запрос на сервер 

// console.log(1);
// setTimeout(() => console.log(2), 1000);
// console.log(3);

// промис
// function fetchData() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const data = { name: 'Alice', age: 25 };
//             const error = {
//                 message: `Faild to fetch data`,
//                 code: 500,
//             }
// 			reject(error);
// 		}, 1000);
// 	});
// }

// fetchData()
// 	.then(data => {
// 		console.log(data); // { name: 'Alice', age: 25 }
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});

// 

function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = { name: 'Alice', age: 25 };
			resolve(data);
		}, 1000);
	});
}


// хранение данных на бекенде 
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

// запросы к серверу
async function postData() {
	const data = {
		title: 'foo',
		body: 'bar',
		userId: 1,
	};

	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST', // Метод запроса
			headers: {
				'Content-Type': 'application/json', // Указываем тип содержимого
			},
			body: JSON.stringify(data), // Преобразуем объект в JSON
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const result = await response.json();
		console.log('Success:', result);
	} catch (error) {
		console.error('Error:', error);
	}
}

postData();