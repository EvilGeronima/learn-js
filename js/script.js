// Массивы

const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
// function addItemToEnd {

// }

// Method
// cars.push('Рено') // Добавляем в конец

// cars.unshift('Волга') // Добавляем в начало

// const firstItem = cars.shift() // Удаляет первый элемент
// const lastItem = cars.pop() // Удаляет последний элемент

// console.log(firstItem)
// console.log(lastItem)
// console.log(cars)

// console.log(cars);
// console.log(cars.reverse());

// const index = cars.indexOf('БМВ')
// cars[index] = 'Порш'
// console.log(cars)


// Массив объектов

// const people = [
// 	{ name: 'Роман', budget: 4500 },
// 	{ name: 'Евгений', budget: 6500 },
// 	{ name: 'Дмитрий', budget: 1000 }
// ]

// let findedPerson

// for (const person of people) {
// 	if (person.budget === 6500) {
// 		findedPerson = person
// 	}
// }
// console.log(findedPerson)



// const index = people.findIndex(function (person) {
// 	return person.budget === 6500
// })

// const person = people.find(function (person) {
// 	return person.budget === 6500
// })

// console.log(person)

// const person = people.find(person => person.budget === 6500)

// console.log(person)

// console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map(car => {
// 	return car.toUpperCase()
// })

// console.log(upperCaseCars)
// console.log(cars)


// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// const pow2Fib = fib.map(pow2)
// const filteredNumvers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumvers)

// console.log(pow2Fib)


const people = [
	{ name: 'Роман', budget: 4200 },
	{ name: 'Евгений', budget: 3500 },
	{ name: 'Дмитрий', budget: 1700 }
]

const allBudget = people.reduce((acc, person) => {
	if (person.budget > 2000) {
		acc += person.budget
	}
	return acc
}, 0)


const allBudget = people.filter(person => person.budget > 2000).reduce((acc, person) => {
	acc += person.budget
	return acc
}, 0)

console.log(allBudget);





// Задача 1

// const text = 'Привет, мы изучаем JS'
// const reverseText = text.split('').reverse().join('')

// console.log(reverseText)