// Organización de noticias en "coderNews":
// El equipo de "coderNews" ha desarrollado un sistema basado en arrays para gestionar y organizar noticias en su plataforma.
const noticias = [];

// El editor jefe de "coderNews" anuncia que el equipo ha comenzado agregando la primera noticia al array, titulada "Nueva actualización del sistema operativo".

noticias.push("Nueva actualización del sistema operativo")

// Agregando más noticias:
// El artículo informa cómo el equipo agrega noticias adicionales a su lista utilizando el método "push" o "unshift".

noticias.unshift("Julian Alvarez mete 10 goles en un solo partido")

// Eliminando noticias:
// El equipo está revisando qué noticias son más relevantes. La página de noticias revela cómo eliminan la primera noticia utilizando el método "shift".

// noticias.shift()

// También se informa que el equipo decide eliminar la última noticia utilizando el método "pop".

// noticias.pop()

//  Actualizando noticias:
// El equipo decide actualizar una noticia existente utilizando el método "splice". El artículo detalla cómo modifican una noticia existente y agregan una nueva en su lugar.

// noticias[1] = "Nueva actualización del sistema operativo en PC"


noticias.splice(1, 1, "Nueva actualización del sistema operativo en PC")

console.log(noticias)


//  Uniendo las noticias:
// El artículo muestra cómo los periodistas utilizan el método "join" para unir todas las noticias en una sola cadena legible.

console.log(noticias.join(", "))

//  El editor en jefe revela que el equipo está revisando el contenido utilizando los métodos "indexOf" e "includes" para identificar ciertas noticias.

let noticiaABuscar = prompt("¿Que noticia busca?")

let estaLaNoticia = noticias.includes(noticiaABuscar)

if(estaLaNoticia){
    let indice = noticias.indexOf(noticiaABuscar)
    console.log(indice)
    alert("La notica que usted busca es la siguiente: " + noticias[indice])
}else{
    alert("La noticia no esta!")
}



// Longitud del array de noticias:
//  El editor destaca el uso del método "length" para obtener el número total de noticias en la lista.


//  Obtener una copia de las primeras dos noticias utilizando el método "slice":

let copiaNoticias = noticias //referencia

let copiaNoticiaBuena = noticias.slice(1)