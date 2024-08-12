const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
const main = document.getElementById("main");
const carrito = document.getElementById("carrito");
const carritoIcono = document.getElementById("carritoIcono");
const carritoGrande = document.getElementById("carritoGrande")
const terminarCompra = document.getElementById("terminarCompra")

let Carrito = [];

const actualizarCarrito = () => {
    carrito.innerHTML = "";
    Carrito.forEach(el => {
        carrito.innerHTML += `
            <div class="PokemoEnCarrito">
                <h3>${el.nombre}</h3>
                <img src="${el.img}" />
                <h4>${el.cantidad}</h4>
            </div>
        `;
    });
};

carritoIcono.addEventListener("click", () => {
    carritoGrande.classList.toggle("mostrarCarrito");
});

const agregarAlCarrito = (pokemon) => {
    const pokemonEnCarrito = Carrito.find(el => el.id === pokemon.id);

    if (pokemonEnCarrito) {
        pokemonEnCarrito.cantidad += 1;
    } else {
        Carrito.push({
            nombre: pokemon.name,
            id: pokemon.id,
            img: pokemon.sprites.front_default ,
            cantidad: 1
        });
    }
    actualizarCarrito();
};

const creadoraDePokemon = (pokemon) => {
    const container = document.createElement("div");

    container.classList.add("container");

    container.innerHTML = `
        <img src="${pokemon.sprites.other.home.front_default}" />
        <h2>${pokemon.name}</h2>
        <div class="containerTipos">
            <p class="tipo ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</p>
            ${pokemon.types[1] ? `<p class="tipo ${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</p>` : ""}
        </div>
        <button class="BotonCompra">Comprar</button>
    `;

    main.appendChild(container);

    const boton = container.querySelector(".BotonCompra"); //Query Selector tambien se puede usar en nodos que no sean Document. Asi puedo agregar el evento al boton.
    boton.addEventListener("click", () => {
        agregarAlCarrito(pokemon);
    });
};


const llamadoraDePokemon = async () => {
    try {
        let result = await fetch(URL);
        let data = await result.json();
        let urls = data.results.map(pkm => pkm.url);
        llamarDeAUno(urls);
    } catch (error) {
        console.error(error);
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
            creadoraDePokemon(pkm);
        });
    } catch (error) {
        console.error(error);
    }
};

terminarCompra.addEventListener("click", ()=>{
    Carrito = []
    actualizarCarrito()
})

llamadoraDePokemon();

document.addEventListener("DOMContentLoaded", ()=>{
    main.innerHTML = `<div id="main" class="loading-container">
        <div class="loading-spinner">
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
        </div>
    </div>`

})