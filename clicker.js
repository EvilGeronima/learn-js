const button = document.querySelector('button')

const span = document.querySelector('.spanStyle')
let i = 0


button.style.width = '400px'
button.style.height = '50px'
button.style.fontSize = '20px'

button.addEventListener('click', () => {
	i += 1
	span.textContent = i
})


