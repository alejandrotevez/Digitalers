

console.log('=========================================');
console.log('======= Cargamos Productos - DOM ========');
console.log('=========================================');

let stockProductos = []

let miBoton = document.getElementById('miBoton');

let botonBuscar = document.getElementById('buscar').value;
console.log(botonBuscar);

function buscarProducto() {
    console.log('Buscando producto...');
    console.log(botonBuscar);
} 


const cargarProductos = () => {

    console.log('Cargando productos...');

    //1. Obtenemos los datos desde el DOM
    let productoCargado = document.getElementById('producto').value;
    let precioCargado = document.getElementById('precio').value;

    //2. Creamos un objeto para guardar los datos
    let producto = {
        nombre: productoCargado,
        precio: precioCargado
    }

    //3. Imprimimos de ejemplo el producto obtenido
    console.log(producto);

    //4. Agregamos el producto al array de productos
    stockProductos.push(producto);

    miBoton.style.display = 'revert';


}

const imprimirProductos = () => {

    console.log('Imprimiendo productos...');

    for (let i = 0; i < stockProductos.length; i++) {
        console.log(stockProductos[i]);
    }

}



//obtener el elemento para agregarle el evento
let miBotonIMPRIMIR = document.getElementById('botonImprimir')

// Una de las formas para activar el evento
// miBotonIMPRIMIR.addEventListener('click', imprimirProductos)

//evento con una funcion anonima
miBotonIMPRIMIR.addEventListener('click', function(){
    console.log('Soy una funcion anonima');
})

//evento con una arrow function
miBotonIMPRIMIR.addEventListener('click', () => {

    event.preventDefault();//evitar que se ejecute la funcion por defecto
    console.log('Soy una funcion flecha');

    for (let i = 0; i < stockProductos.length; i++) {
        console.log(stockProductos[i]);
    }

    cargarTabla()
})

const cargarTabla = () => {
    let miTabla = document.getElementById('miTabla')

    //creamos el row, la fila
    let fila = document.createElement('tr')

    //creamos las celdas a los td
    let celdaNombre = document.createElement('td')
    let celdaPrecio = document.createElement('td')

    for (let i = 0; i < stockProductos.length; i++) {

        //agregamos datos a la primer td
        celdaNombre.innerText = stockProductos[i].nombre;
        console.log(celdaNombre);
        
        // agregamos el segundo dato al td
        celdaPrecio.innerText = stockProductos[i].precio;
        console.log(celdaPrecio);

        //subimos la celda a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);

        miTabla.appendChild(fila)
    }
    
    let pieDeTabla = document.getElementById('pieDeTabla');

    pieDeTabla.innerText
}