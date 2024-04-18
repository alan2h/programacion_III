<?php

class Conexion{
    private $_con;
    private $servidor;
    private $usuario;
    private $password;
    private $base_datos;

    public function __construct(){
        $this->servidor = 'localhost';
        $this->usuario = 'root';
        $this->password = '$[4C9sQl+£*3';
        $this->base_datos = 'usuarios';
    }

    public function conectar(){
        $this->_con = new mysqli($this->servidor, $this->usuario, $this->password, $this->base_datos);
    }


    public function desconectar(){
        $this->_con->close();
    }

    public function consultar($query){
        $this->conectar();
        $datos = $this->_con->query($query);
        $this->desconectar();
        return $datos;
    }

    public function insertar($query){
        $this->conectar();
        $this->_con->query($query);
        $id = $this->_con->insert_id;
        $this->desconectar();
        return $id;
    }




}

?>