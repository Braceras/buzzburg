class Carrito {
    constructor(productos, detallesOrden)

    {
        this.productos=productos,
        this.detallesOrden=detallesOrden
    }

    agregarProducto(hamburguesa){
        this.productos.push(hamburguesa);
    }

    quitarProducto(hamburguesa){
        const index = this.productos.findIndex(element=> element===hamburguesa);
        this.productos.splice(index,1);
    }

    totalizar(){
        let suma=0;

        for(let i=0;i<this.productos.length;i++)
        {
            let hamburguesa=this.productos[i];
            suma+= parseFloat(hamburguesa.precio);
        }
        return suma;
    }




}
