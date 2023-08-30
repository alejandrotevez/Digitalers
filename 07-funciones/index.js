console.log('=================================');
console.log('============Funciones============');
console.log('=================================');

//funciones: bloques de codigo que ejecutan cierta tarea
/* 
if () {
    
}

for (let index = 0; index < array.length; index++) {

    
}

switch (key) {
    case value:
        
        break;

    default:
        break;
} */

// palabra reservada nombre (params)
function dameNombre() {
    console.log('Mi nombre es Pepe');
}

//una funcion solo se ejecuta cuando la invocamos
dameNombre();

console.log('=================================');


let nombre = 'Juan'//variable de tipo global

function dameNombreParams(nombrePersona, k , l, o, p, i, y, u, r5, h) {//variable tipo local
    console.log('Mi nombre es Pepe');
    console.log(nombre);
    console.log(nombrePersona);
    console.log(r5);
}

// console.log(r5); 

dameNombreParams('Maria');

console.log(nombre);

console.log('===============================');

dameNombreParams(nombre);

//                     1     2     3     4    5....
dameNombreParams('Santiago', 5, 'hola', 100, 50, 10, 80, 89, 150, 800, 1000)

console.log('===============================');

let otroNombre ='Carlos';
function funtionParametro(miNombre, callback) {

    console.log(`Mi nombre es: ${miNombre}`);

    callback();
}

funtionParametro(otroNombre, miPais)

function miPais() {
    console.log('Mi pais es Argentina');
}

console.log('===============================');

const flecha = () => {
    console.log('Soy una funcion Flecha');
}

flecha('saludo')

console.log('===============================');

function funtionReturn(a, b) {

    let resultado;

    resultado = a * b

    return resultado

    console.log(`El resultado de la multiplicacion es: ${resultado}`);
}
let numUno = 5000;
let numDos = 250;

let resultado = funtionReturn(numUno, numDos);

console.log(resultado);

console.log('===============================');