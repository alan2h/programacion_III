// callback function

let variable = function ( nombre, edad ){
  return nombre + ' ' + edad;   
}

let edad = function (){
    return 33
}

console.log(variable('alan', edad()));

