// const Alumnos = ["Agustin", "Joaquin", "Paola", "Renzo","Alex"]


// const ArrayNumero1 = [1,2,3,4,5,10,23,41,2,3]



// // console.log(ArrayNumero1)

// // for (let index = 0; index < ArrayNumero1.length; index++) {
// //     const element = ArrayNumero1[index];
// // }


// // let numeroUsuario = parseInt(prompt("¿QUe numero quiere agregar?"))


// ArrayNumero1.push(6)


// ArrayNumero1.unshift(0)

// // console.log(ArrayNumero1)

// ArrayNumero1.pop()

// // console.log(ArrayNumero1)

// ArrayNumero1.shift()

// // console.log(ArrayNumero1)


// const alumnosString = Alumnos.join("\n")

// // alert(alumnosString)


// // const indice = Alumnos.indexOf("Alex")

// // console.log(Alumnos)
// // console.log(indice)


// const productoABuscar = Productos.includes("Yerba")


// // console.log(productoABuscar)


// let indice = Alumnos.indexOf("Alex")
// // console.log(Alumnos)
// // console.log(indice)

// Alumnos.sort() // a -> z

// indice = Alumnos.indexOf("Alex")
// // console.log(Alumnos)
// // console.log(indice)



// // console.log(Productos)

// // Productos.reverse()

// // Productos.sort().reverse() // z -> a

// // console.log(Productos)



// // console.log(Productos)

// // let productosEliminados = Productos.splice(1, 5)

// // console.log(Productos)

// // console.log(productosEliminados)


// // console.log(Productos)

// // let productosCopiados = Productos.slice(0, 5)

// // console.log(Productos)

// // console.log(productosCopiados)


// // console.log(Productos)

// let arrayCopia = Productos.slice(0)

// let arrayMalCopiado = Productos

// console.log(Productos)

// const perros  = ["Pupy", "Laila"]
// const gatos = ["Mishi", "Garfield", "Zuri"]

// const mascotas = gatos.concat(perros)

// console.log(mascotas)


// for (let valor of Productos ){
//     console.log(valor)
// }







let total = 0
let bandera = true
const Productos =  ["1 - Lápiz", "2 - Cuaderno", "3 - Bolígrafo", "4 - Marcador", "5 - Goma de borrar", "6 - Regla", "7 - Pegamento", "8 - Tijeras", "9 - Cinta adhesiva", "10 - Carpeta", ];

const Precios = [23, 12, 54, 25, 23, 12, 23, 43, 65, 32]

function logicaDeCompra(precio){
    total += precio
}

function logicaDeProductos(numero){

    if(numero > Productos.length){
        alert("Selección inválida. Por favor, intente nuevamente.");
    }else{
        let indice = numero - 1
        logicaDeCompra(Precios[indice])
        bandera = confirm("¿Quiere seguir comprando?")
    }



    // switch (numero) {
    //     case 1:
    //         bandera = confirm("¿Quiere seguir comprando?")
    //         logicaDeCompra(10)
    //         break;
    //     case 2:
    //         bandera = confirm("¿Quiere seguir comprando?")
    //         logicaDeCompra(20)
    //         break;
    //     case 3:
    //         bandera = confirm("¿Quiere seguir comprando?")
    //         logicaDeCompra(50)
    //         break;
    //     case 4:
    //         bandera = confirm("¿Quiere seguir comprando?")
    //         logicaDeCompra(50)
    //         break;
    //     case 5:
    //         bandera = confirm("¿Quiere seguir comprando?")
    //         logicaDeCompra(10)
    //         break;
    //     case 6:
    //         bandera = confirm("¿Quiere seguir comprando?")
    //         logicaDeCompra(80)
    //         break;
    //     case 7:
    //         bandera = confirm("¿Quiere seguir comprando?")
    //         logicaDeCompra(50)
    //         break;
    //     case 8:
    //         bandera = confirm("¿Quiere seguir comprando?")
    //         logicaDeCompra(50)
    //         break;
    //     case 9:
    //         bandera = confirm("¿Quiere seguir comprando?")
    //         logicaDeCompra(50)
    //         break;
    //     case 10:
    //         bandera = confirm("¿Quiere seguir comprando?")
    //         logicaDeCompra(50)
    //         break;
    //     default:
    //         alert("Selección inválida. Por favor, intente nuevamente.");
    // }
}


while(bandera){
    let duenio = confirm("¿Sos el dueño?")

    if(duenio){
        let nuevoProducto = prompt("Agregue un producto nuevo")
        let precioNuevo = parseInt(prompt("Agregue el precio del producto nuevo"))

        Productos.push(nuevoProducto)
        Precios.push(precioNuevo)

    }else{
        let menu = "Por favor, seleccione el número del producto que desea comprar:\n" + Productos.join("\n")

        let seleccion = prompt(menu);

        logicaDeProductos(parseInt(seleccion))
    }



}




alert("El total es: " + total)







