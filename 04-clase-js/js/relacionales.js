console.log('==================')
console.log(' Relacionales en Js');
console.log('==================')

console.log('\x1b[30m%s\x1b[0m', 'Negro');
console.log('\x1b[31m%s\x1b[0m', 'Rojo');
console.log('\x1b[32m%s\x1b[0m', 'Verde');
console.log('\x1b[33m%s\x1b[0m', 'Amarillo');
console.log('\x1b[34m%s\x1b[0m', 'Azul');
console.log('\x1b[35m%s\x1b[0m', 'Magenta');
console.log('\x1b[36m%s\x1b[0m', 'Cian');
console.log('\x1b[37m%s\x1b[0m', 'Blanco');


let hola = 'hola';

console.log(hola)

// < > = == ! 

let uno = 25;
let dos = 30;

let resultado = uno < dos

console.log('uno(25) es menor que dos(30): ' + resultado);

resultado = uno > dos;

console.log('uno(25) es mayor que dos(30): ' + resultado);

resultado = uno == dos;

console.log('uno(25) es igual que dos(30): ' + resultado);

resultado = uno === dos;

console.log('uno(25) es igual (tipo de dato) que dos(30): ' + resultado);

console.log('=============================');

let mayorEdad = false;

console.log('El alumno no es: ' + !mayorEdad)

console.log('=============================');
console.log('Condicionales')
console.log('=============================');

//estructura de un condicional
// if (condition igual a true) {se ejecuta el codigo dentro de las llaves}
// if (condition igual a false) {NO se ejecuta el codigo dentro de las llaves}

let edad = 18;

if (edad > 18) {
    console.log('1.El alumno es mayor de edad');
}

if (edad >= 18) {
    console.log('2.El estudiante puede comprar bebidas');
}

let pasaporte = false;
// if else : si o sino
if (pasaporte == true) {
    console.log('True: puede viajar tranquilamente')
} else {
    console.log('False: necesita el pasaporte para salir del pais');
}

if (pasaporte) {
    console.log('True: puede viajar tranquilamente')
} else {
    console.log('False: necesita el pasaporte para salir del pais');
}

console.log('=============================');
console.log('Ejercicios con el DOM')
console.log('=============================');


//los datos por el prompt por default vienen con el tipo string
//necesito convertirlos a tipo de dato numerico para operaciones matematicas
//parseInt() => convierte un dato a tipo numero entero
//parseFloat() => convierte un dato a un tipo numero decimal


let miNumero = parseFloat(prompt('Introduce un numero: '));
console.log(`El numero guardado es ${miNumero}`);

let otroNumero = parseFloat(prompt('Introduce otro numero para la operacion: '));
console.log(`El otro numero es ${otroNumero}`)

resultado = miNumero + otroNumero;

// funcion que comenta que tipo de dato es la variable que evaluamos
console.log(typeof resultado);

alert(`El resultado de la suma de tus numeros es ${resultado}`)



console.log('=============================');

let dato = prompt('Un dato:')
let numeroDado = parseInt(dato)


//ventana nativa de JS para introducir datos
//prompt('Hola, saludos desde el Prompt')

/* let miEdad = prompt('Introduce tu edad: ');

console.log(`La edad del cliente es ${miEdad}`);

//alert(`La edad del cliente es: ${miEdad}`);

if (miEdad >= 20) {
    alert(`Como tienes ${miEdad}, puedes viajar sin autorizacion de tus padres`)
} else {
    alert(`Como tienes ${miEdad}, necesitas autorizacion para salir del pais`)
} */

