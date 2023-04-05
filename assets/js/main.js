
/* DEFINIENDO UNA CONSTANTE "btnREst", OBTENIENDO SU ID "submit",
 AÑADIENDO UN addEventListener al evento "click" con el nombre de la funcion */
const btnRest = document.getElementById("submit")
btnRest.addEventListener("click", create)

const tareas = []

function leerFormulario() {

    const nameinput = document.getElementById("nombre")
    const lastnameinput = document.getElementById("apellido")
    const rutinput = document.getElementById("rut")
    const cargoinput = document.getElementById("cargo")

    const tarea = {
        nombre: nameinput.value,
        apellido: lastnameinput.value,
        rut: rutinput.value,
        cargo: cargoinput.value
    }
    return (tarea)
}
