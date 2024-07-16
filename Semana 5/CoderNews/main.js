// Organización de noticias en "coderNews":


// El equipo de "coderNews" ha desarrollado un sistema basado en objetos para gestionar y organizar noticias en su plataforma.

const Noticias = []

console.log(Noticias)


// El editor jefe de "coderNews" anuncia que el equipo ha comenzado agregando la primera noticia al array. Utilizando objetos literales.

Noticias.push(
{
    titulo: "Lautaro Martinez nos dio un alegría anoche",
    autor: "Julian",
    ctdComentarios: 78,
    desc: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
}
)

Noticias.push(
{
    titulo: "aredes la rompio",
    autor: "Julian",
    ctdComentarios: 78,
    desc: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
}
)


// for (let i = 0; i < 3; i++) {
//     let titulo = prompt("Dame el titulo")
//     let autor = prompt("Dame el autor" )
//     let ctdComentarios = parseInt(prompt("Cuantos comentarios hay?"))
//     let desc = prompt("Explícame la noticia")

//     const objetoAux = {
//         titulo,
//         autor,
//         ctdComentarios,
//         desc
//     }

//     Noticias.push(objetoAux)
// }

// Como se dieron cuenta que el proceso puede ser algo tardado decidieron usar funciones constructoras:

// function Noticia (titulo, autor, ctdComentarios, desc) {
//     this.titulo = titulo
//     this.autor = autor
//     this.ctdComentarios = ctdComentarios
//     this.desc = desc

//     this.agregadora = (array) => {
//         array.push(this)
//     }
// }

// const noticia1 = new Noticia("asdasd", "asdas", 43, "asdasdasdasdasdasd")

// noticia1.agregadora(Noticias)


// for (let i = 0; i < 3; i++) {
//     let titulo = prompt("Dame el titulo")
//     let autor = prompt("Dame el autor" )
//     let ctdComentarios = parseInt(prompt("Cuantos comentarios hay?"))
//     let desc = prompt("Explícame la noticia")

//     const noticiaAux = new Noticia(titulo, autor, ctdComentarios, desc)
//     noticiaAux.agregadora(Noticias)
// }



// Estaría genial utilizar algun tipo de bucle para molestar al usuario con todas nuestras noticias ¿No?


// Ahora llegaron nuevas tecnologias para crear estos objetos, las clases, ¿Podrias crear una clase que responda a nuestras necesidades dentro de CoderNews?

class Noticia { //Sugar sintax
    constructor(titulo, autor, ctdComentarios, desc){
        this.titulo = titulo
        this.autor = autor
        this.ctdComentarios = ctdComentarios
        this.desc = desc
    }

    agregadora(array){
        array.push(this)
    }
}

const noticia1 = new Noticia("asdasd", "asdas", 43, "asdasdasdasdasdasd")

noticia1.agregadora(Noticias)


//Ahora podríamos crear un algoritmo para crear nuevas noticias desde el navegador, ¡VAMOS!
//¿Y si usamos el localStorage?

