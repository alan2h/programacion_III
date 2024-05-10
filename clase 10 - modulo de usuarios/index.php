<?php


require_once "controladores/plantilla.controlador.php"; // importamos controlador
require_once "controladores/usuarios.controlador.php"; // importamos usuarios controlador

$plantilla = new ControladorPlantilla(); // instanciamos

$plantilla->obtenerPlantilla(); // nos va a devolver la plantilla
