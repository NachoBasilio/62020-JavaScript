const URL = "https://pokeapi.co/api/v2/pokemon?limit=1000"
const URL2 = "https://pokeapi.co/api/v2/pokemon"
const main = document.getElementById("main")


// setInterval(() => {
//     console.log("Interval")
// }, 1000)


// try {
// console.log(1)

// setTimeout(() => {
// console.log(2)
// }, 5000);

// throw new Error("Hola")

// console.log(3)

// } catch (error) {
//     console.error("El error es: ")
// } finally {
//     console.log("Soy un finally, ya nadie me usa")
// }

const creadoraDePokemon = (pokemon) => {
    console.log(pokemon.types[0].type.name)
    main.innerHTML += `<div class="container">
        <img src="${pokemon.sprites.other.home.front_default}" />
        <h2>${pokemon.name}</h2>
        <p class= "containerTipos ${pokemon.types[0].type.name}"> ${pokemon.types[0].type.name} </p>
        
        ${pokemon.types[1] ? `<p class=" containerTipos ${pokemon.types[1].type.name}"> ${pokemon.types[1].type.name} </p>` : ""}
    </div>`
}

const llamadoraDePokemon = async () => {
    let result = await fetch(URL)
    let data = await result.json()
    let urls = data.results.map(pkm => pkm.url)



    llamarDeAUno(urls)
}

const llamarDeAUno = async (array) => {
    try {
        const arrayDePromesas = await Promise.all(array.map(async (url) => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }))

        arrayDePromesas.forEach(pkm => {creadoraDePokemon(pkm)})
    } catch (error) {
        console.error(error)
    }
}

llamadoraDePokemon()

const unPokemon = async (nombre) => {
    try{
        let result = await fetch("https://pokeapi.co/api/v2/pokemon/" + nombre)
        let data = await result.json()
        creadoraDePokemon(data)
        console.log(data)
    }catch(error){
        console.log("El pokemon que busca no existe")
    }
}
