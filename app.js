// const numero = valor => (`El valor es: ${valor}`)


// const resultado = numero(30)

// console.log(resultado)

//OBJETOS
// const mascota = {
// 	nombre: 'Tom',
// 	edad: 3,
// 	comidas:[
// 		"pescado"
// 	]
// }

// console.log(mascota)

//DESTRUCTURING

const Web = {
	webmasters: "Nelson Ek",
	Link:{
		url:'http://google.com',
		nombre: 'master.con',
		edad: 4,
	}

}

const {webmasters,Link} = Web

console.log(Link.url)
