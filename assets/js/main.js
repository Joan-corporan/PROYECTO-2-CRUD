
/* DEFINIENDO UNA CONSTANTE "btnREst", OBTENIENDO SU ID "submit",
 AÑADIENDO UN addEventListener al evento "click" con el nombre de la funcion */
const btnRest = document.getElementById("submit")
btnRest.addEventListener("click", create)

function create(event) {

    event.preventDefault()
    const tarea = leerFormulario()
    createCard(tarea)

    limpiarForm()

    guardardatosLS()
    
}

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
    tareas.push(tarea)
    return (tarea)
}
function createCard(tarea) {
    const cardlist = document.getElementById("list-01")
    cardlist.innerHTML += `
                        

                    <div id="box-b4">
                            <p> ${tarea.nombre}</p>
                            <p>${tarea.apellido}</p>
                            <p>${tarea.rut}</p>
                            <p>${tarea.cargo}</p> 
                        <div>
                            <button class="btn-edit">Editar</button><button class="btn-elim">Eliminar</button>
                        </div>
                    </div>
                    <hr>`
}
function limpiarForm() {
    const formconst = document.getElementById("boxSF")
    formconst.reset()

}
function guardardatosLS() {

    localStorage.setItem("tareas", JSON.stringify(tareas))
}
function leerformLS() {
    const tareas = JSON.parse(localStorage.getItem('tareas'))
    tareas.forEach((el) => createCard(el))


}
leerformLS()



