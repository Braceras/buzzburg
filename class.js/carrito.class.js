class Carrito {

    constructor(productos, detallesOrden)

    {
        this.productos=productos,
        this.detallesOrden=detallesOrden
    }

    agregarProducto(producto){
        this.detallesOrden.push(producto);
    }
} 