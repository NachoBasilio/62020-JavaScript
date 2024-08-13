const URL = "https://pokeapi.co/api/v2/pokemon?"
const main = document.getElementById("main")
const carrito = document.getElementById("carrito")
const carritoIcono = document.getElementById("carritoIcono")
const carritoGrande = document.getElementById("carritoGrande")
const terminarCompra = document.getElementById("terminarCompra")
const botonesGeneraciones = document.querySelectorAll(".botonesGeneracion button")
const total = document.getElementById("total")
const botonesArrayGeneraciones = Array.from(botonesGeneraciones)

let Carrito = JSON.parse(localStorage.getItem("carritoPKM")) || []

const selectorDeGeneraciones = (gen) => {
    switch(gen) {
        case "Gen 1":
            return `${URL}limit=151&offset=0`
        case "Gen 2":
            return `${URL}limit=100&offset=151`
        case "Gen 3":
            return `${URL}limit=135&offset=251`
        case "Gen 4":
            return `${URL}limit=107&offset=386`
        case "Gen 5":
            return `${URL}limit=156&offset=493`
        case "Gen 6":
            return `${URL}limit=72&offset=649`
        case "Gen 7":
            return `${URL}limit=88&offset=721`
        case "Gen 8":
            return `${URL}limit=96&offset=809`
        case "Gen 9":
            return `${URL}limit=105&offset=905`
        case "Megas":
            return `${URL}limit=60&offset=1057`
        case "Pikachus":
            return `${URL}limit=70&offset=1104`
        default:
            return `${URL}limit=151&offset=0`
    }
};


const loader = ()=>{
    main.innerHTML = `<div id="main" class="loading-container">
        <div class="loading-spinner">
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
        </div>
    </div>`
}

const actualizarCarrito = () => {
    carrito.innerHTML = "";
    Carrito.forEach(el => {
        carrito.innerHTML += `
            <div class="PokemoEnCarrito">
                <h3>${el.nombre}</h3>
                <p>$${el.precio}</p>
                <img src="${el.img}" />
                <h4>${el.cantidad}</h4>
            </div>
        `
    })
    total.innerText ="$ " + Carrito.reduce((acc, el) =>{
        return acc + el.cantidad * el.precio
    },0)
    localStorage.setItem("carritoPKM", JSON.stringify(Carrito))
}

carritoIcono.addEventListener("click", () => {
    carritoGrande.classList.toggle("mostrarCarrito");
})

const agregarAlCarrito = (pokemon) => {
    const pokemonEnCarrito = Carrito.find(el => el.id === pokemon.id)

    if (pokemonEnCarrito) {
        pokemonEnCarrito.cantidad += 1;
    } else {
        Carrito.push({
            nombre: pokemon.name,
            id: pokemon.id,
            img: pokemon.sprites.front_default ,
            precio: pokemon.base_experience,
            cantidad: 1
        })
    }

    actualizarCarrito()
};

const creadoraDePokemon = (pokemon) => {
    const container = document.createElement("div")

    container.classList.add("container")

    container.innerHTML = `
        <img src="${pokemon.sprites.other.home.front_default || pokemon.sprites.front_default}" />
        <h2>${pokemon.name}</h2>
        <div class="containerTipos">
            <p class="tipo ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</p>
            ${pokemon.types[1] ? `<p class="tipo ${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</p>` : ""}
        </div>
        <p>$${pokemon.base_experience}</p>
        <button class="BotonCompra">Comprar</button>
    `;

    main.appendChild(container)

    const boton = container.querySelector(".BotonCompra"); //Query Selector tambien se puede usar en nodos que no sean Document. Asi puedo agregar el evento al boton.

    boton.addEventListener("click", () => {
        agregarAlCarrito(pokemon)
        Swal.fire({
            title:"Su producto ya esta en el carrito ✅",
            imageUrl:"https://media.tenor.com/8rWROBsE5IgAAAAM/meowth-crying.gif",
            showConfirmButton: false,
            position: 'bottom-end',
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            imageAlt: "Un pokemon feliz porque agrego un producto al carrito",
            background: "#dfb9b9"
        })
    });
};


const llamadoraDePokemon = async (url) => {
    try {
        let result = await fetch(url)
        let data = await result.json()
        let urls = data.results.map(pkm => pkm.url);
        llamarDeAUno(urls)
    } catch (error) {
        console.error(error)
    }
};


const llamadoraDePokemonMegas = async (url) => {
    try {
        let result = await fetch(url)
        let data = await result.json()
        let urls = data.results.map(pkm =>{
            console.log(pkm.name)
            if(pkm.name.includes("mega")){
                return pkm.url
            }
        })
        const urlsLimpios = urls.filter(el => el != undefined)

        llamarDeAUno(urlsLimpios)
    } catch (error) {
        console.error(error)
    }
};

const llamadoraDePokemonPikachu = async (url) => {
    try {
        let result = await fetch(url)
        let data = await result.json()
        let urls = data.results.map(pkm =>{
            console.log(pkm.name)
            if(pkm.name.includes("pikachu")){
                return pkm.url
            }
        })
        const urlsLimpios = urls.filter(el => el != undefined)

        llamarDeAUno(urlsLimpios)
    } catch (error) {
        console.error(error)
    }
};

const llamarDeAUno = async (array) => {
    try {
        const arrayDePromesas = await Promise.all(array.map(async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }));
        main.innerHTML = ""
        arrayDePromesas.forEach(pkm => {
            creadoraDePokemon(pkm)
        });
    } catch (error) {
        console.error(error)
    }
};

terminarCompra.addEventListener("click", ()=>{
    if(Carrito.length === 0){
        Swal.fire({
            title:"No hay nada en su carrito",
            imageUrl: "https://31.media.tumblr.com/1676579f0e294fc1e1658be30ee431f4/tumblr_mn0w0r6DRG1r3ifxzo1_500.gif",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true
        })
    }else{
        Swal.fire({
            title:"Gracias por su compra",
            imageUrl: "https://i.gifer.com/Iyom.gif",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true
        })
    }
    Carrito = []
    actualizarCarrito()
})


botonesArrayGeneraciones.forEach((el)=>{
    el.addEventListener("click", (e)=>{
        loader()
        if(e.target.innerText === "Megas"){
            llamadoraDePokemonMegas(selectorDeGeneraciones(e.target.innerText))
        }else if(e.target.innerText === "Pikachus"){
            llamadoraDePokemonPikachu(selectorDeGeneraciones(e.target.innerText))
        }
        else{
            llamadoraDePokemon(selectorDeGeneraciones(e.target.innerText))
        }
        console.log(selectorDeGeneraciones(e.target.innerText))
    })
})


document.addEventListener("DOMContentLoaded", ()=>{
    actualizarCarrito()
})