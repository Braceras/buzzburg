//Buzzburg
//Menu Buzzburg

$(()=> {
    mostrarContenido();
    
    obtenerHams();
    imprimirCarrito(carrito);
    
    
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let hamburguesas = JSON.parse(localStorage.getItem("hamburguesas")) || [];

let hamburs;



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


function obtenerHams(){
    
    $.get("../data/hamburs.json", (respuesta, estado) => {
        ham = respuesta.hams;
        imprimirHams(ham);
    });
}



function imprimirHams(array){
    
    $("#productos").empty();
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
    let productoElegido = ham.find((p) => p.id === id);
    
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

