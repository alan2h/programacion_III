function validar() {
    let nombre = document.getElementById("id_nombre");
    let apellido = document.getElementById("id_apellido");
    console.log(nombre, apellido);
    nombre.classList.remove('error');//remueve css
    document.getElementById('id_mensaje_nombre').style.display = 'none';
    apellido.classList.remove('error');
    document.getElementById('id_mensaje_apellido').style.display = 'none';
    if (nombre.value == "") {
        //alert('el campo nombre es requerido')
        document.getElementById('id_mensaje_nombre').style.display = 'block';
        nombre.classList.add('error'); // agrega css
    }
    if (apellido.value == "") {
        //alert('el campo apellido es requerido')
        document.getElementById('id_mensaje_apellido').style.display = 'block';
        apellido.classList.add('error');
    }
    if (apellido.value != "" && nombre.value != "") { // si esta todo ok, envia los datos
        document.getElementById('id_form').submit(); // hace el submit
    }
}