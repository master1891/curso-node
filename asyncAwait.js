// fetch("https://pokeapi.co/api/v2/pokemon")
// .then(res => res.json())
// .then(data =>{
// 	data.results.forEach(element => {
// 		console.log(element)
// 	});
// })
// .catch(error => {
// 	console.log(error)
// })

const pokemones = async () =>{
	try{
		const res = await fetch("https://pokeapi.co/api/v2/pokemon")
		const data = await res.json()
		
		let nombres = []

		// data.results.forEach(element => {
		// 	nombres.push(element.name)
		// });
		
		// let names = data.results.map(element => element.name)
		// console.log(names)

		let bulbasour = data.results.filter(pokemon => pokemon.name !='bulbasaur' )
		console.log(bulbasour)

	}catch(error){
		console.log(error)
	}
}

pokemones()