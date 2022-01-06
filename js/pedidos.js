// Buzzburg
// Menú Buzzburg


function agregarPedidoHam1()
{
    const buzzburger = new hamburguesa("Buzzburger", "cheddar", "lechuga, jitomate", "BuzzSauce", false, 500) 

    console.log(buzzburger);
    alert("SU ORDEN ES: "+buzzburger.nombre+ " $"+buzzburger.precio);

    JSON.stringify(buzzburger);



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



function actualizarCarrito()
{
    const nodoCarrito = document.getElementById("carrito")
    nodoCarrito.innerHTML="";
    const productos = carrito.productos;

    let contador = 0;
    while(contador<productos.length){

        let producto = productos[contador];

        let item = document.createElement("div");
        item.innerHTML=`<hr><div><h3>${hamburguesas.nombre}</h3></div>
                        <div>$${hamburguesas.precio}</div>`;

        nodoCarrito.appendChild(item);

        let botonQuitar = document.createElement("button");
        botonQuitar.innerHTML="Eliminar del carrito";
        botonQuitar.onclick=() =>
        {
            if(confirm("Seguro desea quitar este elemento?")){
                carrito.quitarProducto(producto);
                actualizarCarrito();
            }
        }

        nodoCarrito.appendChild(botonQuitar);

        contador++;
    }

    const nodoContendorTotal = document.createElement("div");
    nodoContendorTotal.appendChild(document.createElement("hr"));
    const total = carrito.totalizar();

    const nodoTotal = document.createElement("div");
    nodoTotal.innerHTML=total;
    
    nodoContendorTotal.appendChild(nodoTotal);
    nodoCarrito.appendChild(nodoContendorTotal);
}









































/*
class Informacion{
    constructor(nombre, direccion, paga, telefono)
    {
        this.nombre = nombre;
        this.direccion = direccion;
        this.paga = paga;
        this.telefono = telefono;
    }

    infoCliente(nombreIngresado, direccionIngresada, pagaIngresada, telefonoIngresado)
    {
        const cliente = new Informacion(nombreIngresado, direccionIngresada, pagaIngresada, telefonoIngresado);

        localStorage.setItem(direccionIngresada, JSON.stringify(cliente));


    }
} */
