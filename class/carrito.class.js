class Carrito {


    constructor(

        productos,
        detallesOrden


    )
    {
        this.productos=productos,
        this.detallesOrden=detallesOrden
    }
    guardarPedido(producto){
         const pedido = localStorage.setItem('productos', JSON.stringify(producto));
         return pedido;
        

    }

    agregarProducto(producto){
        this.productos.push(producto);
    }

    quitarProducto(producto)
    {
        const index = this.productos.findIndex(element=>element===producto);
        this.productos.splice(index,1);
    }

    totalizar()
    {
        let suma=0;
       
        for(var i=0;i<this.productos.length;i++)
        {

            let producto=this.productos[i];
            suma+= parseFloat(producto.precio);
        }
        return suma;

    }


}