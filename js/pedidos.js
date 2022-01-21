//Buzzburg
//Menu Buzzburg

$(()=> {
    mostrarContenido();
    obtenerProductos();
    imprimirCarrito(carrito);
    
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let productos;



function mostrarContenido(){
    const titulo = $("<h3></h3>");
    titulo.html("¡Realiza tu pedido en Buzzburg!");
    
    const nodoTitutlo = $(".mainClass");
    nodoTitutlo.prepend(titulo);
    titulo.css({
        "margin-bottom": "2rem",
        "padding": "0.4rem"
    });
    titulo.animate({
        "left": "10rem",
        "opacity": "1",
        "width": "18rem",
        "height": "3rem"
    },
        (1000),
        function(){
            titulo.fadeOut(3000);
        });
    
    
}
/*
    const titulo = $("<h3></h3>");
    titulo.html("Realiza tu pedido en Buzzburg");
    titulo.hide();
    const nodoTitutlo = $(".mainClass");
    nodoTitutlo.prepend(titulo);
    titulo.slideDown(1000); */

function obtenerProductos(){
    $.get("../data/productos.json", (respuesta, estado) => {
        productos = respuesta.products
        imprimirProductos(productos);
    });
}




function imprimirProductos(array){
    
    
    array.forEach((prod) => {
        $("#productos").append(
            `   <div class="burbuja">
                <img src = ${prod.img} />
                <h4>${prod.nombre}</h4>
                <p>${prod.orden}</p>
                <p>Precio: $${prod.precio}</p>
                <button id="${prod.id}" onclick="agregarAlCarrito(event)">Agregar a mi pedido</button></div>`
        );
    });
    
    
}


function agregarAlCarrito(e){
    
    let id = Number(e.target.id);
    let productoElegido = productos.find((p) => p.id === id);
    
    carrito.push(productoElegido);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    imprimirCarrito(carrito);

    
}

function imprimirCarrito(array){
    $("#carrito").empty();
    let total = 0;

    array.forEach((prod) => {

        total= total+prod.precio;

        $("#carrito").append(
            `<div class="burbuja">
                <img src = ${prod.img} />
                <h4>${prod.nombre}</h4>
                <p>${prod.orden}</p>
                <p>Precio: $${prod.precio}</p>
                <button id="${prod.id}" class="eliminar" onclick="eliminarProducto(event)">Eliminar</button>
            </div>`
        );
    });

    $("#carrito").append(
        `<span class="total">Total: $${total.toFixed(2)}</span>`
    );
}

function eliminarProducto(e){
    let id = Number(e.target.id);
    let index = carrito.findIndex((p) => p.id === id);
    
    carrito.splice(index, 1);
    imprimirCarrito(carrito);

    localStorage.setItem("carrito", JSON.stringify(carrito));
}















































/*
function init(){
    listarCategorias();
}

function listarCategorias(){

    const nodoCategorias= $("#categorias")[0];

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

    const nodoProductos=$("#productos")[0];
    
    let lista = "<div>";

    const productosCategoria=productos.filter(elemento => elemento.categorias===idCategoria)

    for(producto of productosCategoria)
    {
        
        lista+=`<div class="burbuja">
                <img src = ${producto.img} />
                <h4>${producto.nombre}</h4>
                <p>${producto.orden}</p>
                <p>Precio: $${producto.precio}</p>
                <button>Agregar a mi pedido</button></div><hr>
                ${actualizarCarrito()}`;
        }

        lista+= "</div>";

    nodoProductos.innerHTML=lista;

       
}



function actualizarCarrito()
{
    const nodoCarrito = $("#carrito"); 

}
*/







































/*
function agregarPedidoHam1()
{
    const buzzburger = new hamburguesa("Buzzburger", "cheddar", "lechuga, jitomate", "BuzzSauce", false, 500) 

    console.log(buzzburger);
    alert("SU ORDEN ES: "+buzzburger.nombre+ " $"+buzzburger.precio);

    JSON.stringify(buzzburger);

    const nodoCarrito = document.getElementById("carrito");
    nodoCarrito.innerHTML="";
    let producto = document.createElement("div");
    producto.innerHTML=`<hr><div><h3>${buzzburger.nombre}</h3></div>
                        <div>$${buzzburger.precio}</div>`;

    nodoCarrito.appendChild(producto);

                        

    

}
function agregarPedidoHam2() 
{
    const cheeseburger = new hamburguesa("Cheeseburger", "cheddar", false, "BuzzSauce", false, 400)

    console.log(cheeseburger);
    alert("SU ORDEN ES: "+cheeseburger.nombre+ " $"+cheeseburger.precio);

    JSON.stringify(cheeseburger);
    
}
function agregarPedidoHam3()
{
    const chiliBuzzburger = new hamburguesa("Chili Buzzburger", "cheddar", false, "Mostaza Suave", ["chile picante, pickles"], 600)

    console.log(chiliBuzzburger);
    alert("SU ORDEN ES: "+chiliBuzzburger.nombre+ " $"+chiliBuzzburger.precio);

    JSON.stringify(chiliBuzzburger);
    
}
function agregarPedidoHam4()
{
    const butterBuzzburger = new hamburguesa("Butter Buzzburger", "cheddar", false, false, ["Cebolla reahogada en manteca y fondo de carne, manteca"], 600)

    console.log(butterBuzzburger);
    alert("SU ORDEN ES: "+butterBuzzburger.nombre+ " $"+butterBuzzburger.precio);

    JSON.stringify(butterBuzzburger);
    
}
function agregarPedidoHam5()
{
    const doubleBuzzburger = new hamburguesa("Double-Double Buzzburger", "cheddar", "lechuga, tomate", "BuzzSauce", "lonja de cebolla", 600)

    console.log(doubleBuzzburger);
    alert("SU ORDEN ES: "+doubleBuzzburger.nombre+ " $"+doubleBuzzburger.precio);

    JSON.stringify(doubleBuzzburger);
    
}
function agregarPedidoHam6()
{
    const smokeBuzz = new hamburguesa("Smoke Buzz", "cheddar", "ají", "BuzzSauce", "bacon", 600)

    console.log(smokeBuzz);
    alert("SU ORDEN ES: "+smokeBuzz.nombre+ " $"+smokeBuzz.precio);

    JSON.stringify(smokeBuzz);
    
} 

*/









































