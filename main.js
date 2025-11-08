
window.onload = () => {

    //declaracion - asignacion
    let button1 = document.querySelector("#btn-1");

    function myFunction() {
        if (button1.classList.contains("btn-success")) {
            button1.classList.remove("btn-success")
            button1.classList.add("btn-danger")
            button1.textContent = "Apagado"
        } else {
            button1.classList.remove("btn-danger")
            button1.classList.add("btn-success")
            button1.textContent = "Encendido"
        }
    }

    button1.addEventListener("click", myFunction);
}
