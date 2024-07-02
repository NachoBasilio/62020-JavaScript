//Función tradicional para calcular la cantidad de caracteres en un titular de noticia:

//Descripción: En CoderNews, necesitamos asegurarnos de que los titulares de las noticias no excedan cierta longitud para mantener la presentación limpia. Esta función calculará la cantidad de caracteres en un titular dado.

// let titulo = prompt("Mande su titulo")

// function contadorDeCaracteres (titulo) {
//     return titulo.length
// }

// let valorDelTitulo = contadorDeCaracteres(titulo)
// console.log(valorDelTitulo)

//Función para determinar si una noticia es corta o larga:

//Descripción: CoderNews quiere clasificar automáticamente las noticias como cortas o largas para ayudar a los lectores a elegir qué leer. Esta función determina si una noticia dada es corta o larga según la longitud de su contenido. (Tiene que retornar un booleano si es mayor a 30)

// function esMuyGrande(cantidadDeCaracteres){
//     if(cantidadDeCaracteres > 30){
//         return true
//     }else{
//         return false
//     }
// }

// alert(esMuyGrande(valorDelTitulo))


//Función de flecha para determinar la importancia de una noticia según la cantidad de comentarios:

//Descripción: CoderNews quiere etiquetar automáticamente la importancia de una noticia según la cantidad de comentarios que recibe. Esta función determina esa importancia, si son mas de 50 es mega importante, si están entre 50 y 40 es importante, si son entre 40 y 20 es relevante y si esta entre 20 y 0 es normal.

const etiquetadoraDeNoticias = (cantidadComentarios) => {
    if(cantidadComentarios > 50){
        alert("mega importante")
    }else if(cantidadComentarios <= 50 && cantidadComentarios > 40){
        alert("importante")
    }else if( cantidadComentarios <= 40 && cantidadComentarios > 20){
        alert("relevante")
    }else if( cantidadComentarios <= 20 && cantidadComentarios >= 0){
        alert("normal")
    }else{
        alert("Valor invalido")
    }
}

// let valorDeComentarios = parseInt(prompt("¿Cuantos comentarios tiene tu noticia?"))

// etiquetadoraDeNoticias(valorDeComentarios)

//Función anónima que muestra un mensaje personalizado según la relevancia de una noticia:

//Descripción: Los usuarios de CoderNews pueden calificar la relevancia de las noticias, y esta función proporciona un mensaje personalizado según la calificación, el usuario debe calificar del 1 al 10.


const calificadoraDeNoticias = function (calificacion) {
    switch (calificacion) {
        case 10:
            alert("Te gusto mucho la noticia, gracias por su calificacion")
            break
        case 9:
            alert("nos alegra que te guste la noticia")
            break
        case 8:
            alert("nos alegra que te guste la noticia")
            break
        case 7:
            alert("nos alegra que te guste la noticia")
            break
        case 6:
            alert("Gracias por calificar, si tiene algun aporte lo puede enviar al siguiente numero 123123123")
            break
        case 5:
            alert("Gracias por calificar, si tiene algun aporte lo puede enviar al siguiente numero 123123123")
            break
        case 4:
            alert("Gracias por calificar, si tiene algun aporte lo puede enviar al siguiente numero 123123123")
            break
        case 3:
            alert("Gracias por calificar, si tiene algun aporte lo puede enviar al siguiente numero 123123123")
            break
        case 2: 
            alert("Gracias por calificar, si tiene algun aporte lo puede enviar al siguiente numero 123123123")
            break
        case 1:
            alert("Gracias por calificar, si tiene algun aporte lo puede enviar al siguiente numero 123123123")
            break
        default:
            alert("Todo mal, valor invalido")
            break
    }
}

let valorDelUsuario = parseInt(prompt("Del 1 al 10 ¿Como estuvo la noticia?"))

calificadoraDeNoticias(valorDelUsuario)

