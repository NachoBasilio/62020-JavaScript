// if

// if( condición ){
//     codigo
// }

// operadores lógicos (Los nombres de las variables son solo para los ejemplos, nunca llamen asi a sus variables)

// const a = 5;
// const b = '5';
// console.log(a == b); 

// console.log(a === b); 

// const c = 10;
// const d = '10';
// console.log(c != d); 

// console.log(c !== d); 


// const x = 7;
// const y = 5;
// console.log(x > y); 


// const p = true;
// const q = false;
// console.log(p && q); 


// const r = true;
// const s = false;
// console.log(r || s); 


// const t = true;
// console.log(!t); 


// else

// if( condición ){
//     codigo1
// }else{
//     codigo2
// }

// else if

// if( condición1 ){
//     codigo1
// }else if(condición2){
//     codigo2
// }else{
//     codigo3
// }

// switch

// let mascota = "perro";

// switch (mascota) {
//   case "lagarto":
//     console.log("Tengo un lagarto");
//     break;
//   case "perro":
//     console.log("Tengo un perro");
//     break;
//   case "gato":
//     console.log("Tengo un gato");
//     break;
//   case "serpiente":
//     console.log("Tengo una serpiente");
//     break;
//   case "loro":
//     console.log("Tengo un loro");
//     break;
//   default:
//     console.log("No tengo mascota");
//     break;
// }

// for

// let cantidadAlumnos = Number(prompt("¿Cuántos alumnos tienes?"))
// let notaTotal = 0

// for (let i = 1; i <= cantidadAlumnos; i++) {
//     let nota = Number(prompt(`¿Cuál es la nota del alumno ${i}?`))
//     notaTotal = notaTotal + nota
// }

// let promedio = notaTotal / cantidadAlumnos

// alert("El promedio de notas es: " + promedio)

// while

// let bandera = true
// let cantidad = 0
// let notaTotal = 0

// while(bandera){
//     let nota = Number(prompt("¿Cual es su nota de su alumno?"))
//     notaTotal = notaTotal + nota
//     cantidad++
//     bandera = confirm("¿Quieres seguir?")
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