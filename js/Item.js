///Carrito
class Item {
    ///atributos
    producto; /// de tipo Producto
    cantidad; /// de tipo Number

    ///constructor
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    
    ///metodos
    precioTotal() {
        return this.cantidad * this.producto.precio;
    }
}