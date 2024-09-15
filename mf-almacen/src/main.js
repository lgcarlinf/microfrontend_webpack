import {registerApplication, start } from "single-spa"

window.mf_almacen = {
    async bootstrap(props){
        console.log("mf-almacen iniciado",props)
    },
    async mount(props){
        console.log("mf-almacen montado",props)

        const refContainer = document.getElementById("mf-almacen")

        const h1 = document.createElement("h1")
        h1.textContent = props.titulo
        
        const h2 = document.createElement("h2")
        h2.textContent = "Microfrontend Almacen monted"

        refContainer.appendChild(h1 )
        refContainer.appendChild(h2)

    },
    async unmount(props){
        console.log("mf-almacen desmontado",props)
        const refContainer = document.getElementById("mf-almacen")
        refContainer.innerHTML = ""
    }
}

registerApplication({
    name: "mf-almacen",
    app:window.mf_almacen,
    activeWhen: ["/"],
    customProps: {
        nombre: "Boton Javascript",
        titulo: "MFE - Almacen"
    }
})

start()