// function saludadora(){
//     let nombre = prompt("¿Como te llamas?")

//     alert("Hola "+ nombre + " ¿Como estas?")
// }
// saludadora()


// function promedio(alumnos, numeroInicial){
//     let notaTotal = numeroInicial

//     for (let index = 0; index < alumnos; index++) {
//         let nota = parseInt(prompt("¿Cual es la nota de su alumno?"))

//         notaTotal = notaTotal + nota
//     }

//     alert("El promedio es de: " + notaTotal/alumnos)
// }


// let totalAlumnos = Number(prompt("¿Cuantos alumnos tenes?"))

// promedio(totalAlumnos, 0)

//Declaración de variable para guardar el resultado de la suma
// let resultado = 0;
//Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero
// }
//Función que muestra resultado por consola
// function mostrar(mensaje) {
//     console.log(mensaje)
// }
//Llamamos primero a sumar y luego a mostrar
// sumar(6, 3);
// mostrar(resultado);


// function sumar(num1, num2){
//     let suma = num1 + num2

//     return suma
// }


// let resultado = sumar(3, 5) // 8

// console.log(resultado)

// function saludoMagico(persona, tipo){
//     switch (tipo) {
//         case "Mañana":
//             return "Buenos dias, " + persona
//         case "Tarde":
//             return "Buenas tardes, " + persona
//         case "Noche":
//             return "Buenas noches, " + persona
//         default:
//             return "Hola " + persona
//     }
// }


// let saludoADavid = saludoMagico("David", "Mañana")

// console.log(saludoADavid)



// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//         case "-":
//             return primerNumero - segundoNumero;
//         case "*":
//             return primerNumero * segundoNumero;
//         case "/":
//             return primerNumero / segundoNumero;
//         default:
//             return 0;
//     }
// }

// let sumaDeDosNumero = calculadora(5, 6, "+")

// if(sumaDeDosNumero > 10){
//     let todoBien = "Todo esta bien"

//     if(true){
//         let todoMal = "Todo esta mal"
//         console.log(todoBien)
//     }
// }else{
//     console.log(todoBien)
// }


// const deDolarAPeso = function (valorEnDolar) {
//     return valorEnDolar * 1405
// }

// let sueldo = deDolarAPeso(200)
// let deuda = deDolarAPeso(1000)

// console.log(deuda)
// console.log(sueldo)


// const dePesosADolares = (valorEnPesos) => {
//     return valorEnPesos / 1405
// }

// let sueldoFlecha = dePesosADolares(500000)
// let deudaFlecha  = dePesosADolares(10000000)

// console.log(sueldoFlecha)
// console.log(deudaFlecha)

// let nintendoSwitch = valorConIVA(1000000)
// console.log(nintendoSwitch)


// function valorConIVA (valor){
//     return valor * 1.16
// }

//Calcular impuestos de juegos para steam (iva 21, pais 8, ganancias 30):

function calculadoraDeImpuestos (valorDeJuego) {
    let valorConIva = valorDeJuego * 1.21
    let valorConPais = valorConIva * 1.08
    let valorConGanacias = valorConPais *1.30

    return valorConGanacias
}


console.log(calculadoraDeImpuestos(1000))