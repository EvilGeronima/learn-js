// 1 Переменные

// const firstName = 'Roman' //string
//const lastName = 'Troychenko'
//  const age = 20 //number
// const isProgrammer = true //boolean

// const _ = 'private'
// const $ = 'some value'

//const if = 'make if' // err
// const withNum5 = 5
//const 5withNum = 5 // err

//  2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)


// const LastName = prompt('Введите фамилию')
// alert(firstName + ' ' + LastName)

// 3 Операторы
// let currentYear = 2022
// const birthYear = 2001

//const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// c += a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(--currentYear)

// console.log(c)

// 4 Типы данных

// const isProgrammer = true
// const name = 'Roman'
// const age = 20

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)

// 5 Приоритет операторов

// const fullAge = 21
// const birthYear = 2001
// const currentYear = 2022

// const isFullAge = (currentYear - birthYear) >= fullAge
// console.log(isFullAge)

// 6 Условные операторы

// const courseStatus = 'pending'

// if (courseStatus === 'ready') {
// 	console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
// 	console.log('Курс пока находится в разработке')
// } else {
// 	console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
// 	console.log('Все готово')
// } else {
// 	console.log ('Все не готово')
// }

// Тернарное выражение
// isReady ? console.log('Все готово') : console.log('Все не готово')

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 === num2)

// 7 Булевая логика

// 8 Функции

// function calculateAge(year) {
// 	return 2022 - year
// }


// console.log(calculateAge(2001))

// function logInfoAbout(name, year) {
// 	const age = calculateAge(year)

// 	if (age > 0) {
// 		console.log('Человек по имени ' + name + ' сейчас имеет возвраст ' + age)
// 	} else {
// 		console.log('Вообще то это уже будущее')
// 	}

// }
// logInfoAbout('Роман', 2001)

//  9 Массивы

//  const cars = ['Мазда', 'Мерседес', 'Киа']
// const cars = new Array('Мазда', 'Мерседес', 'Киа')

//  console.log(cars[1])
// console.log(cars.length)

// cars[0] = 'Порш'
//cars[cars.length] = 'Мазда'
// console.log(cars)

//  10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Киа']

// for (let i = 0; i < cars.length; i++) {
// 	const car = cars[i]
// 	console.log(car)
// }

//  for (let car of cars) {
//  	console.log(car)
//  }

// 11 Объекты
// const person = {
// 	firstName: 'Roman',
// 	lastName: 'Troychenko',
// 	year: 1993,
// 	languages: ['Ru', 'Eng'],
// 	hasWife: false,
// 	greet: function () {
// 		console.log('greet from person')
// 	}
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// person['isProgrammer'] = true
// console.log(person)

// person.greet()