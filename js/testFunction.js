// const people = (age) => {
// 	return `Роман ${age ** 2}`
// }

// console.log(people(21))

const peoples = [
	{ name: 'Роман', budget: 4200, age: 21 },
	{ name: 'Евгений', budget: 3500, age: 12 },
	{ name: 'Дмитрий', budget: 1700, age: 22 }
]

// const arrayBudget = (value) => {
// 	return peoples.map((person) => person.budget * value)
// }

// console.log(arrayBudget(2));

//Вернуть отфильтрованный массив в котором бюджет будет меньше 3.7к и возврат меньше 32

// const peopleFiltered = (budget, age) => {
// 	return peoples.filter((person) => person.budget <= budget && person.age < age)
// }

// console.log(peopleFiltered(3700, 32));