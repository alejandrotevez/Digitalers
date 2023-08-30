

//1. Crear una variable pora utilizar el modulo nativo de node HTTP
const { log } = require('console');
const http = require('http');

//2. Creamos un servidor nativo y la podemos guardar en una variable
//const server = http.createServer(function(req, res){});
const server = http.createServer((request, response) =>{
    console.log('=============');

    console.log(request);

    console.log('=============');

    console.log(request.url);

    if (request.url === '/') {
        response.end(`<h1>Pepe Responde</h1>`)
        console.log('vino una peticion desde la ruta HOME');
    } else if(request.url == '/formulario'){
        response.end(`<h1>Formulario de Contacto</h1>
        <br>
        <form>  
        <input type="text" placeholder="Nombre">
        <input type="button" value="Enviar Datos">
        </form>`)
        console.log('vino una peticion desde la ruta fORMULARIO');
    }else{
        response.end(`<h1 style="color: red">No reconocemos ese path</h1>`)
    }
    

    console.log('=============');

    console.log(request.method);

    console.log('=============')
    console.log(`Sevidor trabajando....`);
    console.log('=============')

});


//3. Creamos un puerto para que el servidor escuche las peticiones
PORT = 8080;

server.listen(PORT, ()=>{
    console.log(`Sevidor escuchando en el puerto http://localhost:${PORT}`)
})