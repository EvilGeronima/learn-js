// window.alert('1')

// window.aconfirm('Как тебя зовут?')

const heading = document.getElementById('hello')

// const heading2 = document.getElementsByTagName('h2')[0]

// const heading2 = document.getElementsByClassName('heading-2')[0]

// const heading2 = document.querySelector('h2') // Всегда 1 элемент

// const heading2 = document.querySelector('heading-2') // Всегда 1 элемент

const heading2 = document.querySelector('#sup-hello')// Всегда 1 элемент

console.log(heading2)

// const heading3 = heading2.nextElementSibling

const h2List = document.querySelectorAll('h2')

console.log(h2List)

const heading3 = h2List[h2List.length - 1]
console.log(heading3)


// console.dir(heading.textContent)

setTimeout(() => {
	addStylesTo(heading, 'Выучил JS?', 'blue')
}, 1500)

setTimeout(() => {
	addStylesTo(heading2, 'А когда собираешься выучить  JS?', 'brown')
}, 3000)

setTimeout(() => {
	addStylesTo(heading3, 'Ну удачи!', 'fuchsia', '4rem')
}, 4500)



const addStylesTo = (node, text, color = 'red', fontSize) => {
	node.textContent = text

	node.style.color = color

	node.style.textAlign = 'center'

	node.style.backgroundColor = 'black'

	node.style.padding = '2rem'

	//falsy: '', undefind, null, 0, false

	if (fontSize) {
		node.style.fontSize = fontSize
	}
}
