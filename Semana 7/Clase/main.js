const nodoPadre = document.getElementById("nodoPadre")
const nodosHijos = document.getElementsByClassName("className")
const nodoTag = document.getElementsByTagName("div")
const nodoAPartirDeQuery = document.querySelector(".eventos input")
const nodosAPartirDeQuery = document.querySelectorAll(".eventos input")



console.dir(nodoPadre)

const arrayDeNodos = Array.from(nodosHijos)
const arrayDeNodosTag = Array.from(nodoTag)
const arrayNodosAPartirDeQuery = Array.from(nodosAPartirDeQuery)

console.log(arrayDeNodos)
console.log(arrayDeNodosTag)
console.log(nodoAPartirDeQuery)
console.log(arrayNodosAPartirDeQuery)


// nodoPadre.innerHTML += "<h1>Hola soy nacho</h1>"
// nodoPadre.children[7].innerText = "Ya no soy nacho"

// nodoPadre.className += " fondoRojo"

// let edad = parseInt(prompt("¿Cuantos años tenes?"))

// nodoPadre.classList.add("fondoRojo")


//Aguante ClassList

// nodoPadre.innerHTML = `<div>
//     <h2>${productosLibreria[0].nombre}</h2>
//     <p>${productosLibreria[0].categoria}</p>
//     <p>$ ${productosLibreria[0].precio}</p>
// </div>`

// productosLibreria.forEach((el)=> {
//     nodoPadre.innerHTML += `<div>
//     <h2>${el.nombre}</h2>
//     <p>${el.categoria}</p>
//     <p>$ ${el.precio}</p>
//     <img src="${el.img}"/>
// </div>`
// })




const tijeras = document.getElementById("Tijeras")
console.log(tijeras)
let nombre = "Nacho"

const boton = document.getElementById("click")
const botonUp = document.getElementById("clickUp")
const botonDown = document.getElementById("clickDown")
const input = document.getElementById("input")
const change = document.getElementById("change")
const submit = document.getElementById("form")

// boton.addEventListener("click", ()=>{
// productosLibreria.forEach((el)=> {
//     const divPadre = document.createElement("div")
//     const nombre = document.createElement("h2")
//     const categoria = document.createElement("p")
//     const precio = document.createElement("p")

//     if(el.nombre == "Tijeras"){
//         divPadre.id = "Tijeras"
//     }

//     nombre.innerText = el.nombre
//     categoria.innerText = el.categoria
//     precio.innerText = el.precio

//     divPadre.appendChild(nombre)
//     divPadre.appendChild(categoria)
//     divPadre.appendChild(precio)

//     nodoPadre.appendChild(divPadre)
// })
// })


boton.addEventListener("click", (e)=>{
    console.dir(e)
    productosLibreria.forEach((el)=> {
        const divPadre = document.createElement("div")
        const nombre = document.createElement("h2")
        const categoria = document.createElement("p")
        const precio = document.createElement("p")
    
        if(el.nombre == "Tijeras"){
            divPadre.id = "Tijeras"
        }
    
        nombre.innerText = el.nombre
        categoria.innerText = el.categoria
        precio.innerText = el.precio
    
        divPadre.appendChild(nombre)
        divPadre.appendChild(categoria)
        divPadre.appendChild(precio)
    
        nodoPadre.appendChild(divPadre)
    })
})

botonUp.addEventListener("mouseup", ()=>{
    console.log("Se solto el mause")
})

botonDown.addEventListener("mousedown",()=>{
    console.log("Se apreto el mause")
} )

// input.addEventListener("keydown", ()=>{
//     console.log("se apreto un boton")
// })

// input.addEventListener("keypress", ()=>{
//     console.log("se apreto un boton")
// })

input.addEventListener("keyup", (e)=>{
    e.target.parentNode.parentNode.childNodes[1].innerText = e.target.value
})

change.addEventListener("change", (e)=>{
    e.target.parentNode.childNodes[1].innerText = e.target.value
})

submit.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(e.target[0].value == ""){
        alert("No pusiste nada en el formuario")
    }
    console.dir(e.target[0].value)
    e.target[0].parentNode.parentNode.childNodes[1].innerText = e.target[0].value
})