// if



// operadores lógicos (Los nombres de las variables son solo para los ejemplos, nunca llamen asi a sus variables)

const a = 5;
const b = '5';
console.log(a == b); //true

console.log(a === b); //false (Vale el tipo)

const c = 10;
const d = '10';
console.log(c != d); //false 

console.log(c !== d); //true (Vale el tipo)


const x = "Nacho";
const y = "nacho";
console.log(x > y); //false 


const p = true;
const q = false;
console.log(p && q); 

const r = true;
const s = false;
console.log(r || s); 


const t = true;
console.log(!t); 


// else

// if( condición ){
//     codigo1
// }else{
//     codigo2
// }

//else if

// let edad = Number(prompt("¿Cuantos años tenes?"))

// if(edad < 18){
//     alert("No puede pasa")
// }else if(edad == 25){
//     alert("Podes pasar y tienes un descuento")
// }else if(edad == 37){
//     alert("te llevas una remera del 10")
// }else{
//     alert("Podes pasar")
// }

// switch

// let mascota = prompt("¿Que mascota tienes?");


// switch (mascota.toLocaleLowerCase()) {
//   case "lagarto":
//     alert("Tengo un lagarto");
//     break;
//   case "perro":
//     alert("Tengo un perro");
//     break;
//   case "gato":
//     alert("Tengo un gato");
//     break;
//   case "serpiente":
//     alert("Tengo una serpiente");
//     break;
//   case "loro":
//     alert("Tengo un loro");
//     break;
//   default:
//     alert("No tengo mascota");
//     break;
// }

// if(mascota == "lagarto"){
//     alert("Tengo un lagarto");
// }else if(mascota == "perro"){
//     alert("Tengo un perro");
// }else if(mascota == "gato"){
//     alert("Tengo un gato");
// }else if(mascota == "serpiente"){
//     alert("Tengo un serpiente");
// }else if(mascota == "loro"){
//     alert("Tengo un loro");
// }else{
//     alert("No tengo mascota");
// }

// for


// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición, calculamos el número ingresado X el número de repetición (i)
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     console.log(ingresarNumero + " X " + i + " = " + resultado);
// }


// let cantidadAlumnos = Number(prompt("¿Cuántos alumnos tienes?"))
// let notaTotal = 0

// for (let i = 1; i <= cantidadAlumnos; i++) {
//     // let nota = Number(prompt(`¿Cuál es la nota del alumno ${i}?`))
//     let nota = Number(prompt("¿Cuál es la nota del alumno " + i +"?"))
//     notaTotal = notaTotal + nota
// }


// let promedio = notaTotal / cantidadAlumnos

// alert("El promedio de notas es: " + promedio)

// while

// let cantidad = 0
// let notaTotal = 0
// let nota = 1354363123123123


// while(nota != 0){
//     nota = Number(prompt("¿Cual es su nota de su alumno?"))
//     notaTotal = notaTotal + nota
//     if(nota !== 0){
//         cantidad++
//     }
// }

// let promedio = notaTotal / cantidad

// alert("El promedio de notas es: " + promedio)

// do while

// let cantidad = 0
// let notaTotal = 0
// let bandera

// do {
//     let nota = Number(prompt("¿Cuál es la nota de tu alumno?"))
//     notaTotal = notaTotal + nota
//     cantidad++
//     bandera = confirm("¿Quieres seguir?")
// } while (bandera)

// let promedio = notaTotal / cantidad

// alert("El promedio de notas es: " + promedio)