let nombre = 'alan';
let edad = 23;
let moneda = 9.8;

let animales = ['perro', 'gallina', 'jirafa', 'pato'];
let concierto = {'nombre': 'Metallica', 'personas': 145};

let conciertos = [
    {'nombre': 'Metallica', 'personas': 145},
    {'nombre': 'Soulfly', 'personas': 155},
    {'nombre': 'Miranda', 'personas': 245},
]

console.warn(conciertos[1]['nombre']);

conciertos.forEach((concierto) => {
    console.table(concierto);
});

for (let indice = 0; indice < animales.length; indice++) {
    console.log(animales[indice]);
}

animales.forEach((animal) => {
    console.log(animal);
});

console.log(concierto['nombre']);

if (!(concierto['nombre'] == 'Metallica' || concierto['nombre'] == 'Soulfly')) {
    // se cumple algo
}else{
    // otro camino
}

// or || 
// and &&
