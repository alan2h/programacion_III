<?php

    require_once ('conexion.php');

    // error_reporting(E_ALL);
    // ini_set('display_errors', 'On');
    $conexion = new Conexion();
    $query = 'SELECT * FROM usuarios';
    $resultado = $conexion->consultar($query);
    $clientes = array();
    while ($fila = $resultado->fetch_assoc()) {
        $clientes[] = $fila;
    }
    //$clientes = array('prueba' => 'json');
    echo json_encode($clientes);

