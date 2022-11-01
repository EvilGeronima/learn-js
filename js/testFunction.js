// const people = (age) => {
// 	return `Роман ${age ** 2}`
// }

// console.log(people(21))

// const peoples = [
// 	{ name: 'Роман', budget: 4200, age: 21 },
// 	{ name: 'Евгений', budget: 3500, age: 12 },
// 	{ name: 'Дмитрий', budget: 1700, age: 22 }
// ]

// const arrayBudget = (value) => {

// 	return peoples.map((person) => person.budget * value)
// }

// console.log(arrayBudget(2));

//Вернуть отфильтрованный массив в котором бюджет будет меньше 3.7к и возврат меньше 32

// const peopleFiltered = (budget, age) => {
// 	return peoples.filter((person) => person.budget <= budget && person.age < age)
// }

// console.log(peopleFiltered(3700, 32));

// Функция которая умножает бюджет на значение из пропса и потом из массива людей вернуть сумму результатов этой функции.

// const arrayBudget = (value) => {
// 	return value * 1000
// }

// const sumArray = peoples.reduce((acc, person) => {
// 	return acc += arrayBudget(person.budget)
// }, 0)

// console.log(sumArray);

const peoples = [
	{ name: "Роман", budget: 4500, age: 21 },
	{ name: "Евгений", budget: 6500, age: 12 },
	{ name: "Дмитрий", budget: 1000, age: 22 },
	{ name: "Вика", budget: 54000, age: 54 },
	{ name: "Аня", budget: 7634, age: 467 },
];

const hasLength = (value) => {
	return value.length <= 5 ? true : false
}

const allPersons = peoples
	.filter((person) => hasLength(person.name))
	.map((person) => ({ name: person.name, budget: person.budget }))
	.reduce((acc, person) => {
		return acc *= person.budget
	}, 1)

console.log(allPersons);