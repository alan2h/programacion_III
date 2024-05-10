<?php

    class Persona{
        //private // solamente se puede utlizar en esta clase
        //public // acceso publico
        protected $nombre = ''; // acceso en esta clase y la que hereda 
        protected $apellido = '';
        public function __construct() {
           
        }
        
        function caminar(){
            $this->apellido = 'asdsadas';
        }


    }

    class Empleado extends Persona{
        static function create(){ // no se usa en la instancia

        }
    }

    Empleado::create();// acceder a un metodo estatico
    
    $persona = new Persona();
    $persona->caminar();
?>