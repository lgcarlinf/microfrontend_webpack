import {registerApplication, start } from "single-spa"

window.mf_history = {
    async bootstrap(props){
        console.log("mf-history iniciado",props)
    },
    async mount(props){
        console.log("mf-history montado",props)

        const refContainer = document.getElementById("mf-history")

        const h1 = document.createElement("h1")
        h1.textContent = props.titulo
        
        const h2 = document.createElement("h2")
        h2.textContent = "Microfrontend history monted"

        refContainer.appendChild(h1 )
        refContainer.appendChild(h2)

    },
    async unmount(props){
        console.log("mf-history desmontado",props)
        const refContainer = document.getElementById("mf-history")
        refContainer.innerHTML = ""
    }
}

registerApplication({
    name: "mf-history",
    app:window.mf_history,
    activeWhen: ["/"],
    customProps: {
        nombre: "Boton Javascript",
        titulo: "MFE - history"
    }
})

start()