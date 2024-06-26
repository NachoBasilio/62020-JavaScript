// Ejercicio para if-else:
// En CoderNews, queremos mostrar diferentes mensajes dependiendo del número de comentarios que tiene una noticia.
// Si una noticia tiene menos de 10 comentarios, mostrar el mensaje "Pocos comentarios".
// Si tiene entre 10 y 50 comentarios, mostrar "Comentarios moderados".
// De lo contrario, mostrar "¡Gran debate en marcha!".

//let comentarios = Number(prompt("¿Cuantos comentarios tiene esta noticia?"))

// if(comentarios <= 10){
//     alert("Pocos comentarios")
// }else if(comentarios > 10 && comentarios <= 50){
//     alert("Comentarios moderados")
// }else{
//     alert("¡Gran debate en marcha!")
// }


// Ejercicio para switch:
// En CoderNews, queremos asignar un nivel de importancia a las noticias basado en su categoría.
// Crea un switch statement que asigne un nivel de importancia a una noticia según su categoría:
// - "Tecnología" tiene un nivel de importancia de "Alto".
// - "Deportes" tiene un nivel de importancia de "Medio".
// - "Política" tiene un nivel de importancia de "Bajo".
// - Para cualquier otra categoría, el nivel de importancia es "Desconocido".

// let categoria = prompt("¿De que categoría es esa noticia?\n 1- Tecnologia \n 2- Deporte \n 3- Politica")

// switch (categoria) {
//     case "1":
//         alert("Alto")
//         break
//     case "2":
//         alert("Medio")
//         break
//     case "3":
//         alert("Bajo")
//         break
//     default:
//         alert("Desconocido")
//         break
// }


// Ejercicio para for:
// En CoderNews, queremos imprimir los títulos de las noticias con un número de serie.
// Utiliza un bucle for para imprimir el número de serie seguido del título de la noticia.

// let titulo1 = "Nuevo lanzamiento de iPhone";
// let titulo2 = "El equipo local gana el campeonato";
// let titulo3 = "Nuevo presidente elegido";


// for (let i = 1; i <= 3; i++) {
//     if(i == 1){
//         alert(titulo1)
//     }else if( i == 2){
//         alert(titulo2)
//     }else{
//         alert(titulo3)
//     }
// }


// Ejercicio para while:
// En CoderNews, queremos permitir a los usuarios buscar una noticia por su título.
// Utiliza un bucle while para buscar el título de una noticia ingresado por el usuario.


// let tituloBuscadoWhile = "Nuevo presidente elegido";
// let bandera = true

// while(bandera){
//     let valorUser = prompt("¿Que noticia quiere buscar?")
//     if(valorUser == tituloBuscadoWhile){
//         bandera = false
//         alert("¡Encontro el titulo!")
//     }else{
//         bandera = confirm("No lo encontramos ¿Quiere seguir buscando?")
//     }
// }


// Ejercicio para do-while:
// En CoderNews, queremos permitir a los usuarios votar si les gustó o no una noticia.
// Utiliza un bucle do-while para solicitar al usuario su voto (sí o no) al menos una vez.
// Continúa solicitando el voto mientras el usuario ingrese una respuesta inválida.

let voto

do{
    voto = prompt("¿Te gusto la noticia?").toLocaleLowerCase()
    
}while(voto !== "si" && voto !== "no")


// Ejercicio para while:
// En CoderNews, queremos permitir a los usuarios buscar una noticia por su título.
// Utiliza un bucle while para buscar el título de una noticia ingresado por el usuario.
// Si la noticia está presente, muestra un mensaje indicando que la noticia fue encontrada.
// Si no, muestra un mensaje indicando que la noticia no fue encontrada.

// let titulo1While = "Nuevo lanzamiento de iPhone";
// let titulo2While = "El equipo local gana el campeonato";
// let titulo3While = "Nuevo presidente elegido";
// let bandera = true





// En CoderNews, queremos permitir a los usuarios calificar la relevancia de una noticia.
// El programa solicitará al usuario que ingrese la relevancia de una noticia en una escala del 1 al 5.
// Utiliza un bucle while para validar la entrada del usuario y permitirle intentarlo nuevamente si la entrada no está en el rango válido.
// Implementa un switch para mostrar un mensaje personalizado dependiendo de la calificación ingresada por el usuario.


// Variable para almacenar la calificación de relevancia ingresada por el usuario
//let relevanciaNoticia;

// Bucle para validar si la entrada del usuario es un número
// let bandera = true;

// Solicitar al usuario que ingrese la relevancia de la noticia
 //¿Que hay que hacer con este dato?



//Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".
