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
}


// Buzzburg
// Menú Buzzburg

class hamburguesa{

    constructor(nombre, tipoDeQueso, verduras, aderezos, adicionales, precio)
    {
        this.nombre = nombre;
        this.tipoDeQueso = tipoDeQueso;
        this.verduras = verduras;
        this.aderezos = aderezos;
        this.adicionales = adicionales;
        this.precio = precio;
    }
    tomar(nombre, tipoDeQueso, verduras, aderezos, adicionales, precio)
    {
        const pedido = new hamburguesa(nombre, tipoDeQueso, verduras, aderezos, adicionales, precio);
        localStorage.setItem(nombre, JSON.stringify(pedido));
    }

    getIva()
    {
        return this.precio*0.21;
    }
    
}

const buzzburger = new hamburguesa(
    "Buzzburger",
    "cheddar",
    "lechuga, jitomate",
    "BuzzSauce",
    false,
    500,
)
const cheeseburger = new hamburguesa(
    "Cheeseburger",
    "cheddar",
    "lechuga, tomate, cebolla",
    "mayonesa, ketchup, mostaza, BuzzSauce",
    ["bacon, cebolla caramelizada, pickles, champinion"],
    400,
)
const chiliBuzzburger = new hamburguesa(
    "Chili Buzzburger",
    "cheddar",
    false,
    "mayonesa",
    ["chile picante, pickles"],
    600,
)
const butterBuzzburger = new hamburguesa(
    "Butter Buzzburger",
    "cheddar",
    false,
    false,
    ["Cebolla reahogada en manteca y fondo de carne, manteca"],
    600,
)
const doubleBuzzburger = new hamburguesa(
    "Double-Double Buzzburger",
    "cheddar",
    "lechuga, tomate",
    "BuzzSauce",
    "lonja de cebolla",
    600,
)
const smokeBuzz = new hamburguesa(
    "Smoke Buzz",
    "cheddar",
    "ají",
    "BuzzSauce",
    "bacon",
    600,
)


function agregarPedidoHam1()
{
   buzzburger.tomar(nombre, tipoDeQueso, verduras, aderezos, adicionales, precio);
   alert("SU ORDEN ES: "+buzzburger+ " "+buzzburger.precio);
}
function agregarPedidoHam2()
{
    cheeseburger.tomar(nombre, tipoDeQueso, verduras, aderezos, adicionales, precio);
   alert("SU ORDEN ES: "+cheeseburger+ " "+cheeseburger.precio);
}
function agregarPedidoHam3()
{
    chiliBuzzburger.tomar(nombre, tipoDeQueso, verduras, aderezos, adicionales, precio);
   alert("SU ORDEN ES: "+chiliBuzzburger+ " "+chiliBuzzburger.precio);
}function agregarPedidoHam4()
{
    butterBuzzburger.tomar(nombre, tipoDeQueso, verduras, aderezos, adicionales, precio);
   alert("SU ORDEN ES: "+butterBuzzburger+ " "+butterBuzzburger.precio);
}function agregarPedidoHam5()
{
    doubleBuzzburger.tomar(nombre, tipoDeQueso, verduras, aderezos, adicionales, precio);
   alert("SU ORDEN ES: "+doubleBuzzburger+ " "+doubleBuzzburger.precio);
}function agregarPedidoHam6()
{
    smokeBuzz.tomar(nombre, tipoDeQueso, verduras, aderezos, adicionales, precio);
   alert("SU ORDEN ES: "+smokeBuzz+ " "+smokeBuzz.precio);
}