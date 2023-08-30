
//JS en ES5: common.js
// 1.Creamos una variable para tomar los codigos de express
const express = require('express');

// Importamos la libreria de dotenv
const dotenv = require('dotenv');
dotenv.config();

// 2. Crear una variable para ejecutar todas las funcionalidades de express
const app = express();

// 3. Utilizamos las funcionalidades de express
// parametros: url/ruta y la funcion que responde a la solicitud
app.get('/',function(peticion, respuesta) {
    
    //console.log(peticion);
    console.log('=============');
    console.log(peticion.url);
    console.log('=============');
    console.log(peticion.method);
    console.log('=============')

    respuesta.send(`<h1>Respondemos a nuestra Petición en el HOME con express</h1>`)

});

// Creamos una ruta que responda el formulario
app.get('/formulario', (req, res)=>{
    console.log(req.url);
    console.log('==========');
    console.log(req.method);
    console.log('==========');

    res.send(`
    <form action="">
        <div class="mb-3">
            <label for="User" class="form-label">User</label>
            <input type="texto" class="form-control" id="user" placeholder="Usuario">
        </div>
            <label for="Password" class="form-label">Contraseña</label>
            <input type="password" id="password" class="form-control">
        <div>
            <button onclick="login()" type="button" class="btn btn-primary w-50">Login</button>
        </div>
        <div class="text-center m-4">
            <button type="reset" class="btn btn-danger w-50">Borrar datos</button>
        </div>
    </form>`
)

})

// 4. Creamos un puerto para la escucha de la aplicacion
const PORT = 9000 ?? 3000;

// otra forma de asignar valor al puerto
const PORT02 = 9000 || 3000;

// Otra forma de asignar valor al puerto
const PORT03 = process.env.PORT || 3030

// ponemos a la escucha nuestro servidor
/*
app.listen(PORT, function() {
    console.log(`Sevidor escuchando en el puerto http://localhost:${PORT}`)
} )
*/

app.listen(PORT, (err) =>{

    // si el servidor tiene un error, nos lanzaria el error para verlo
    if(err) { throw err}

    console.log(`Sevidor escuchando en el puerto http://localhost:${PORT}`);

    console.log('===================');
    //imprimir variables de entorno
    console.log(process.env);
    console.log(process.env.PORT);

    console.log('===================');

    console.log(__dirname);
    console.log(__filename);
});
//JS en ES6: module