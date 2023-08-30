console.log("3. Hola mundo de JS")

// comentario de una sola linea
// console.log("3. Hola mundo de JS")

/* comentarios de varias lineas */

/*
console.log("3. Hola mundo de JS")
console.log("3. Hola mundo de JS")
console.log("3. Hola mundo de JS")
console.log("3. Hola mundo de JS")
*/

console.log("4. Hola mundo de JS")

// no podemos ejecutar node.js cuando usamos el DOM
// alert("Hola Gente")

// variables: son espacios de memoria para guardar datos
// declaracion de variable
let nombre;
var apellido;

// asignacion de vatiable
nombre = "Tomas" // tipo de dato string: letras
apellido = "Tevez"

let pais = "Argentina"

console.log("===================")

console.log('Mi nombre es ' + nombre + ' y mi apellido es ' + apellido + ', y vivo en ' + pais);

console.log('==================')

let provincia = 'Buenos aires'

const DNI = 44888699 // tipo de dato numerico

// no se pueden asignar los nombres de variables asi
/* let hola-mundo = 'hola'
let 123hola = 50
let hola mundo = 'pepe' */


// asi si se puede
let hola5 = 'hola'
let $hola = 'hola'
let hola_mundo = 'hola'

//camelCase
let nombreProvinciaPais = 'Buenos aires'

console.log('===============')

console.log('Mi nombre es ' + nombre + ' y mi apellido es ' + apellido + ', y vivo en ' + pais + ". Mi DNI es " + DNI + " y vivo en " + nombreProvinciaPais);

console.log('======================')

console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}, mi DNI es ${DNI} y vivo en ${provincia}`)

console.log('==================')

let decimal = 5.20;
let numero = 100;
let booleanos = true;
let otroBooleano = false;
let persona = {};
let desconocido;
let arreglo = []

console.log(decimal)
console.log(numero)
console.log(booleanos);
console.log(otroBooleano);
console.log(persona);
console.log(desconocido);
console.log(null);
console.log(arreglo);