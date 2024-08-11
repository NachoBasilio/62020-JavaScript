const contenedorMayor = document.getElementById("Container-Main")

const URLapi = "https://newsdata.io/api/1/news?apikey=pub_42059b40a4161655883c96c95f3e259fd7ecd&language=es" 

let estaEnElLocal = JSON.parse(localStorage.getItem("dark"))
if(estaEnElLocal){
    const body = document.querySelector("body")

    body.classList.add("bodyDark")
}

class Noticia {
    constructor(titulo, contenido, autor, imagen) {
        this.titulo = titulo;
        this.contenido = contenido;
        this.autor = autor;
        this.imagen = imagen; 
    }
}

//Noticias y llamados a la API
let Noticias = []

const llamaData = async () => {
    try {
        const response = await fetch(URLapi);
        console.log(response)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        Noticias = data.results.map(noticia => {
            return new Noticia(noticia.title, noticia.description, noticia.creator || "No tiene autor", noticia.image_url)
        })
    } catch (error) {
        console.log(error);
    }
}

const llamaDataConCategoria = async (categoria) => {
    try {
        const response = await fetch(URLapi+"&q="+categoria);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        Noticias = data.results.map(noticia => {
            return new Noticia(noticia.title, noticia.description, noticia.creator || "No tiene autor", noticia.image_url)
        })
    
    } catch (error) {
        console.log(error);
    }
}



//Manejo del DOM
const montarLasNoticias = (noticia)=>{ 
    contenedorMayor.innerHTML += `
    <div class="card">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.contenido}</p>
        <p>${noticia.autor}</p>
        <img src=${noticia.imagen} alt=""/>
    </div>
    `
}



const init = async () => {
    await llamaData();
    Noticias.forEach((noticia)=>{
        montarLasNoticias(noticia)
    });
}


//Categorias
const listaDeCategorias = document.getElementsByClassName("list")
const ArrayDeListaDeCategoria = Array.from(listaDeCategorias)

ArrayDeListaDeCategoria.forEach(list=>{
    list.addEventListener("click", async (e)=>{
        let categoria = e.target.innerText.toLowerCase()

        
        await llamaDataConCategoria(categoria)

        contenedorMayor.innerHTML = ""

        Noticias.forEach((noticia)=>{
            montarLasNoticias(noticia)
        })
    })
})



//Modo Dark
const botonDark = document.getElementById("botonDark")

botonDark.addEventListener("click", ()=>{

    const body = document.querySelector("body")

    if(JSON.parse(localStorage.getItem("dark"))){
        localStorage.setItem("dark", false)
        body.classList.toggle("bodyDark")
    }else{
        localStorage.setItem("dark", true)
        body.classList.toggle("bodyDark")
    }
    
})



//Comienzo de la pagina
document.addEventListener("DOMContentLoaded",()=>{
    init()
})