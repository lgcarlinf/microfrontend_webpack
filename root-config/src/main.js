import {registerApplication, start } from "single-spa"

registerApplication({
    name: "mf-almacen",
    app:window.mf_almacen,
    activeWhen: ["/"],
    customProps: {
        nombre: "Boton Javascript",
        titulo: "MFE - Almacen"
    }
})

registerApplication({
    name: "mf-history",
    app:window.mf_history,
    activeWhen: ["/"],
    customProps: {
        nombre: "Boton Javascript",
        titulo: "MFE - inventario"
    }
})

registerApplication({
    name: "mf-inventario",
    app:window.mf_inventario,
    activeWhen: ["/"],
    customProps: {
        nombre: "Boton Javascript",
        titulo: "MFE - inventario"
    }
})


start()