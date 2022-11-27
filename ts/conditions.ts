const testingTS: Test = {
	a: {
		// b: {
		// 	c: 'abcd'
		// }
		b: null
	}
}

// if (!!testingTS.a && !!testingTS.a.b && !!testingTS.a.b.c) {
if (!!testingTS?.a?.b?.c) {
	console.log('yes we have')

} else {
	console.log('Ничего нет')

}



type Test = {
	a: {
		b?: { c: string } | null
	}
}

