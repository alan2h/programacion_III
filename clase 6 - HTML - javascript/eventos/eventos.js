
function buscar(){
    let palabra = document.getElementById('id_texto').value;
    console.log(palabra);
    if (palabra.length > 0){
        document.getElementById('id_button').style.display = 'block';
    }else{
        document.getElementById('id_button').style.display = 'none';
    }
}