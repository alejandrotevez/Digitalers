console.log('=============================');
console.log('Crear una calculadora')
console.log('=============================');

let miNumero = parseFloat(prompt('Introduce un numero: '));
console.log(`El numero es ${miNumero}`);

let dato = prompt('Introduce un tipo de dato para la cuenta');
console.log(`El dato es ${dato}`)

let otroNumero = parseFloat(prompt('Introduce otro numero para la operacion: '));
console.log(`El otro numero es ${otroNumero}`)


resultado = miNumero + dato + otroNumero;
alert(`El resultado de la cuenta es${resultado}`)