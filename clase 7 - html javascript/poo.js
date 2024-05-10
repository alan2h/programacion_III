// clases
class Persona {
    color_cabello = '';
    color_ojos = '';
    constructor(cabello, color_ojos){
        this.color_cabello = cabello;
        this.color_ojos = color_ojos;
    }

    guardar(){
        this.color_cabello = 'null';
    }
}

let alan = new Persona('marron', 'negros'); // objeto en un espacio diferente
let fulanito = new Persona('rubio', 'verdes');

console.log(alan, fulanito);

fulanito.guardar();

// herencia en javascript

class Empleado extends Persona {
    constructor(){
        
    }
    static metodo_cualquiera(){
        return 'hola desde metodo'
    }
}

let empleado_1 = new Empleado('asdasd', 'asdasdad');

console.log(Empleado.metodo_cualquiera());

console.log(empleado_1, 'empleado');

// metodos estaticos

