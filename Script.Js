// Selecciona todas las tarjetas
const tarjetas = document.querySelectorAll(".tarjeta");

// Agrega un botón a cada tarjeta
tarjetas.forEach((tarjeta) => {

    const boton = document.createElement("button");
    boton.textContent = "Ver mensaje";

    tarjeta.appendChild(boton);

    boton.addEventListener("click", () => {

        const nombre = tarjeta.querySelector("h2").textContent;

        alert("Has seleccionado: " + nombre);

    });

});