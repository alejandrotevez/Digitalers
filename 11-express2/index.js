// Puertos por defecto
//3000: React
//4200: Angular
//8080: Tomcat - Apache - Java
//9000: Java - Spring Boot
//3306: SQL - MySQL
//27017: NoSQL - MongoDB
//5173: Vite
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { html } = require('./inicio')
const PORT = process.env.PORT || 8080;
const app = express();

//importamos un modulo nativo de Node FS
//const fs = require('fs')
const fs = require('node:fs')

//HTTP
//CRUD: Create - Read - Update - Delete
//ABM
app.get('/pedidos', (req, res) =>{
    //res.send();
    //res.json();
    //res.redirect(vista);
    //res.end();
    //res.render(pedidos.hbs motores de plantillas);
    //res.sendFile('index.html');

    console.log('Estan pidiendo algo');

    res.status('404').send(
        `<form action="">
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
    );


});//enpoint


app.get('/json', (req, res)=>{
    console.log('Enviamos una respuesta tipo JSON');

    res.json({
        Respuesta: 'Esto es una respuesta en formato JSON'
    });
})

app.get('/end', (req, res)=>{

    console.log('Enviamos una respuesta tipo JS');
    res.end(html);
});

app.get('/leer', (req, res)=>{

    console.log('Leemos un archivo con FS - node nativo(file Systen)');
    //Leemos un archivo con FS - node nativo(file Systen)
    const data = fs.readFileSync('./inicio.html', 'utf-8')
    console.log(data);

    console.log('=========================');

    //ectura de datos sincronicos
    const otroDato = fs.readFileSync('./texto.txt', 'utf-8')
    console.log(otroDato);

    console.log('==========================');

    //lectura de datos asincronicos
    const lecturaAsinc = fs.readFile('./controllers/asynsc.txt', 'utf-8', (err, data)=>{
        if(err) {console.log(err);}

        console.log(data);
    });

    res.send(data);
    //res.send(otroDato);
    //res.send();
    //res.download('./texto.txt')
});


// Ejemplo de rutas para los endpoint
app.get('/api/usuario/admin')
app.post('/api/usuario/admin');
app.delete('/api/usuario/admin/:id');
app.put('/api/usuario/admin/:id');







app.listen(PORT, () => {
    console.log(`Sevidor escuchando en el puerto http://localhost:${PORT}`);
})