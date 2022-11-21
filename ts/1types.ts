const str: string = 'Hello'

console.log(str)


const isFetchng: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const nubmerArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const nubmerArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript']

//Tuple
const contact: [string, number] = ['Roman', 1234567]

//Any
let variable: any = 42
// ...
variable = 'New String'
variable = []

//---------------------------------------------//

function sayMyName(name: string): void {
	console.log(name)
}

sayMyName('Хайзенберг')