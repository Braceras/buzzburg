class hamburguesa{

    constructor(nombre, tipoDeQueso, verduras, aderezos, adicionales, precio)
    {
        this.nombre = nombre;
        this.tipoDeQueso = tipoDeQueso;
        this.verduras = verduras;
        this.aderezos = aderezos;
        this.adicionales = adicionales;
        this.precio = precio;

        localStorage.setItem(nombre, JSON.stringify(hamburguesa));
    }
    
    
    
}