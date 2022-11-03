const person = {
	myName: 'Roman',
	age: 21,
	isProgrammer: true,
	languages: ['ru', 'en', 'de'],
	// 'complex key': 'Complex Value',
	// ['key_' + (1 + 3)]: 'Computed Key', // key_4
	greet() {
		console.log('greet from person');
	}
}

// console.log()

// console.log(person.name)
// const ageKey = 'age'
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person)
// person.greet()

// person.age++
// person.languages.push('by')
// console.log(person)

//person['key_4'] = undefined

// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])

// const name = person.name
// const age = person.age
// const languages = person.languages

// const { myName, age: personAge = 10, languages } = person

// console.log(myName, personAge, languages)

// console.log(person)

// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 		console.log('key:', key)
// 		console.log('value:', person[key])
// 	}
// }

// Object.keys(person).forEach((key) => {
// 	console.log('key:', key)
// 	console.log('value:', person[key])
// })
// console.log(keys)

// Contex