let frutas = ['peras', 'manzanas', 'bananas', 'naranjas'];

let persona = ['Pepe', 123456789, 'San Marín 200', true, 'Córdoba']



console.log('==================================')

// Un ,etpdp ára cpmpcer la cantidad de elementos que tiene el arreglo(array)
//nombreArreglo.length

console.log(`Los elementos del arreglo frutas son: ${frutas.length}`)


console.log(`Los elementos del arreglo persona son: ${persona.length}`)

console.log('==================================')

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

console.log('==================================')

//Bucle: es un ciclo repetitivo de codigo segun el uso
// for

//      inicio     limite      paso
for (let i = 0; i < 4  ; i++  ) {
    console.log(`Estamos contando desde ${i} hasta 4`);
}

console.log('==================================')


//      inicio          limite        paso
for (let i = 0; i < persona.length  ; i++  ) {
    console.log(`Los datos de la persona son: ${persona[i]}`);
}

console.log('==================================')


//      inicio          limite        paso
for (let i = 0; i <= persona.length  ; i++  ) {
    console.log(`Los datos de la persona son: ${persona[i]}`);
}

console.log('==================================')

for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}

console.log('==================================')

let productos = [];

console.log(`Los datos de los productos son ${productos}`)
console.log(`La cantidad de los elementos en productos son ${productos.length}`)

console.log('==================================')

// agregamos con el metodo nombreArreglo.push
productos.push('Coca Cola')

console.log(`Los datos de los productos son ${productos}`)
console.log(`La cantidad de los elementos en productos son ${productos.length}`)

productos.push('pepas')

console.log('==================================')

console.log(`Los datos de los productos son ${productos}`)
console.log(`La cantidad de los elementos en productos son ${productos.length}`)