
let arrayUsuarios = [];

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


        arrayUsuarios.push(newRegistro);
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
    
    window.location.href='contacto.html';
    
}


