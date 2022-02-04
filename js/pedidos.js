
 const carrito = new Carrito([], {});



function init()
{
   listarCategorias();
   
   
}


function listarCategorias(){

      const nodoCategorias = document.getElementById("categorias")
      let contenido="<ul>";

      for(categoria of categorias)
      {
         contenido+=`<li onclick="listarProductos(${categoria.id})">${categoria.nombre}</li>`;
      }
      
      contenido+="</ul>";

      nodoCategorias.innerHTML=contenido;



}



function listarProductos(idCategoria)
{
   const nodoProductos = document.getElementById("productos")
   nodoProductos.innerHTML="";
   let lista=document.createElement("div");

   const productosCategoria= productos.filter(element=> element.categoria===idCategoria);


   for(let i=0;i<productosCategoria.length; i++)
   {
      let producto = productosCategoria[i];

      let item  = document.createElement("div");
      item.innerHTML=`<div class="prods"><div><h3>${producto.nombre}</h3></div>
                        <div class=""><img src = ${producto.img} /></div>
                        <div>${producto.orden}</div>
                      <div>$${producto.precio}</div></div>
                      `;2

      

      let boton = document.createElement("button");
      
      boton.onclick = () => {
         
         carrito.agregarProducto(producto);
         carrito.guardarPedido(producto);
         actualizarCarrito();
         
            
      }
      

      boton.innerHTML="Agregar a mi pedido";

      

      item.appendChild(boton);

      lista.appendChild(item);
      

   }
   nodoProductos.appendChild(lista);

   
}

function actualizarCarrito()
{


   //Listar el carrito

   const nodoCarrito = document.getElementById("carrito");
   nodoCarrito.innerHTML="";
   
   const productos = carrito.productos;

   let contador = 0;
   while(contador<productos.length)
   {
      let producto = productos[contador];

      let item  = document.createElement("div");
      item.innerHTML=`  <div class="carri"><div><h3>${producto.nombre}</h3></div>
                        <div class="imgCarrito"><img src = ${producto.img} /></div>
                        <input class="contadorProd" type="number" min="1" value=${producto.cantidad}>
                        <div>${producto.orden}</div>
                        <div>Precio: $${producto.precio}</div></div>
                      `;
      nodoCarrito.appendChild(item);

      




      let botonQuitar = document.createElement("button");
      botonQuitar.innerHTML="ELIMINAR DEL CARRITO";
      botonQuitar.onclick=()=>
      {
         
               carrito.quitarProducto(producto);
               actualizarCarrito();
         
      }
      

      nodoCarrito.appendChild(botonQuitar);

      contador++;

   }
   const nodoContendorTotal = document.createElement("div");
   nodoContendorTotal.innerHTML="<hr>";
   
   
   const total = carrito.totalizar();

   const nodoTotal = document.createElement("div");
   nodoTotal.innerHTML= "Total: $" + total;

   nodoContendorTotal.appendChild(nodoTotal);

   nodoCarrito.appendChild(nodoContendorTotal);






}