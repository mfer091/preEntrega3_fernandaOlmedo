
let carrito = [] ///aqui iran los items del carrito
const tabla = document.querySelector("#itemsTabla");
const btnAgregar = document.querySelector("#agregar");
const btnVaciar = document.querySelector("#vaciar");
const btnComprar = document.querySelector("#comprar");
const total = document.querySelector("#total");

allEventListenersCarrito();
function allEventListenersCarrito(){
    window.addEventListener("DOMContentLoaded", traerItemsCarrito);}

function traerItemsCarrito() {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  actualizarTablaCarrito();  
}

btnAgregar.addEventListener("submit", (e) => {
e.preventDefault(); ///evito el refresque
const productoSeleccionado = stock[+selectProductos.value]; ///obtengo el producto elegido
const indiceProducto = carrito.findIndex((item) => { 
    return item.producto.nombre == productoSeleccionado.nombre});
if (indiceProducto != -1)
{
    carrito[indiceProducto].cantidad++;
} else {
    const item = new Item(productoSeleccionado,1);
    carrito.push(item);
}

actualizarTablaCarrito();
localStorage.setItem("carrito", JSON.stringify(carrito)); //actualizo el carrito en el localStorage
});

function actualizarTablaCarrito() {
    tabla.innerHTML = '';
    total.innerText = 0;
    carrito.length || btnVaciar.setAttribute("disabled", true);
    carrito.forEach((item) => {
        newRow(item);
    });
}

function newRow(item) {
    const row = document.createElement("tr"); ///creo la fila
    let td = document.createElement("td");
    const posCarrito = carrito.indexOf(item); ///posicion del item en el carrito

    td.classList.add("tituloSign");
    td.textContent = item.producto.nombre;
    row.appendChild(td);

    td.classList.add("tituloSign");
    td = document.createElement("td");
    td.textContent = item.cantidad;
    row.appendChild(td);

    td.classList.add("tituloSign");
    td = document.createElement("td");
    td.classList.add("tituloSign");
    td.textContent =  `$ ${item.producto.precio}`;
    row.appendChild(td);

    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn";
    btnEliminar.textContent = "❌"; 
    btnEliminar.onclick = () => {
        carrito.splice(posCarrito,1);
        actualizarTablaCarrito();
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }

    td = document.createElement("td")
    td.appendChild(btnEliminar);
    row.appendChild(td);
    tabla.appendChild(row); ///le agrego al tbody una nueva fila
    btnVaciar.removeAttribute("disabled");

    ///calculo el total que tengo ahora

    total.innerText = "$ " + carrito.reduce((acumulador,item) => acumulador + item.producto.precio * item.cantidad,0);
}

btnVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    const confirmacion = confirm("¿Desea eliminar los items del carrito?");
        if (confirmacion) {
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarTablaCarrito();
        }
}

btnComprar.addEventListener("click", confirmarCompra);
function confirmarCompra(e) {
    e.preventDefault(); 
    const confirmacion = confirm("¿Desea finalizar su compra?");
    if (confirmacion) {
        const precioFinal = carrito.reduce((acumulador, item) => acumulador + item.producto.precio * item.cantidad, 0);
        alert("El monto a pagar es: $" + precioFinal);
    }
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarTablaCarrito();
}

