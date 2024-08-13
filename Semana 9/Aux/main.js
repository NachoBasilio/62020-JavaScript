const main = document.getElementById("main")
const botonEnviar = document.querySelector("#enviar")

// botonEnviar.addEventListener("click", ()=>{
//     Swal.fire({
//         title: "Bienvenido!",
//         text: "Texto adicional que aparece abajo",
//         icon: "warning",
//         confirmButtonText: "¡Todo piola!",
//         showCancelButton: true,
//         cancelButtonText: "Minga"
//     }).then((result)=>{
//         if(result.isConfirmed){
//             Swal.fire("Que grande!")
//         }
//     })
// })

// const URL = "./data.json"

// async function cargarPublicaciones() {
//     const resp = await fetch(URL)
//     const posts = await resp.json()
//         console.table(posts)
// }


// botonEnviar.addEventListener("click", ()=>{
//     Swal.fire({
//         title: '¿Descargar publicaciones del servidor?',
//         icon: 'question',
//         showCancelButton: true,
//         confirmButtonText: 'Sí, ver posts',
//         cancelButtonText: 'No por ahora'
//     }).then((response)=> {
//         if (response.isConfirmed) {
//             cargarPublicaciones()
//         }
//     })
// })



botonEnviar.addEventListener("click", ()=>{
    Swal.fire({
        title: "Ingresa tu nombre",
        input: "text",
        inputLabel: "Nombre",
        inputPlaceholder: "Escribí tu nombre aca"
    }).then((result)=>{
        console.log(result.value)
    })
})