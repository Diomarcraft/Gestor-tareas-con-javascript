// Capturamos los elementos del HTML

const mensajeError = document.getElementById("mensajeError");

const btnAgregar = document.getElementById("btnAgregar");

const inputActividad = document.getElementById("actividadInput");

const listaActividades = document.getElementById("listaActividades");

const mensajeVacio = document.getElementById("mensajeVacio");

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Eventos

btnAgregar.addEventListener("click", agregarActividad);

inputActividad.addEventListener("keypress", function(evento){

    if(evento.key === "Enter"){

        agregarActividad();

    }

});

// Función agregar actividad

function agregarActividad(){

    const textoActividad = inputActividad.value.trim();

    // Validación

    if(textoActividad === ""){

        mensajeError.textContent =
        "Por favor escribe una actividad antes de agregarla";

        return;

    }

    mensajeError.textContent = "";

    // Crear elementos

    const nuevaActividad = document.createElement("li");

    const texto = document.createElement("span");

    texto.textContent = textoActividad;

    const contenedorBotones = document.createElement("div");

    contenedorBotones.classList.add("botones");

    // Botón estado

    const btnRealizada = document.createElement("button");

    btnRealizada.textContent = "Pendiente";

    btnRealizada.classList.add("btn-realizada");

    // Botón eliminar

    const btnEliminar = document.createElement("button");

    btnEliminar.textContent = "Eliminar";

    btnEliminar.classList.add("btn-eliminar");

    // Estado inicial

    let estado = "pendiente";

    btnRealizada.addEventListener("click", function(){

        if(estado === "pendiente"){

            estado = "realizada";

            nuevaActividad.classList.add("realizada");

            btnRealizada.textContent = "Realizada";

        }

        else if(estado === "realizada"){

            estado = "hecha";

            nuevaActividad.classList.remove("realizada");

            nuevaActividad.classList.add("hecha");

            btnRealizada.remove();

        }

        actualizarContadores();

    });

    // Eliminar

    btnEliminar.addEventListener("click", function(){

        nuevaActividad.remove();

        actualizarContadores();

    });

    // Agregar elementos

    contenedorBotones.appendChild(btnRealizada);

    contenedorBotones.appendChild(btnEliminar);

    nuevaActividad.appendChild(texto);

    nuevaActividad.appendChild(contenedorBotones);

    listaActividades.appendChild(nuevaActividad);

    inputActividad.value = "";

    actualizarContadores();

}

// Actualizar contadores

function actualizarContadores(){

    const actividades =
    listaActividades.querySelectorAll("li");

    const hechas =
    listaActividades.querySelectorAll(".hecha");

    const totalActividades =
    actividades.length;

    const totalRealizadas =
    hechas.length;

    const totalPendientes =
    totalActividades - totalRealizadas;

    document.getElementById("totalActividades")
    .textContent = totalActividades;

    document.getElementById("actividadesRealizadas")
    .textContent = totalRealizadas;

    document.getElementById("actividadesPendientes")
    .textContent = totalPendientes;

    if(totalActividades === 0){

        mensajeVacio.style.display = "block";

    }

    else{

        mensajeVacio.style.display = "none";

    }

}
