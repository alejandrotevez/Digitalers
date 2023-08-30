let producto= []

alert('Llenaremos datos de formulario Productos');

console.log('============================');

let confirmar = confirm('Quiere comer?')

if(confirmar == true){
    alert('Menu: 1. Milanesa 2. Papas')
}

console.log('============================');

let guardarProducto = confirm('¿quiere cargar datos en productos?')

while (guardarProducto) {

    let nombreProducto = prompt('Ingrese nombre del producto:')

    producto.push(nombreProducto)

    console.log('============================');

    for (let i = 0; i < producto.length; i++) {
        console.log(`Producto: ${producto[i]}`);
        console.log(`La cantidad de productos en stock es: ${producto.length}`);
        
    }

    console.log('============================');
}








//bucle mientras
/* while () {
    console.log('Hola while');
} */