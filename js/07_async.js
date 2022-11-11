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
			console.log('test2')
			resolve('сижу') // Удачная выполнение
			reject('Что то пошло не так. Повторите попытку') // Ошибка
		}, wait)
	})
	return promise
}

delay(2500)
	.then((sit) => console.log('After 2,5 seconds', sit))
	.catch(err => console.error(err))
	.finally(() => console.log('Finally'))

console.log('test1')


const getData = () => new Promise(resolve => resolve([
	1, 1, 2, 3, 5, 8, 13
]))

getData().then(data => console.log(data))

const asyncExample = async () => {

	try {
		await delay(3000)
		const data = await getData()
		console.log('Data', data)
	} catch (err) {
		console.log(err) // мы ее обрабатываем
	} finally {
		console.log('Finally');
	}
}

asyncExample()