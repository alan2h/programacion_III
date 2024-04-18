<?php
    require_once('conexion.php');

    class Usuario{
        private $nombre_usuario;
        private $password;
        private $id_perfil;

        public function __construct($nombre_usuario, $password, $id_perfil){
            $this->nombre_usuario = $nombre_usuario;
            $this->password = $password;
            $this->id_perfil = $id_perfil;
        }

        public function guardar(){
            $mysql = new Conexion();
            $query = 'INSERT INTO usuarios VALUES("$this->nombre_usuario", "$this->password", 1)';
            $resultado = $mysql->insertar($query);
            return $resultado;
        }

       

    }
    $usuario = new Usuario('alan_b', 'asdad', 1);
    $usuario->guardar();
?>
