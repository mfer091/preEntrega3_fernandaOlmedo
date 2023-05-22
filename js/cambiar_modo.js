// Cambio de modos Light o Dark

/* const cambiaModoButton = document.querySelector(".botonLD");
const body = document.querySelector("body");

cambiaModoButton.addEventListener("click", cambioModo);

function cambioModo() {
    body.classList.toggle("fondoDark");
} */

const cambiaModoButton = document.querySelector(".botonLD");
const body = document.querySelector("body");

let modoDark = localStorage.getItem("fondoDark");

function activarModoDark() {
    body.classList.add("fondoDark");
    localStorage.setItem("fondoDark", "si");
}

function desactivarModoDark() {
    body.classList.remove("fondoDark");
    localStorage.setItem("fondoDark", "no");
}

if (modoDark === "si") {
    activarModoDark();
} else {
    desactivarModoDark();
}

cambiaModoButton.addEventListener("click", () => {
    modoDark = localStorage.getItem("fondoDark");

    if (modoDark === "si") {
        desactivarModoDark();
    } else {
        activarModoDark();
    }
});
