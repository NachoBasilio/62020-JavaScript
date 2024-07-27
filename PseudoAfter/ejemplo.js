let Alumnos = JSON.parse(localStorage.getItem("alumnos")) || []

alert("Hola y bienvenido a el simulador de gestion de alumnos")

let bandera = confirm("¿Querer entrar al simulador?")

function guardarAlumnosLocalStorage () {
    localStorage.setItem("alumnos", JSON.stringify(Alumnos))
}

function comprobadora(nombre, edad, anio){
    if(nombre != "" && edad > 0 && (anio > 0 && anio <= 6)){
        return true
    }else{
        return false
    }
}

function agregarUsuarios(nombre, edad, anio){
    if(comprobadora(nombre, edad, anio)){
        Alumnos.push({
            nombre,
            edad,
            anio,
            id: Date.now().toString(36) + Math.random().toString(36).substr(2)
        })
        guardarAlumnosLocalStorage()
    }else {
        alert("Algo esta mal.")
    }
}

function agregarNota(id){
    if(Alumnos.some((el)=>{
        return el.id === id
    })){
        let materia = prompt("¿De que materia estamos hablando?")
        let nota = prompt("¿Cual es la nota?")
        const alumnoAux = Alumnos.find((el)=>{
            return el.id === id
        })
        if(alumnoAux.hasOwnProperty("materias")){
            alumnoAux.materias.push({
                materia,
                nota
            })
        }else{
            alumnoAux.materias = [{
                materia,
                nota
            }]
        }
    }else{
        alert("El alumno no existe")
    }
    guardarAlumnosLocalStorage()
}



function editarAlumnos(id) {
    if(Alumnos.some((el)=>{
        return el.id === id
    })){
        console.log("Entro")
        Alumnos.forEach((el, idArray, array) => {
            if(el.id === id){
                array[idArray].nombre = prompt("¿A que nombre quiere cambiar? | Si no quiere editarlo, dale a cancelar") || array[idArray].nombre
                array[idArray].edad = parseInt(prompt("¿A que edad quiere cambiar? | Si no quiere editarlo, dale a cancelar")) || array[idArray].edad
                array[idArray].anio = parseInt(prompt("¿A que año quiere cambiar? | Si no quiere editarlo, dale a cancelar")) || array[idArray].anio
            }
        })

    }else{
        alert("El alumno no existe")
    }
    guardarAlumnosLocalStorage()
}

while(bandera){
    let opcion = prompt("¿Que quiere hacer? \n1- Agregar un alumno\n2- Agregar nota\n3- Editar alumno")

    switch(opcion){
        case "1":
            let nombre = prompt("¿Como se llama el alumno?")
            let edad = parseInt(prompt("¿Cuantos años tiene?"))
            let anio = parseInt(prompt("En que año va"))
            agregarUsuarios(nombre, edad, anio)
            break
        case "2":
            let idNota = prompt("¿Cual es el id del alumno?")
            agregarNota(idNota)
            break
        case "3":
            let idEditar = prompt("¿Cual es el id del alumno?")
            editarAlumnos(idEditar)
            break
        default:
            alert("Las opciones estan mal, hace caso.")
            break
    }

    bandera = confirm("¿Quiere seguir haciendo cosas?")
}
console.log(Alumnos)

