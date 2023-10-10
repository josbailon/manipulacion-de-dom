document.addEventListener("DOMContentLoaded", function () {
    var nuevaTarea = document.getElementById("nuevaTarea");
    var agregarTarea = document.getElementById("agregarTarea");
    var listaTareas = document.getElementById("listaTareas");

    agregarTarea.addEventListener("click", function () {
        var tareaTexto = nuevaTarea.value;
        if (tareaTexto) {
            var nuevaTareaLi = document.createElement("li");
            nuevaTareaLi.textContent = tareaTexto;

            

            listaTareas.appendChild(nuevaTareaLi);
            nuevaTarea.value = "";
        }
    });
});
