const main = document.getElementById("main")

const creadoraDeCards = (productos) => {
    productos.forEach((el)=>{
        main.innerHTML += el.titulo
    })
}

const buscadoraDeProductos = async () => {
    let resultado = await fetch("./data.json")
    let data = await resultado.json()

    creadoraDeCards(data)
}

buscadoraDeProductos()