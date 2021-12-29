
class Usuario{
    constructor(nombres , apellidos, email, telefono, ciudad)
    {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.ciudad = ciudad;
        
    
    }

    guardar(nombreIngresado,apellidoIngresado,emailIngresado,telIngresado, locIngresado)
    {
       
        const newRegistro = new Usuario(nombreIngresado, apellidoIngresado, emailIngresado, telIngresado, locIngresado);


        localStorage.setItem(telIngresado, JSON.stringify(newRegistro))


    }

   
    

}




function enviarInfo() 
{

    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const ciudad = document.getElementById("ciudad").value;

    const miUsuario = new Usuario("","","","");
    miUsuario.guardar(nombres, apellidos, email, telefono, ciudad);

    alert("INFORMACIÓN ENVIADA DE FORMA EXISTOSA");
    
    window.location.href='contacto.html';
    
}



const botonEvent = document.getElementById("botonSub")

botonEvent.onmouseover = () => {
    botonEvent.style.backgroundColor="black";
    botonEvent.style.color="white";
    botonEvent.style.borderColor="white";

}

botonEvent.onmouseout = () => {
    botonEvent.style.backgroundColor="white";
    botonEvent.style.color="black";
}




function printUsuariosRegistrados()
{
    for(let i=0; i<localStorage.length; i++)
    {
        const llave = localStorage.key(i);
        const dato = JSON.parse(localStorage(llave));
        
        const plantillaUsuario = `<p class="usuario">El telefono de: ${dato.nombres+" "+dato.apellidos} es <i>${dato.telefono}</i></p>` 

        const nodoParaLista = document.getElementById("listaUsuarios");
        nodoParaLista.innerHTML+=plantillaUsuario;
        
    }
} 






