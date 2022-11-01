// 1 Функции

// Function Declaration
// function greet(myName) {
// 	console.log('Привет -', myName);
}

// Function Expression
// const greet2 = function greet2(myName) {
// 	console.log('Привет 2-', myName);
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet);
// console.dir(greet)



// 2 Анонимные функции

// let counter = 0
// const interval = setInterval(function () {
// 	if (counter === 5) {
// 		clearInterval(interval)
// 	} else {
// 		console.log(++counter);
// 	}
// }, 1000)



// 3 Стрелочные функции

function greet(myName) {
	console.log('Привет -', myName);
}

const arrow = (myName, age) => {
	console.log('Привет -', myName, age);
}

const arrow2 = myName => {
	console.log('Привет -', myName);
}

arrow2('Роман')

const pow2 = num => {
	return num ** 2
}

const pow3 = num => num ** 2

console.log(pow2(5));



// 4 Параметры по умолчанию
// const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(41, 4));
// console.log(sum());

// function sumAll(...all) {
// 	let result = 0
// 	for (let num of all) {
// 		result += num
// 	}
// 	return result
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res);



// 5 Замыкание

// function createMember(myName) {
// 	return function (lastName) {
// 		console.log(myName + lastName);
// 	}
// }

// const logWithLastName = createMember('Роман')

// console.log(logWithLastName('Тройченко'));
// console.log(logWithLastName('Иванов'));