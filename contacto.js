
class Usuario{
    constructor(nombres , apellidos, email, telefono, ciudad, mensaje)
    {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.mensaje = mensaje;
    
    }

    guardar(nombreIngresado,apellidoIngresado,emailIngresado,telIngresado, locIngresado, mensajeIngresado)
    {
       
        const newRegistro = new Usuario(nombreIngresado, apellidoIngresado, emailIngresado, telIngresado, locIngresado, mensajeIngresado);


        localStorage.setItem(telIngresado, JSON.stringify(newRegistro))

        alert("Registro realizado correctamente");

    }

   
    

}






function realizarContacto() 
{

    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const ciudad = document.getElementById("ciudad").value;
    const mensaje = document.getElementById("mensaje").value;

    const miUsuario = new Usuario("","","","");
    miUsuario.guardar(nombres, apellidos, email, telefono, ciudad, mensaje);

    alert("SU REGISTRO HA SIDO EXISTOSO");
    
    window.location.href='contacto.html';
    
}





function printUsuariosRegistrados()
{
    for(let i=0; i<localStorage.length;i++)
    {
        const llave = localStorage.key(i);
        const dato = JSON.parse(localStorage(llave));
        
        const plantillaUsuario = `<p class="usuario">La cédula de: ${dato.nombre+" "+dato.apellido} es <i>${dato.documento}</i></p>` 

        const nodoParaLista = document.getElementById("listaUsuarios");
        nodoParaLista.innerHTML+=plantillaUsuario;
        
    }
}