// Event Loop

// const timeout = setTimeout(() => {
// 	console.log('After timeout');
// }, 2500)

// clearTimeout(timeout)

// const interval = setInterval(() => {
// 	console.log('After timeout');
// }, 1000)

// clearTimeout(interval)

// const delay = (callback, wait = 1000) => {
// 	setInterval(callback, wait)
// }

// delay(() => {
// 	console.log('After two seconds')
// }, 2000)

const delay = (wait = 1000) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, wait)
	})
	return promise
}

delay(2500)
	.then(() => console.log('After 2 seconds'))
	.catch(err => console.error(err))
	.finally(() => console.log('Finally'))


const getData = () => new Promise(resolve => resolve([
	1, 1, 2, 3, 5, 8, 13
]))

getData().then(data => console.log(data))

//колбэк объяснение