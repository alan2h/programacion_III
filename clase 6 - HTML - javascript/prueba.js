 // esto es un comment
        /*  
            esto es un comentari
            de doble linea
        */
            console.log('document');
            function metodo(){
    
            }
    
            var functionnueva = function metodo(){
                var nombre = 'alan';
            };
    
            // ecmascript 5
           
            // ecmascript 6 
            let nombre = 'alan';
    
            metodo_flecha = () => console.log('cualquier cosa');
            
            
            metodo_flecha();
    
            // condiciones
            let prueba = true;
            if (prueba){
                console.log('si');
            }else{
                console.log('no');
            }
    
            // tipos de datos
            numero = 9;
            decimal = 8.7;
            cadena = 'alan';
            no_definidos = undefined;
            banderas = true;
            nulos = null;
            fecha = new Date(); // variable 
            // tipos de datos complejos
            listas = ['A','B','C','D','E'];
            
            // iteraciones
            console.error(listas);
            for (let i = 0; i < listas.length; i += 1) {
                console.log(listas[i]);
            }
    
            // for each
    
            listas.forEach(element => console.log(element));
    
            // desestructuracion
            dicc = { 'nombre': 'alan', 'apellido': 'beck' };
            let {nombre1, apellido} = dicc;
            console.log(nombre1);