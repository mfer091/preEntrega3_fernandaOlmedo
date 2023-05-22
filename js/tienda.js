
let stock = [] ///aqui iran los productos
const selectProductos = document.querySelector("#productos");


///ejecutar una vez para cargar el localStorage con stock
/* stock.push(new Producto("Remera", 3500));
stock.push(new Producto("Pantalon", 7000));
stock.push(new Producto("Sweater", 8500));
stock.push(new Producto("Buzo", 6500));
stock.push(new Producto("Camisa", 4500));
stock.push(new Producto("Jean", 9000));
stock.push(new Producto("Polera", 4300));
stock.push(new Producto("Campera", 10000));


localStorage.setItem('stock',JSON.stringify(stock)); */


allEventListenersStock();
function allEventListenersStock(){
  window.addEventListener('DOMContentLoaded', traerItemsStock);
}
function traerItemsStock()
{
  stock = JSON.parse(localStorage.getItem("stock")) || [];
  cargarSelect();
}
function cargarSelect() {
  stock.forEach((producto,index) => {
    const option = document.createElement("option");
    option.textContent = `${producto.nombre} - $ ${producto.precio}`;
    option.value = index;
    selectProductos.appendChild(option);
  });
}



