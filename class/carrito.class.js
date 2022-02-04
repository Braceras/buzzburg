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
        localStorage.setItem('productos', JSON.stringify(producto));
    }
    
   

    agregarProducto(producto){

        const contadorProd = document.getElementsByClassName("contadorProd");
            
            for(let i=0; carrito.length;i++){
                if(carrito[i].nombre.trim() === producto.nombre.trim()){
                    console.log(carrito);
                    carrito[i].cantidad++;
                    const contadorValue = contadorProd[i]
                    contadorValue.value++;
                    this.totalizar();
                    return null;
                }
            }
    
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