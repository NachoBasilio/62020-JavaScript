const productosLibreria = [
    {
        id: 1,
        nombre: 'Cuaderno',
        precio: 2.50,
        categoria: 'Papeleria',
        stock: 100
    },
    {
        id: 2,
        nombre: 'Lápiz',
        precio: 0.50,
        categoria: 'Papeleria',
        stock: 200
    },
    {
        id: 3,
        nombre: 'Bolígrafo',
        precio: 1.20,
        categoria: 'Papeleria',
        stock: 150
    },
    {
        id: 4,
        nombre: 'Borrador',
        precio: 0.30,
        categoria: 'Papeleria',
        stock: 300
    },
    {
        id: 5,
        nombre: 'Resaltador',
        precio: 1.00,
        categoria: 'Papeleria',
        stock: 75
    },
    {
        id: 6,
        nombre: 'Mochila',
        precio: 20.00,
        categoria: 'Accesorios',
        stock: 50
    },
    {
        id: 7,
        nombre: 'Regla',
        precio: 0.80,
        categoria: 'Papeleria',
        stock: 120
    },
    {
        id: 8,
        nombre: 'Tijeras',
        precio: 2.00,
        categoria: 'Papeleria',
        stock: 90
    },
    {
        id: 9,
        nombre: 'Pegamento',
        precio: 1.50,
        categoria: 'Papeleria',
        stock: 60
    },
    {
        id: 10,
        nombre: 'Calculadora',
        precio: 15.00,
        categoria: 'Electronica',
        stock: 30
    },
    {
        id: 11,
        nombre: 'Pegamento',
        precio: 1.20,
        categoria: 'Papeleria',
        stock: 60
    },
];

let mensaje = ""
let bandera = true
let carrito = []

function test(producto, cantidad){
    if((producto > 0 && producto < productosLibreria.length) && (!isNaN(cantidad) && cantidad > 0)){
        if(productosLibreria[producto - 1].stock > cantidad){
            return false
        }else{
            alert("No tenemos esa cantidad de producto")
            return true
        }
    }else{
        alert("Dale flaco, no seas asi")
        return true
    }
}

function compraLogica() {
    productosLibreria.forEach((el) => {
        mensaje += el.id + " - " + el.nombre + "\n"
    })

    let producto = parseInt(prompt("Los productos para comprar son los siguientes: \n" + mensaje))
    let cantidad = parseInt(prompt("¿Cuanto quiere?"))
    let bandera = true

    while(bandera){
        bandera = test(producto, cantidad)
        if(bandera){
            producto = parseInt(prompt("Los productos para comprar son los siguientes: \n" + mensaje))
            cantidad = parseInt(prompt("¿Cuanto quiere?"))
        }
    }

    if(carrito.some(el => el.id === producto)){
        let objetoCarrito = carrito.find(el => el.id === producto)
        objetoCarrito.stock = objetoCarrito.stock + 1
    }else{
        let productoCarrito = {
            nombre: productosLibreria[producto - 1].nombre,
            precio: productosLibreria[producto - 1].precio,
            stock: cantidad,
            id: productosLibreria[producto - 1].id
        }
        carrito.push(productoCarrito)
        productosLibreria[producto - 1].stock = productosLibreria[producto - 1].stock - 1
    }
}

function mostrarCarrito() {
    let productosEnElCarrito = carrito.map(el => el.nombre)
    let stringNombresCarrito = productosEnElCarrito.join("\n")

    let total = carrito.reduce((acc, el) => {
        return acc + el.precio * el.stock
    },0).toFixed(2)

    alert("Su carrito tiene: \n" + stringNombresCarrito + "\n" + "El total de compra es: " + total)
}

function logicaFiltrado(){
    let categoria = prompt("¿Que categoria quiere ver?").toLowerCase()

    let arrayFiltrado = productosLibreria.filter(el => {
        return el.categoria.toLowerCase().includes(categoria)
    })

    let arrayDeNombres = arrayFiltrado.map(el => el.nombre)

    let stringNombres = arrayDeNombres.join("\n")

    alert("Los productos de la categoria que busca son: \n" + stringNombres + "\n")
}

alert("Hola, bienvenido a Atenea Libreria")

while(bandera){
    let opciones = parseInt(prompt("¿Que quiere hacer?\n 1-Comprar\n 2-Filtrar\n 3-Salir"))
    switch(opciones){
        case 1:
            compraLogica()
            break
        case 2:
            logicaFiltrado()
            break
        case 3:
            bandera = !confirm("¿Esta seguro de que quiere salir?")
            break
        default:
            alert("Elige bien...")
    }
}

mostrarCarrito()





//Teoria:

// const porCadaUno = (array, funcion) => {
//     for (let i = 0; i < array.length; i++) {
//         funcion(array[i]);
//     }
// }

// const mostradoraDeProductos = (producto) => {
//     console.log(producto.nombre)
// }


// porCadaUno(productosLibreria, (producto) => {
//     console.log(producto.nombre)
// })


// productosLibreria.forEach((el)=>{
//     console.log(el.precio * 1.15)
// })

// let newArray = productosLibreria.map((el) => {
//     return {
//         ...el,
//         precio: (el.precio * 1.10).toFixed(2)
//     }
// })

// console.log(newArray)
// console.log(productosLibreria)


// let elentoBuscado = productosLibreria.find((el)=>{
//     return (el.nombre === "Pegamento" && el.precio < 1.30)
// })

// console.log(elentoBuscado)

// let elentoBuscadoSome = productosLibreria.some((el)=>{
//     return (el.nombre.includes("Nacho") && el.precio < 1.30)
// })

// console.log(elentoBuscadoSome)


// let elementosFiltrados = productosLibreria.filter((el) => {
//     return el.categoria === "Electrónica"
// })

// console.log(elementosFiltrados)



// const numeros = [1, 2, 3, 4, 5, 6]

// const total = numeros.reduce((acumulador, elemento) => {
//     return acumulador + elemento
// }, 0)

// console.log(total)


// let totalDeStock = productosLibreria.reduce((acc, el)=>{
//     return acc + el.stock
// },0)

// console.log(totalDeStock)


// let MayorStock = productosLibreria.reduce((acc, el)=>{
//     if (acc < el.stock){
//         return el.stock
//     }

//     return acc
// },0)

// console.log(MayorStock)


// const numeros = [ 40, 1, 5, 200 ];

// numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]

// numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]


// productosLibreria.sort((a, b) => {
//     return b.precio - a.precio
// })

// console.log(productosLibreria)