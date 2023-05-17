document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    const nombreUsuario = document.getElementById("nombre").value;
    const apellidoUsuario = document.getElementById("apellido").value;
    const emailUsuario = document.getElementById("email").value;
    const mensajeUsuario = document.getElementById("mensaje").value;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>Nombre: ${nombreUsuario}</p>
                        <p>Apellido : ${apellidoUsuario}</p>
                        <p>email : ${emailUsuario}</p>
                        <p>Mensaje : ${mensajeUsuario}</p>
    `;

    document.getElementById("formulario").reset();
});