// const usuario = {
//     nombre : "Maria",
//     apellido : "Diaz",
//     curso: "JavaScript",
//     edad: 19,
//     saludar: (saludo) => {
//         console.log(saludo)
//     }
// }

// const usuario2 = {
//     nombre : "Nacho",
//     apellido : "Diaz",
//     curso: "JavaScript",
//     edad: 19,
//     saludar: (saludo) => {
//         console.log(saludo)
//     }
// }

// console.log(usuario.nombre)


// usuario.nombre = "santiago"

// console.log(usuario)

// usuario.saludar("Hola, como estas")

// console.log(usuario2.nombre)

//Funciones constructoras

// function Usuario (nombre, apellido, edad, curso) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.curso = curso

//     this.saludar = () => {
//         alert("Hola mi nombre es " + this.nombre)
//     }
// }


// const usuario = new Usuario("Nacho", "Basilio", 26, "JavaScript")

// const usuario2 = new Usuario("Rengar", "Basilio", 6, "JavaScript")

// const usuario3 = new Usuario("Rengar", "Basilio", 6, "JavaScript")

// console.log(usuario)
// console.log(usuario2)

// usuario2.saludar()
// usuario.saludar()


//clases


// class Usuario{
//     constructor(nombre, apellido, edad, curso){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//         this.curso = curso
//     }

//     saludar(){
//         alert("Hola mi nombre es " + this.nombre)
//     }
// }

// const usuario1 = new Usuario("Paulina", "Esquivel", 19, "javaScript")

// console.log(usuario1)

// usuario1.saludar()



class Persona {
    constructor(nombre, apellido, saldo){
        this.nombre = nombre
        this.apellido = apellido
        this.saldo = saldo
    }

    deposito(dinero){
        this.saldo += dinero
    }

    extraer(dinero){
        if(dinero < this.saldo){
            this.saldo -= dinero
        }else{
            alert("No tenes plata," + this.nombre)
        }
    }

    trasferencia(dinero, objetivo){
        this.extraer(dinero)
        objetivo.deposito(dinero)
    }
}

const persona1 = new Persona("Joaquin", "Camacho", 100)

const persona2 = new Persona("Nacho", "Basilio", 1000)

persona1.deposito(150)

console.log(persona1)

persona1.extraer(20)

console.log(persona1)

persona2.trasferencia(500, persona1)

console.log(persona1)
console.log(persona2)



// localStorage.setItem("dark", true)

// let darkMode = JSON.parse(localStorage.getItem("dark"))

// console.log(darkMode)


// localStorage.setItem("persona", JSON.stringify(persona1))


// let persona1DeStorage = JSON.parse(localStorage.getItem("persona"))


// console.log(persona1DeStorage.nombre)


// sessionStorage.setItem("persona", JSON.stringify(persona1))


// let persona1DeSession = JSON.parse(sessionStorage.getItem("persona"))


// console.log(persona1DeSession.nombre)


localStorage.clear()